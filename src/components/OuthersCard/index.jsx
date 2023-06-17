/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./styles.module.css";
import filme from "../../assets/filme.png";
// eslint-disable-next-line react/prop-types
export function OthersCard({ thumbnail, movieName, types }) {
  console.log(types);

  const baseUrl = "http://localhost:3000/files/";

  const regex = /[^/\\]+$/;
  // eslint-disable-next-line react/prop-types
  const fileName = thumbnail.match(regex)[0];
  const encodedFileName = encodeURIComponent(fileName);

  const image = baseUrl + encodedFileName;
  return (
    <div className={styles.contentCard}>
      <div className={styles.imgBoxCardOther}>
        <img src={image} alt="" />
        <h1>{movieName}</h1>
      </div>

      <div className={styles.buttonRating}>
        {types.map((type, index) => (
          <button key={index}>{type}</button>
        ))}
      </div>
    </div>
  );
}
