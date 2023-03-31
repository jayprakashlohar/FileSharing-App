import Link from "next/link";
import Styles from "../styles/Navbar.module.css";

const Navbar = () => {
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
          {" "}
          <Link
            href="/Login"
            style={{
              textDecoration: "none",
              marginRight: "20px",
              fontFamily: "cursive",
            }}
          >
            <p>Login</p>
          </Link>
          <Link
            href="/Signup"
            style={{ textDecoration: "none", fontFamily: "cursive" }}
          >
            <p>Signup</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
