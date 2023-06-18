import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { LogoutBtn } from "../LogoutBtn";
// import { SearchHeader } from "../SearchHeader";
import styles from "./styles.module.css";
import user from "../../assets/user.svg";
import logo from "../../../public/logo.svg";

// eslint-disable-next-line react/prop-types
export function HeaderHistoric({ setIsLogout }) {
  const location = useLocation();
  const currentUrl = location.pathname;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    // Lógica adicional se necessário
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Logo" />
        <nav>
          <Link
            to="/movies"
            style={{
              color: currentUrl === "/movies" ? "var(--blue-400)" : "#FFF",
            }}
          >
            Home
          </Link>
          <Link
            to="/historic"
            style={{
              color: currentUrl === "/historic" ? "var(--blue-400)" : "#FFF",
            }}
          >
            Historico
          </Link>
          <Link
            to={`/mymovies/${userId}`}
            style={{
              color:
                currentUrl === `/mymovies/${userId}`
                  ? "var(--blue-400)"
                  : "#FFF",
            }}
          >
            Minha Coleção
          </Link>
        </nav>
        <div className={styles.utilsContent}>
          {/* <SearchHeader/> */}
          <img src={user} alt="Usuario" />
          <LogoutBtn setIsLogout={setIsLogout} />
        </div>
      </div>
    </header>
  );
}
