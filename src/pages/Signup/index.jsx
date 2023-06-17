/* eslint-disable no-unused-vars */
import { HeaderAuth } from "../../components/HeaderAuth";

import { useForm } from "react-hook-form";

import styles from "./styles.module.css";
import Fields from "../../components/Fields";
import { BtnAuthSubmit } from "../../components/BtnAuthSubmit";

import { useNavigate } from "react-router-dom";

import api from "../../services/axios";
import Home from "../Home";
import { Footer } from "../../components/Footer";

export default function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const resolve = await api.post("/signup", data);
    console.log(resolve);

    if (resolve.status === 201) {
      navigate("/signin");
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
              type="text"
              label="name"
              register={register}
              errors={errors}
            />
            <Fields
              type="password"
              label="password"
              register={register}
              errors={errors}
            />
            <BtnAuthSubmit name="Criar Conta" />
          </form>
        </div>
      </main>
      <Home />
      <Footer />
    </>
  );
}
