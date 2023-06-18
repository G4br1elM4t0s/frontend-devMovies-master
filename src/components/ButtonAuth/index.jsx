import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export function ButtonAuth() {
  const location = useLocation();

  let buttonText = "Signup";
  let buttonLink = "/signup";
  if (location.pathname === "/signin") {
    buttonText = "Signin";
    buttonLink = "/signup";
  } else {
    buttonText = "Signup";
    buttonLink = "/signin";
  }

  return (
    <Link to={buttonLink}>
      <button className={styles.buttonAuth}>{buttonText}</button>
    </Link>
  );
}
