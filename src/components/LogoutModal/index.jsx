import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function LogoutModal({ setIsLogout }) {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const handleLogoutYes = () => {
    setIsLogout(false);
    localStorage.removeItem("userId");
    navigate("/");
  };

  const handleLogoutNo = () => {
    setIsLogout(false);
  };

  return (
    <div className={styles.backModal}>
      <div className={styles.modalLogoutBox}>
        <div>
          <h1 className={styles.textClose}>Tem certeza que quer sair?</h1>
        </div>
        <div className={styles.btnsClose}>
          <button className={styles.sim} onClick={handleLogoutYes}>
            Sim
          </button>
          <button className={styles.nao} onClick={handleLogoutNo}>
            Não
          </button>
        </div>
      </div>
    </div>
  );
}
