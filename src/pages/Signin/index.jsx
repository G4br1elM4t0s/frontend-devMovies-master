/* eslint-disable no-unused-vars */
import { HeaderAuth } from "../../components/HeaderAuth";

import { useForm } from "react-hook-form";

import styles from "./styles.module.css";
import Fields from "../../components/Fields";
import { BtnAuthSubmit } from "../../components/BtnAuthSubmit";

import { useNavigate } from "react-router-dom";

import api from "../../services/axios";
import { Footer } from "../../components/Footer";

import Home from "../Home";

export default function Signin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const resolve = await api.post("/auth", data);
    console.log(resolve + " " + resolve.status);
    console.log(resolve.data);
    if (resolve.status === 200) {
      localStorage.setItem("userId", resolve.data.id);
      navigate("/movies");
    }
  };

  return (
    <>
      <HeaderAuth />
      <main className={styles.mainContent}>
        <div>
          <form className={styles.formSignup} onSubmit={handleSubmit(onSubmit)}>
            <Fields
              email={true}
              type="text"
              label="email"
              register={register}
              errors={errors}
            />
            <Fields
              type="password"
              label="password"
              register={register}
              errors={errors}
            />
            <BtnAuthSubmit name="Logar" />
          </form>
        </div>
      </main>
      <Home />
      <Footer />
    </>
  );
}
