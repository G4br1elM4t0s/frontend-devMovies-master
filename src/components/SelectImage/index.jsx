import { useState, useRef } from "react";
import Camera from "../../assets/camera.svg";
import styles from "./styles.module.css";
import excluirazul from "../../assets/excluirazul.svg";

// eslint-disable-next-line react/prop-types
export default function SelectedImage({ register }) {
  const [selectedImage, setSelectedImage] = useState("");
  const inputFileRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
  };

  const handleRemoveImage = () => {
    setSelectedImage("");

    if (inputFileRef.current) {
      inputFileRef.current.value = "";
    }
  };

  return (
    <div className={styles.preview}>
      <label htmlFor="imgcapa">capa</label>
      <div
        className={`${styles.preview_img} ${
          selectedImage ? "" : styles.defaultPreview
        }`}
      >
        {selectedImage ? (
          <>
            <img
              src={selectedImage}
              alt="Imagem selecionada"
              className={styles.selectedImage}
            />
            <img
              className={styles.removeImageButton}
              onClick={handleRemoveImage}
              src={excluirazul}
            />
          </>
        ) : (
          <>
            <img
              src={Camera}
              alt="clique para adicionar capa"
              className={styles.camera}
            />
            <div className={styles.defaultBackground}></div>
          </>
        )}
        <input
          type="file"
          name="imgcapa"
          id="imgcapa"
          onChange={handleImageChange}
          ref={inputFileRef}
          accept="image/*"
          {...register("imgcapa", { required: true })}
        />
      </div>
    </div>
  );
}
