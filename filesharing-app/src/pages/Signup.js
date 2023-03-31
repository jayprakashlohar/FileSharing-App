import { Box, Button, FormLabel, Heading, Input } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Signup = () => {
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
          Signup here
        </Heading>
        <form>
          <FormLabel fontFamily="cursive">Name</FormLabel>
          <Input type="text" placeholder="Enter your name" variant="flushed" />
          <FormLabel mt="10px" fontFamily="cursive">
            Email{" "}
          </FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            variant="flushed"
          />
          <FormLabel mt="10px" fontFamily="cursive">
            Password{" "}
          </FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            variant="flushed"
          />
          <Button
            type="submit"
            w="100%"
            m="auto"
            mt="20px"
            borderRadius="20px"
            fontWeight="bold"
          >
            SIGN IN
          </Button>

          <p style={{ textAlign: "center", margin: "20px" }}>
            Already a user? <span style={{ fontWeight: "bold" }}>Log in</span>
          </p>
        </form>
      </Box>
    </>
  );
};

export default Signup;
