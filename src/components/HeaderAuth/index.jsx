import logo from "../../../public/logo.svg";
import { ButtonAuth } from "../ButtonAuth";
import styles from "./styles.module.css";

export function HeaderAuth() {
  return (
    <>
      <header className={styles.headerContent}>
        <div className={styles.headerBox}>
          <img src={logo} alt="logo" />
          <h1>DevMovies</h1>
          <ButtonAuth />
        </div>
      </header>
    </>
  );
}
