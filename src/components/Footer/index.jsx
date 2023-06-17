import styles from "./styles.module.css";
import btnAjuda from "../../assets/ajuda.svg";

export function Footer() {
  return (
    <>
      <footer className={styles.rodape}>
        <img className={styles.btnAjuda} src={btnAjuda} alt="ajuda" />
      </footer>
    </>
  );
}
