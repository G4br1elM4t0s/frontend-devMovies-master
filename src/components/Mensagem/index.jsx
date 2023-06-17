/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
// eslint-disable-next-line no-unused-vars
import { SearchHeader } from "../SearchHeader";
export function Mensagem(props) {
  const teste = props.isSearchFocused ? styles.isVisible : styles.isHidden;

  return (
    <div className={`${styles.boxMsg} ${teste}`}>
      <div>
        <h1>{props.msg}</h1>
      </div>
    </div>
  );
}
