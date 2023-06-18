import styles from "./styles.module.css";
import filme from "../../assets/filme.png";

// eslint-disable-next-line react/prop-types
export function Card({ onclick, filmeImage, title }) {
  const baseUrl = "http://localhost:3000/files/";
  console.log(filmeImage);
  const regex = /[^/\\]+$/;
  // eslint-disable-next-line react/prop-types
  const fileName = filmeImage.match(regex)[0];
  const encodedFileName = encodeURIComponent(fileName);

  const image = baseUrl + encodedFileName;
  return (
    <>
      <div
        onClick={onclick}
        className={styles.cardBox}
        style={{
          backgroundImage: `url(${filmeImage ? image : filme})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.titleContent}>
          <h1>{title ? title : "error ao renderizar"}</h1>
        </div>
      </div>
    </>
  );
}
