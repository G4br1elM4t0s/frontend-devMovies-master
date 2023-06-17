/* eslint-disable no-unused-vars */
import React from "react";
import naogostei from "../../assets/naogostei.svg";
import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export function DislikeButton({ onClick }) {
  return (
    <button onClick={onClick} className={styles.dislikeButton}>
      <img src={naogostei} alt="dislike" />
    </button>
  );
}
