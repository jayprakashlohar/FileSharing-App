import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/Redux/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signupUser(userData));
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Box
        border="1px solid black "
        h="75vh"
        w={{ base: "90%", md: "40%", sm: "60%", lg: "35%" }}
        m="auto"
        mt="30px"
        p="20px"
        borderRadius="5px"
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
            background="black"
            color="#ffff"
            _hover={{ background: "black" }}
          >
            SIGN IN
          </Button>

          <p
            style={{
              textAlign: "center",
              margin: "20px",
              fontFamily: "cursive",
            }}
          >
            Already a user?{" "}
            <span style={{ fontWeight: "bold", fontFamily: "cursive" }}>
              Log in
            </span>
          </p>
        </form>
      </Box>
    </>
  );
};

export default Signup;
