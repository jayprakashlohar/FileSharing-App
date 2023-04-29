import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";

import Navbar from "./Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useSignupMutation } from "@/Redux/apiSlice";

const Signup = () => {
  const toast = useToast();
  const [signup, { isError, isLoading }] = useSignupMutation();
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();

    signup(userData)
      .unwrap()
      .then((res) => {
        toast({
          title: res.response,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        router.push("/Login");
      })
      .catch((err) => {
        toast({
          title: err.data.response,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="animation_container">
        <div className="animation_round"></div>
        <Box
          h="75vh"
          m="auto"
          p="20px"
          borderRadius="5px"
          w="100%"
          background="#ffff"
        >
          <Heading textAlign="center" m="20px" fontFamily="cursive">
            Signup here
          </Heading>
          <form onSubmit={handleSignup}>
            <FormLabel fontFamily="cursive">Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              variant="flushed"
              required
              value={userData.name}
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
            />
            <FormLabel mt="10px" fontFamily="cursive">
              Email{" "}
            </FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              variant="flushed"
              required
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />

            <FormLabel mt="10px" fontFamily="cursive">
              Password{" "}
            </FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              variant="flushed"
              required
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
            <Button
              type="submit"
              w="100%"
              m="auto"
              mt="20px"
              borderRadius="20px"
              fontWeight="bold"
              color="#ffff"
              bgGradient="linear(to-r, teal.500, green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
            >
              SIGN UP
            </Button>

            <p
              style={{
                textAlign: "center",
                margin: "20px",
                fontFamily: "cursive",
              }}
            >
              Already a user?{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "cursive",
                  cursor: "pointer",
                }}
              >
                Log in
              </span>
            </p>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Signup;
