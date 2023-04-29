import {
  HStack,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { ImDownload } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getSingleFile } from "../Redux/filesSlice";
import download from "downloadjs";
import Navbar from "./Navbar";

const Download = () => {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();

  const [filePassword, setFilePassword] = useState("");
  const [downloadStatus, setDownloadStatus] = useState(false);
  const singleFile = useSelector((state) => state.files.singleFile);

  useEffect(() => {
    dispatch(getSingleFile(router.query.id));
  }, [router.query.id]);

  // download file function
  const handleDownload = () => {
    let message;
    let status;

    if (
      !singleFile.isProtected ||
      (singleFile.isProtected && singleFile.password == filePassword)
    ) {
      setDownloadStatus(true);
      // extract file extension from url
      const fileExtension = singleFile.fileData.split(".").pop();
      const fileName = singleFile.name + "." + fileExtension;
      console.log("fileName", fileName);
      // download file
      download(singleFile.fileData, fileName);

      setDownloadStatus(false);

      status = "success";
      message = "downloaded with password";
    } else {
      status = "error";
      message = "Somthing Went Wront!";
    }

    return toast({
      position: "top-right",
      title: message,
      status: status,
      duration: 6000,
      isClosable: true,
    });
  };

  return (
    <>
      <Navbar />
      {/* flex container */}
      <Flex
        h="90vh"
        align="center"
        justify="center"
        flexDirection="column"
        gap="1rem"
      >
        {/* heading */}
        <Heading> Download File </Heading>

        {/* box that contain file name & download button */}

        {singleFile ? (
          <Box
            w="20rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            gap="1rem"
            justify="center"
            align="center"
            border="1px"
            borderRadius="1rem"
            borderColor="teal"
            boxShadow="dark-lg"
          >
            {/* download icon */}
            <Box>
              <ImDownload size="100px" color="teal" />
            </Box>

            {/* file name */}
            <HStack m="auto">
              {" "}
              <Text as="b"> Name: </Text>{" "}
              <Text>
                {" "}
                {singleFile.name} . {singleFile.fileType}{" "}
              </Text>
            </HStack>

            {/* file size */}
            <HStack m="auto">
              {" "}
              <Text as="b"> Size: </Text> <Text> 1 MB </Text>
            </HStack>

            {/* password input */}
            {singleFile.isProtected ? (
              <Input
                type="password"
                value={filePassword}
                onChange={(e) => {
                  setFilePassword(e.target.value);
                }}
                placeholder="Enter Password"
              />
            ) : (
              ""
            )}

            {/* download button */}
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={handleDownload}
              disabled={downloadStatus}
            >
              {downloadStatus ? "Downloading..." : "Download"}
            </Button>
          </Box>
        ) : (
          ""
        )}
      </Flex>
    </>
  );
};

export default Download;
