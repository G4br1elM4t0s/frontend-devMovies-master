import { useState } from "react";

import styles from "./styles.module.css";
import { HeaderHome } from "../../components/Header";
import { Footer } from "../../components/Footer";

import Arrow from "../../assets/arrow.svg";
import SelectedImage from "../../components/SelectImage";

export default function Admin() {
  const [filmeDisplay, setFilmeDisplay] = useState(false);
  const [streamerDisplay, setStreamerDisplay] = useState(false);

  const toggleFilmeDisplay = () => {
    setFilmeDisplay(!filmeDisplay);
  };

  const toggleStreamerDisplay = () => {
    setStreamerDisplay(!streamerDisplay);
  };

  return (
    <>
      <HeaderHome />

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
              <form id={styles.cadastro_midia} action="">
                <article className={styles.c1}>
                  <div>
                    <label htmlFor="nomemidia">nome</label>
                    <input type="text" name="nomemidia" id="nomemidia" />
                  </div>
                  <div>
                    <label htmlFor="ano">ano</label>
                    <input type="text" name="ano" id="ano" />
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
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="genero">genero</label>
                      <input type="text" name="genero" id="genero" />
                    </div>
                  </aside>

                  <SelectedImage />
                </article>

                <article className={styles.c3}>
                  <div>
                    <label htmlFor="elenco">elenco</label>
                    <input type="text" name="elenco" id="elenco" />
                  </div>

                  <div>
                    <label htmlFor="streamer">streamer</label>
                    <select name="streamer" id="streamer">
                      <option value="Netflix">Netflix</option>
                      <option value="Amazon Prime">Amazon Prime</option>
                      <option value="Disney+">Disney+</option>
                      <option value="GloboPlay">GloboPlay</option>
                    </select>
                  </div>
                </article>

                <button className={styles.btn_secundario} type="submit">
                  Cadastrar mídia
                </button>
              </form>
            )}
          </div>

          <div className={styles.dropdown}>
            <div
              className={styles.campoStreamer}
              onClick={toggleStreamerDisplay}
            >
              <h5>Streamers</h5>
              <img
                className={
                  streamerDisplay
                    ? `${styles.seta} ${styles.animate}`
                    : styles.seta
                }
                src={Arrow}
                alt="seta"
              />
            </div>

            {streamerDisplay && (
              <form className={styles.cadastro_streamer} action="">
                <label htmlFor="nomestreamer">nome</label>
                <input type="text" name="nomestreamer" id="nomestreamer" />
                <label htmlFor="link">link</label>
                <input type="text" name="link" id="link" />

                <button className={styles.btn_secundario} type="submit">
                  Cadastrar Streamers
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
