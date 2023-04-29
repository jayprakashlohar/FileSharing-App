import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import React, { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import { useLoginMutation } from "@/Redux/apiSlice";

const Login = () => {
  const toast = useToast();
  const router = useRouter();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [login, { isError, isLoading }] = useLoginMutation();

  const handleLogin = (e) => {
    e.preventDefault();

    login(userData)
      .unwrap()
      .then((res) => {
        toast({
          title: res.response,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        localStorage.setItem("loginToken", res.token);
        router.push("/");
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
          background="white"
          m="auto"
          p="20px"
          borderRadius="5px"
          w={"100%"}
        >
          <Heading textAlign="center" m="20px" fontFamily="cursive">
            Login here
          </Heading>
          <form onSubmit={handleLogin}>
            <FormLabel fontFamily="cursive">Email </FormLabel>
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
            <FormLabel mt="20px" fontFamily="cursive">
              Password
            </FormLabel>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                variant="flushed"
                required
                value={userData.password}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  background="none"
                  onClick={handleClick}
                >
                  {show ? (
                    <BiShowAlt style={{ width: "20px", height: "20px" }} />
                  ) : (
                    <BiHide style={{ width: "20px", height: "20px" }} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <p
              style={{
                float: "right",
                marginTop: "8px",
                fontFamily: "cursive",
                cursor: "pointer",
              }}
            >
              Forgot password
            </p>
            <Button
              type="submit"
              w="100%"
              m="auto"
              mt="25px"
              borderRadius="20px"
              fontWeight="bold"
              background="black"
              color="#ffff"
              bgGradient="linear(to-r, teal.500, green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
            >
              LOGIN
            </Button>

            <p
              style={{
                textAlign: "center",
                margin: "20px",
                fontFamily: "cursive",
              }}
            >
              Don't have an account?{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "cursive",
                  cursor: "pointer",
                }}
              >
                Sign up
              </span>
            </p>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Login;
