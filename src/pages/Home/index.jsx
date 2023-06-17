import styles from "./styles.module.css";

import ilustration1 from "../../assets/ilustração.svg";
import ilustration2 from "../../assets/ilustração2.svg";

import leftLogin from "../../assets/leftLogin.svg";
import rightLogin from "../../assets/rightLogin.svg";

export default function Home() {
  return (
    <>
      <main className={styles.mainContent}>
        <img className={styles.leftLogin} src={rightLogin} alt="leftLogin" />
        <div className={styles.contentExplication}>
          <p>
            Bem-vindo(a) ao nosso incrível site de gerenciamento de mídia! Aqui
            você pode salvar todos os filmes e séries que já assistiu, além de
            classificar cada um deles. É fácil e divertido! Você pode criar
            listas personalizadas e adicionar tags para organizar seus títulos
            favoritos. E o melhor de tudo, é grátis! Junte-se à nossa comunidade
            agora e compartilhe suas recomendações com seus amigos. Vamos
            começar a maratonar!
          </p>
          <img src={ilustration1} alt="explicationPuppet" />
        </div>

        <div className={styles.contentSituation}>
          <img src={ilustration2} alt="situationPuppet" />
          <p>
            Este projeto foi criado por cinco membros durante o último período
            em que eles estavam cursando a faculdade. Durante o processo de
            criação do projeto, os membros da equipe trabalharam juntos para
            planejar, projetar e desenvolver a plataforma, utilizando
            habilidades e conhecimentos adquiridos ao longo de seus estudos.
          </p>
        </div>
        <img className={styles.rightLogin} src={leftLogin} alt="rightLogin" />
      </main>
    </>
  );
}
