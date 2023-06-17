/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import filme from "../../assets/filme.png";

export function CardHistoric({
  type,
  filmeName,
  thumbnail,
  description,
  streamers,
}) {
  const baseUrl = "http://localhost:3000/files/";

  const regex = /[^/\\]+$/;
  // eslint-disable-next-line react/prop-types
  const fileName = thumbnail.match(regex)[0];
  const encodedFileName = encodeURIComponent(fileName);

  const image = baseUrl + encodedFileName;
  return (
    <div className={styles.boxHistoric}>
      <div className={styles.contentImage}>
        <img src={image} alt="teste" />
      </div>
      <div className={styles.contentDesc}>
        <h1>{filmeName}</h1>
        <p> {description} </p>
        <div className={styles.streamers}>
          {streamers.map((streamer) => (
            <a key={streamer.id} href={streamer.link}>
              {streamer.name}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.contentButtons}>
        {type.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </div>
  );
}
