import styles from "./styles.module.css";

import { useLocation } from "react-router-dom";

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
    <a href={buttonLink}>
      <button className={styles.buttonAuth}>{buttonText}</button>
    </a>
  );
}
