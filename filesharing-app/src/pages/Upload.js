import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { uploadToServer } from "../Redux/filesSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Upload = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [fileType, setFiletype] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [fileProtected, setFileProtected] = useState(false);
  const [process, setProcess] = useState(false);
  const [token, setToken] = useState(null);

  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    if (url) {
      let isProtected = fileProtected;
      let pic = url;
      dispatch(uploadToServer(name, fileType, password, isProtected, pic));
      router.push("/UploadFileSuccess");
      // toast message
      let toastStatus = "success";
      let message = "File Successfully uploaded!";
      toastMessage(toastStatus, message);
    }
    setProcess(false);
    setToken(localStorage.getItem("loginToken"));
  }, [url]);

  const postDetails = async () => {
    if (!token) {
      return toast({
        title: "Please login first",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    setProcess(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "filesharing-app");
    data.append("cloud_name", "dmzzzl5jj");
    let ans;

    ans = await fetch(
      "https://api.cloudinary.com/v1_1/dmzzzl5jj/image/upload",
      {
        method: "post",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setName(data.original_filename);
        setFiletype(data.format);
        setUrl(data.url);
        // console.log("data",data)
      })
      .catch((err) => {
        setProcess(false);

        // toast message
        let toastStatus = "error";
        let message = "File Uploading Failed!";
        toastMessage(toastStatus, message);
      });
  };

  function toastMessage(toastStatus, message) {
    return toast({
      position: "top-right",
      title: message,
      status: toastStatus,
      duration: 9000,
      isClosable: true,
    });
  }

  return (
    <Box
      backgroundImage="url('https://info.varonis.com/hubfs/Imported_Blog_Media/secure-files-hero-3.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex h="91vh" align="center" justify="center" flexDirection="column">
        <Heading
          m="20px"
          fontFamily="cursive"
          textAlign="center"
          fontSize="25px"
          color="#ffff"
        >
          {" "}
          Upload File Here...{" "}
        </Heading>
        {/*   this input box contain all the inputs */}
        <Box
          bg="white"
          w="20rem"
          display="flex"
          flexDirection="column"
          gap="1rem"
          boxShadow="dark-lg"
          p="1.5rem"
          border="1px"
          borderColor="teal"
          borderRadius="1rem"
        >
          {/* this box contain only file input */}
          <Box
            height="200px"
            border="2px"
            borderColor="teal"
            borderStyle="dashed"
            borderRadius="1rem"
            overflow="hidden"
            backgroundImage={`url(http://res.cloudinary.com/dmzzzl5jj/image/upload/v1675932758/ur2hvbmmuiigrnpffhxs.png)`}
            backgroundSize="170px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          >
            {/* file input */}
            <Input
              opacity={image ? 1 : 0}
              border="none"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              height="100%"
            />
          </Box>

          <Checkbox
            onChange={() => {
              setFileProtected(!fileProtected);
            }}
          >
            Set Password
          </Checkbox>
          <Input
            value={password}
            placeholder="Set Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            disabled={!fileProtected}
          />
          <Button
            bg="teal"
            color="white"
            onClick={() => postDetails()}
            colorScheme="teal"
            isLoading={process}
            loadingText={process ? "Please Wait" : ""}
            variant={process ? "outline" : "solid"}
          >
            Upload File{" "}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Upload;
