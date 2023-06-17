// eslint-disable-next-line no-unused-vars
import React from "react";
import like from "../../assets/gostei.svg";
import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export function LikeButton({ onClick }) {
  return (
    <button onClick={onClick} className={styles.buttonLike}>
      <img src={like} alt="like" />
    </button>
  );
}
