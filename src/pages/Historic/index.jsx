/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { BackgroundLogged } from "../../components/BackgroundLogged";
import { CardHistoric } from "../../components/CardHistoric";
import { Footer } from "../../components/Footer";
import { HeaderHome } from "../../components/Header";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import api from "../../services/axios";
import { OthersCard } from "../../components/OuthersCard";
import { HeaderHistoric } from "../../components/HeaderHistoric";
import { LogoutModal } from "../../components/LogoutModal";

export default function Historic() {
  const user = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [historic, setHistoric] = useState([]);
  const [recent, setRecent] = useState({});
  const [others, setOthers] = useState([]);
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    if (!user || user === "") {
      navigate("/");
    }
    async function loadUser() {
      const response = await api.get(`/user/${user}/rating`);
      setHistoric(response.data.likes);
      const smallestItem = response.data.likes.reduce((smallest, current) => {
        if (!smallest || current.time < smallest.time) {
          return current;
        } else {
          return smallest;
        }
      }, null);
      setRecent(smallestItem);

      const remainingItems = response.data.likes.filter(
        (item) => item !== smallestItem
      );

      setOthers(remainingItems);
    }
    loadUser();
  }, [user, navigate]);

  console.log(historic);

  return (
    <>
      {isLogout && <LogoutModal setIsLogout={setIsLogout} />}

      <HeaderHistoric setIsLogout={setIsLogout} />
      <main className={styles.mainContent}>
        <BackgroundLogged />
        <section className={styles.boxContent}>
          {historic.length > 1 ? (
            Array.isArray(historic) ? (
              <div className={styles.historys}>
                {recent ? (
                  <CardHistoric
                    filmeName={recent.movie.name}
                    description={recent.movie.description}
                    streamers={recent.movie.streamers}
                    thumbnail={recent.movie.thumbnail}
                    type={recent.type.split(",")}
                  />
                ) : (
                  <h1>loading</h1>
                )}
                <div className={styles.boxOther}>
                  {others.map((outher) => (
                    <OthersCard
                      key={outher.id}
                      movieName={outher.movie.name}
                      thumbnail={outher.movie.thumbnail}
                      types={outher.type.split(",")}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <h1>loading</h1>
            )
          ) : Array.isArray(historic) ? (
            historic.map((item, index) => (
              <CardHistoric
                key={recent.id}
                filmeName={recent.movie.name}
                description={recent.movie.description}
                streamers={recent.movie.streamers}
                thumbnail={recent.movie.thumbnail}
                type={recent.type.split(",")}
              />
            ))
          ) : (
            <h1>loading</h1>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
