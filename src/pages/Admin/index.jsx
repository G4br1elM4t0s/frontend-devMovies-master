/* eslint-disable no-unused-vars */
import { useState } from "react";

import styles from "./styles.module.css";
import { Footer } from "../../components/Footer";

import Arrow from "../../assets/arrow.svg";
import SelectedImage from "../../components/SelectImage";
import { HeaderHistoric } from "../../components/HeaderHistoric";
import { useForm } from "react-hook-form";
import api from "../../services/axios";

export default function Admin() {
  // const adm = localStorage.get("role");
  const userId = localStorage.getItem("userId");
  const formData = new FormData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const arquivo = data["imgcapa"];
    formData.append("name", data.nomemidia);
    formData.append("description", data.descricao);
    formData.append("streamersString", data.streamer);
    formData.append("categoriesString", data.genero);
    formData.append("cast", data.elenco);
    formData.append("file", arquivo[0]);
    const response = await api.post(`/movie/${userId}`, formData);
    console.log(response.data);
  };

  const [filmeDisplay, setFilmeDisplay] = useState(false);
  const [streamerDisplay, setStreamerDisplay] = useState(false);

  const toggleFilmeDisplay = () => {
    setFilmeDisplay(!filmeDisplay);
  };

  const toggleStreamerDisplay = () => {
    setStreamerDisplay(!streamerDisplay);
  };

  const handleSubmitMidia = () => {};
  const handleSubmitGenres = () => {};

  return (
    <>
      <HeaderHistoric />

      <main className={styles.mainContent}>
        <section className={styles.campoGerencia}>
          <div className={styles.dropdown}>
            <div className={styles.campoFilme} onClick={toggleFilmeDisplay}>
              <h5>Filmes e Séries</h5>
              <img
                className={
                  filmeDisplay
                    ? `${styles.seta} ${styles.animate}`
                    : styles.seta
                }
                src={Arrow}
                alt="seta"
              />
            </div>

            {filmeDisplay && (
              <form
                id={styles.cadastro_midia}
                onSubmit={handleSubmit(onSubmit)}
              >
                <article className={styles.c1}>
                  <div>
                    <label htmlFor="nomemidia">nome</label>
                    <input
                      type="text"
                      name="nomemidia"
                      id="nomemidia"
                      {...register("nomemidia", { required: true })}
                    />
                    {errors?.nomemidia?.type === "required" && (
                      <p className={styles.errorMessage}> nome is required</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="ano">ano</label>
                    <input
                      type="text"
                      name="ano"
                      id="ano"
                      {...register("ano", { required: true })}
                    />
                    {errors?.ano?.type === "required" && (
                      <p className={styles.errorMessage}> ano is required</p>
                    )}
                  </div>
                </article>

                <article className={styles.c2}>
                  <aside>
                    <div>
                      <label htmlFor="descricao">descricao</label>
                      <textarea
                        className={styles.descricao}
                        rows="4"
                        cols="50"
                        {...register("descricao", { required: true })}
                      ></textarea>
                      {errors?.descricao?.type === "required" && (
                        <p className={styles.errorMessage}>
                          {" "}
                          descricao is required
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="genero">genero</label>
                      <input
                        type="text"
                        name="genero"
                        id="genero"
                        {...register("genero", { required: true })}
                      />
                      {errors?.descricao?.type === "required" && (
                        <p className={styles.errorMessage}>
                          {" "}
                          descricao is required
                        </p>
                      )}
                    </div>
                  </aside>

                  <SelectedImage register={register} />
                </article>

                <article className={styles.c3}>
                  <div>
                    <label htmlFor="elenco">elenco</label>
                    <input
                      type="text"
                      name="elenco"
                      id="elenco"
                      {...register("elenco", { required: true })}
                    />
                    {errors?.descricao?.type === "required" && (
                      <p className={styles.errorMessage}>
                        {" "}
                        descricao is required
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="streamer">streamer</label>
                    <select
                      name="streamer"
                      id="streamer"
                      {...register("streamer", { required: true })}
                    >
                      <option value="Netflix">Netflix</option>
                      <option value="Amazon Prime">Amazon Prime</option>
                      <option value="Disney+">Disney+</option>
                      <option value="GloboPlay">GloboPlay</option>
                    </select>
                    {errors?.descricao?.type === "required" && (
                      <p className={styles.errorMessage}>
                        {" "}
                        descricao is required
                      </p>
                    )}
                  </div>
                </article>

                <button className={styles.btn_secundario} type="submit">
                  Cadastrar mídia
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
