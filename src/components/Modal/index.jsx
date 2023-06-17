/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import { LikeButton } from "../LikeButton";
import { DislikeButton } from "../DislikeButton";
import { useEffect, useState } from "react";
import api from "../../services/axios";
// eslint-disable-next-line react/prop-types
export function Modal({
  manter,
  fechar,
  selectedMovieId,
  handleLike,
  handleDislike,
  handleWatched,
  handleToWatch,
}) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function details() {
      try {
        const response = await api.get(`/movie/${selectedMovieId}`);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    details();
  }, [selectedMovieId]);

  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  const baseUrl = "http://localhost:3000/files/";

  let fileName = "";
  if (movie.thumbnail) {
    const regex = /[^/\\]+$/;
    fileName = movie.thumbnail.match(regex)[0];
  }
  const encodedFileName = encodeURIComponent(fileName);
  const image = baseUrl + encodedFileName;

  return (
    <div className={styles.backModal} onClick={fechar}>
      <div className={styles.modal} onClick={handleModalContentClick}>
        <img src={image} alt="movie" />
        <div className={styles.details} onClick={manter}>
          <h1>{movie.name}</h1>
          <h2>{movie.description}</h2>
          <span className={styles.castGenres}>
            <h3>Gênero</h3>:
            {Array.isArray(movie.genres) ? (
              movie.genres.map((genero) => <p key={genero.id}>{genero.name}</p>)
            ) : (
              <p>Loading genres...</p>
            )}
          </span>
          <span className={styles.castGenres}>
            <h3>Elenco</h3>:<p>{movie.cast}</p>
          </span>

          <div className={styles.streams}>
            <div>
              {Array.isArray(movie.streamers) ? (
                movie.streamers.map((streamers) => (
                  <a
                    key={streamers.id}
                    href={streamers.link !== "" ? streamers.link : "#"}
                  >
                    {streamers.name}
                  </a>
                ))
              ) : (
                <p>Loading genres...</p>
              )}
            </div>
          </div>
          <div className={styles.rating}>
            <LikeButton onClick={handleLike} />
            <DislikeButton onClick={handleDislike} />
            <button className={styles.attend} onClick={handleWatched}>
              <p>Assistido</p>
            </button>
            <button className={styles.attend} onClick={handleToWatch}>
              <p>A assistir</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
