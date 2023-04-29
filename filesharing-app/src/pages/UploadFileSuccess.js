import {
  Center,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { RiFileCopyFill } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const UploadFileSuccess = () => {
  const [url, setUrl] = useState("");
  const uploadedFileId = useSelector((state) => state.files.fileID);
  const toast = useToast();

  console.log("url", url);
  useEffect(() => {
    let location = window.location.href;
    let id = uploadedFileId;

    location = location.replace("/UploadFileSuccess", "");
    // set url to input
    setUrl(`${location}/${id}`);
  }, [uploadedFileId]);

  // copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(url);

    return toast({
      position: "top-right",
      title: "Url Copy To ClipBoard!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Navbar />
      <Center w="100%" h="90%" mt="20%">
        <InputGroup cursor="pointer" w="fit-content" bg="white">
          <Input value={url} />
          <InputRightElement
            children={<RiFileCopyFill color="teal" />}
            onClick={handleCopy}
          />
        </InputGroup>
      </Center>
    </>
  );
};

export default UploadFileSuccess;
