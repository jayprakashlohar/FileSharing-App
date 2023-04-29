import Link from "next/link";
import Styles from "../styles/Navbar.module.css";
import { Box, useToast } from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiFillFileImage } from "react-icons/ai";

const Navbar = () => {
  const toast = useToast();
  const router = useRouter();
  const [token, setToken] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    toast({
      title: "Logout successfully",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
    router.push("/Login");
  };

  useEffect(() => {
    setToken(localStorage.getItem("loginToken"));
  }, []);

  return (
    <>
      <div className={Styles.navMainDiv}>
        <div>
          {" "}
          <Link
            href="/"
            style={{ textDecoration: "none", fontFamily: "cursive" }}
          >
            <p className={Styles.navHeading}>File Sharing-App</p>
          </Link>
        </div>
        <div className={Styles.navSubDiv}>
          {token && (
            <Link
              href="/DisplayFiles"
              style={{
                textDecoration: "none",
                marginRight: "20px",
                fontFamily: "cursive",
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="5px"
              >
                <AiFillFileImage style={{ color: "#ffff" }} />
                <p>AllFiles</p>
              </Box>
            </Link>
          )}
          {!token && (
            <Link
              href="/Signup"
              style={{ textDecoration: "none", fontFamily: "cursive" }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="5px"
                marginRight="10px"
              >
                <FaUser style={{ color: "#ffff" }} />
                <p>Signup</p>
              </Box>
            </Link>
          )}
          {!token && (
            <Link
              href="/Login"
              style={{
                textDecoration: "none",
                marginRight: "20px",
                fontFamily: "cursive",
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="5px"
              >
                <BiLogIn style={{ color: "#ffff" }} />
                <p>Login</p>
              </Box>
            </Link>
          )}

          {token && (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="5px"
              cursor="pointer"
            >
              <BiLogIn style={{ color: "#ffff" }} />
              <p onClick={handleLogout}>Logout</p>
            </Box>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
