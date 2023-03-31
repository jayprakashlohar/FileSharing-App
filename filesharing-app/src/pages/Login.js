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
import React from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Box
        border="1px solid black "
        h="75vh"
        w="35%"
        m="auto"
        mt="30px"
        p="20px"
        borderRadius="5px"
      >
        <Heading textAlign="center" m="20px" fontFamily="cursive">
          Login here
        </Heading>
        <form>
          <FormLabel fontFamily="cursive">Email </FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            variant="flushed"
          />
          <FormLabel mt="20px" fontFamily="cursive">
            Password{" "}
          </FormLabel>

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              variant="flushed"
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
          >
            LOGIN
          </Button>

          <p style={{ textAlign: "center", margin: "20px" }}>
            Don't have an account?{" "}
            <span style={{ fontWeight: "bold" }}>Sign up</span>
          </p>
        </form>
      </Box>
    </>
  );
};

export default Login;
