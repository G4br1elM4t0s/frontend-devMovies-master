/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { LogoutBtn } from "../LogoutBtn";
import { SearchHeader } from "../SearchHeader";
import styles from "./styles.module.css";
import user from "../../assets/user.svg";
import logo from "../../../public/logo.svg";

export function HeaderHome({ setIsSearchFocused, setValue, value }) {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);
  const userId = localStorage.getItem("userId");

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="Logo" />
        <nav>
          <a
            href="/movies"
            style={{
              color:
                currentUrl === "http://localhost:5173/movies"
                  ? "var(--blue-400)"
                  : "#FFF",
            }}
          >
            Home
          </a>
          <a
            style={{
              color:
                currentUrl === "http://localhost:5173/historic"
                  ? "var(--blue-400)"
                  : "#FFF",
            }}
            href="/historic"
          >
            Historico
          </a>
          <a
            style={{
              color:
                currentUrl === `http://localhost:5173/mymovies/${userId}`
                  ? "var(--blue-400)"
                  : "#FFF",
            }}
            href={`/mymovies/${userId}`}
          >
            Minha Coleção
          </a>
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
