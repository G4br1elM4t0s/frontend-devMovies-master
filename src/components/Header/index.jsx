/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

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
          <NavLink
            exact
            to="/movies"
            isActive={() => currentUrl === "/movies"}
            activeStyle={{ color: "var(--blue-400)" }}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/historic"
            isActive={() => currentUrl === "/historic"}
            activeStyle={{ color: "var(--blue-400)" }}
          >
            Historico
          </NavLink>
          <NavLink
            exact
            to={`/mymovies/${userId}`}
            isActive={() => currentUrl === `/mymovies/${userId}`}
            activeStyle={{ color: "var(--blue-400)" }}
          >
            Minha Coleção
          </NavLink>
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
