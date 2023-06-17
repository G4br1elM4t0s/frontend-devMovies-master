/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export default function Fields({ type, label, register, errors }) {
  return (
    <div className={styles.fieldContent}>
      <label>{label}</label>
      <input
        type={type}
        name={label}
        {...register(label, { required: true })}
      />
      {errors?.[label]?.type === "required" && (
        <p className={styles.errorMessage}> {label} is required</p>
      )}
    </div>
  );
}
