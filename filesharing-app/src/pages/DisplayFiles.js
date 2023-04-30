import {
  Box,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFileEarmarkMedical, BsEyeFill } from "react-icons/bs";
import { getAllFiles } from "../Redux/filesSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Navbar from "./Navbar";
import axios from "axios";

const DisplayFiles = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const allFiles = useSelector((state) => state.files.allFiles);
  const [userId, setUserId] = useState(0);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://lord-file-share.glitch.me/api/get/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
          },
        }
      );
      toast({
        title: "File deleted successfully",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      dispatch(getAllFiles());
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const openDelete = (id) => {
    onOpen();
    setUserId(id);
  };

  useEffect(() => {
    dispatch(getAllFiles());
  }, []);

  return (
    <>
      <Navbar />
      <Heading m="20px" textAlign="center" fontSize="25px" fontFamily="cursive">
        AllFiles...
      </Heading>
      <SimpleGrid minChildWidth="130px" spacing="2rem" p="2rem">
        {allFiles &&
          allFiles?.map((el) => (
            <Box
              overflow="hidden"
              borderRadius="1rem"
              boxShadow="2xl"
              height="fit-content"
              pt="1rem"
              align="center"
              border="1px solid teal"
              borderColor="teal"
              key={el._id}
            >
              \
              <Link href={`/${el._id}`}>
                <BsFileEarmarkMedical size="100px" />
              </Link>
              <Flex
                mb="0.5rem"
                mt="0.5rem"
                gap="0.5rem"
                color="#1a202c"
                justifyContent="space-around"
                cursor={"pointer"}
              >
                {/* preview button */}

                <IconButton
                  h="fit-content"
                  w="fit-content"
                  _hover={{ background: "transparent" }}
                  icon={<BsEyeFill size="20px" />}
                />
                <AiFillDelete onClick={() => openDelete(el._id)} />
              </Flex>
              {/* file name */}
              <Box bg="teal" p="0.5rem" color="white">
                <Text lineHeight="1rem" m="0px" p="0px">
                  {" "}
                  {el.name} . {el.fileType}{" "}
                </Text>
              </Box>
            </Box>
          ))}
      </SimpleGrid>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove File</ModalHeader>
          {/* <hr/> */}
          <Text ml="25px">Are you sure you want to remove this file?</Text>
          <ModalCloseButton />
          <ModalBody pb={6}>{/* hello */}</ModalBody>

          <ModalFooter>
            <Button
              onClick={onClose}
              mr={3}
              variant="outline"
              _hover={{ color: "blue" }}
              borderRadius="none"
            >
              {" "}
              CANCEL
            </Button>

            <Button
              colorScheme="blue"
              _hover="none"
              borderRadius="none"
              onClick={() => handleDelete(userId)}
            >
              REMOVE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DisplayFiles;
