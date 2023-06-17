import styles from "./styles.module.css";
import background from "../../assets/backgroundLogged.svg";

export function BackgroundLogged() {
  return (
    <div className={styles.barGraphs}>
      <img src={background} alt="Fundo" />
    </div>
  );
}
