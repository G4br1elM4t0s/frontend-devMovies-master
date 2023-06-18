/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { LogoutBtn } from "../LogoutBtn";
import { SearchHeader } from "../SearchHeader";
import styles from "./styles.module.css";
import user from "../../assets/user.svg";
import logo from "../../../public/logo.svg";

export function HeaderHome({ setIsSearchFocused, setValue, value }) {
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location.pathname]);

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
          <SearchHeader
            setIsSearchFocused={setIsSearchFocused}
            setValue={setValue}
            value={value}
          />
          <img src={user} alt="Usuario" />
          <LogoutBtn />
        </div>
      </div>
    </header>
  );
}
