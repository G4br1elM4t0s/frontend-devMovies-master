import { HeaderHome } from "../../components/Header";
import { Mensagem } from "../../components/Mensagem";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { BackgroundLogged } from "../../components/BackgroundLogged";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal";
import api from "../../services/axios";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { LogoutModal } from "../../components/LogoutModal";

export default function Movies() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const [isLogout, setIsLogout] = useState(false);

  const [value, setValue] = useState("");

  const filterMovie =
    value.length > 0
      ? movies.filter((m) =>
          m.name.toString().toLowerCase().includes(value.toLowerCase())
        )
      : [];

  const user = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user === "") {
      navigate("/");
    }
  }, [user, navigate]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const loadMovies = async () => {
      const response = await api.get("/movies");
      console.log(response);

      setMovies(response.data);
    };
    loadMovies();
  }, []);

  const handleDivClick = (id) => {
    setIsModalOpen(true);
    setSelectedMovieId(id);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleOutsideClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isLogout && <LogoutModal setIsLogout={setIsLogout} />}
      <HeaderHome
        setIsSearchFocused={setIsSearchFocused}
        value={value}
        setValue={setValue}
        setIsLogout={setIsLogout}
        setOpen={setOpen}
        open={open}
      />
      {isSearchFocused ? (
        isSearchFocused && value === "" ? (
          <Mensagem
            isSearchFocused={isSearchFocused}
            msg="pesquise o nome de um filme ou série."
          />
        ) : (
          <main className={styles.mainContent}>
            <BackgroundLogged />
            <div className={styles.cardsControll}>
              {filterMovie.map((movie) => (
                <Card
                  key={movie.id}
                  onclick={() => handleDivClick(movie.id)}
                  filmeImage={movie.thumbnail}
                  title={movie.name}
                />
              ))}
              {isModalOpen && (
                <Modal
                  fechar={isModalOpen ? handleOutsideClick : () => {}}
                  manter={handleModalClick}
                  selectedMovieId={selectedMovieId}
                />
              )}
            </div>
          </main>
        )
      ) : (
        <main className={styles.mainContent}>
          <BackgroundLogged />
          <div className={styles.cardsControll}>
            {movies.map((movie) => (
              <Card
                key={movie.id}
                onclick={() => handleDivClick(movie.id)}
                filmeImage={movie.thumbnail}
                title={movie.name}
              />
            ))}
            {isModalOpen && (
              <Modal
                fechar={isModalOpen ? handleOutsideClick : () => {}}
                manter={handleModalClick}
                selectedMovieId={selectedMovieId}
              />
            )}
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}
