import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
export function LogoutBtn({ setIsLogout }) {
  return (
    <>
      <button onClick={() => setIsLogout(true)} className={styles.btnLogout}>
        Sair
      </button>
    </>
  );
}
