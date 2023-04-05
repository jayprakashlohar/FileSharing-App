import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import React, { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { loginUser } from "@/Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Box
        border="1px solid black "
        h="75vh"
        m="auto"
        mt="30px"
        p="20px"
        borderRadius="5px"
        w={{ base: "90%", md: "40%", sm: "60%", lg: "35%" }}
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
                  <BiHide style={{ width: "20px", height: "20px" }} />
                ) : (
                  <BiShowAlt style={{ width: "20px", height: "20px" }} />
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
            _hover={{ background: "black" }}
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
            <span style={{ fontWeight: "bold", fontFamily: "cursive" }}>
              Sign up
            </span>
          </p>
        </form>
      </Box>
    </>
  );
};

export default Login;
