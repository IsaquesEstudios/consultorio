"use client";

import Image from "next/image";
import Est from "./../img/estética.jpeg";

import { ImWhatsapp } from "react-icons/im";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";

import Corpo from "./../img/Corporal.jpg";
import Facial from "./../img/Facial.jpg";
import Outro from "./../img/outros.jpg";
import Logo from "./../img/logo.jpeg";
import Bruna from "./../img/bruna.jpeg";
import Zap from "@/components/zap";

import slide1 from "./../img/slide/9ef5139b-ce86-4a61-b556-434fb137fc28.jpg";
import slide2 from "./../img/slide/648a270f-3cc4-4b1a-9ec7-ac81c6b7231a.jpg";
import slide3 from "./../img/slide/d7ea91b6-c62f-4346-8420-64b82479a7ae.jpg";
import slide4 from "./../img/slide/e5b09a39-9286-4619-93c5-aae0eca20777.jpg";
import slide5 from "./../img/slide/e18a28c8-2beb-4035-b2f3-5fbb17ac5778.jpg";

import axios from "axios";
import { FormEvent, useState } from "react";
import { GrFormClose } from "react-icons/gr";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(true);

  async function HandleForm(e: FormEvent) {
    e.preventDefault();

    const data = {
      // emailTo: ["ezeque_2008@Hotmail.com", "sellbruna@hotmail.com"],
      emailTo: "ezeque2008@gmail.com",
      title: "Formulário",
      name,
      phone,
      message,
    };

    try {
      await axios.post("https://main-form.herokuapp.com/ticonnected", data);

      window.location.assign("/obrigado");
      setOpen(true);
    } catch (error) {}
  }

  return (
    <>
      <title>Estética - Bruna</title>

      <div
        className={`h-screen w-full fixed  left-0 top-0 flex justify-center items-center backdrop-blur-sm ${
          open && "hidden"
        }`}
      >
        <div className="bg-[#FEF6F0] border-2 border-[#ad6159] p-32 rounded-md  relative mobile:px-4 mobile:py-20">
          <GrFormClose
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => {
              setOpen(true);
            }}
          />
          <form
            className="flex flex-col w-[400px] mobile:w-[280px]"
            onSubmit={HandleForm}
            id="form"
          >
            <input
              type="text"
              placeholder="Nome"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="mb-6 border border-[#ad6159] p-2"
            />
            <input
              type="text"
              placeholder="Numero"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="mb-6 border border-[#ad6159] p-2"
            />
            <textarea
              placeholder="mensagem"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="h-20 border border-[#ad6159] p-2"
            />

            <button
              type="submit"
              className="w-full bg-[#ad6159] text-white py-3 mt-8 rounded-sm "
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>

      <main className="bg-[#ad6159] py-8 w-full ">
        <section className="w-4/5 p-0  bg-[#fdf6f0] m-auto mobile:w-11/12 mobile:px-4 mobile:py-8">
          <div className="grid grid-cols-2 mobile:grid-cols-1">
            <div>
              <Image src={Est} alt="ESTÉTICA" />
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <div>
                <Image src={Logo} alt="logo" />
              </div>

              <ul className="text-center">
                <li className="text-xl mb-1">Toxina Botulínica</li>
                <li className="text-xl mb-1">Bioestimulador de colágeno</li>
                <li className="text-xl mb-1">Preenchimento Labial</li>
                <li className="text-xl mb-1">Tratamentos Corporais</li>
                <li className="text-xl mb-1">Tratamentos faciais</li>
                <li className="text-xl mb-1">Muito mais</li>
              </ul>

              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="w-full bg-[#ad6159] py-4 rounded-md text-white font-medium text-xl max-w-[80%] mobile:max-w-[100%] mobile:mt-4"
              >
                Formulário
              </button>

              {/* <section className=" w-4/5 p-8  bg-[#fdf6f0] m-auto max-mobile:w-11/12"> */}

              {/* </section> */}
            </div>
          </div>
        </section>

        <section className="w-4/5 py-4 px-8 bg-[#fdf6f0] m-auto mobile:w-11/12 mobile:px-4 mobile:py-8">
          <h2 className="text-3xl font-semibold text-[#ad6159] mb-4 mt-20 mobile:mt-0 mobile:text-xl">
            RECUPERE SUA AUTOESTIMA SEM A NECESSIDADE DE PROCEDIMENTOS EXTREMOS
          </h2>

          <p className="">
            Você está cansada de gastar seu dinheiro em clínicas de estética que
            prometem resultados incríveis, mas deixam você insatisfeita? Não se
            preocupe mais! Nós entendemos o seu medo de investir tempo e
            dinheiro em tratamentos que não funcionam. Aqui na nossa clínica,
            garantimos resultados que vão superar todas as suas expectativas.
          </p>

          <p className="mt-2">
            Sabemos como é importante sentir-se confiante e satisfeita com a sua
            aparência. É por isso que trabalhamos com os melhores profissionais
            e utilizamos as técnicas mais avançadas para oferecer resultados
            excepcionais. Nossa equipe altamente qualificada irá personalizar
            cada tratamento conforme as suas necessidades e desejos, garantindo
            que você obtenha os resultados que sempre sonhou.
          </p>

          <p className="mt-2">
            Venha nos visitar e descubra o poder de uma experiência estética
            verdadeiramente transformadora. Acreditamos que você merece
            resultados excepcionais, e é exatamente isso que entregamos. Agende
            sua consulta hoje mesmo e dê o primeiro passo para a confiança e
            felicidade que você merece.
          </p>
        </section>

        <section className="grid grid-cols-3 gap-x-7 w-4/5 p-8  bg-[#fdf6f0] m-auto mobile:grid-cols-1 mobile:w-11/12 mobile:gap-y-7 mobile:px-4 mobile:py-8">
          <div>
            <div>
              <Image src={Facial} alt="Peling de diamante" />
            </div>
            <h3 className="text-[#ad6159] text-2xl font-semibold mt-4 mb-2">
              Hidratação
            </h3>
            <p>
              Existem diversos procedimentos faciais disponíveis no mercado, que
              podem ajudar a melhorar a aparência da pele do rosto, a combater
              rugas, manchas e outros sinais de envelhecimento, além de
              proporcionar uma sensação de frescor e bem-estar.
            </p>
          </div>

          <div>
            <div>
              <Image src={Corpo} alt="hidratação" />
            </div>
            <h3 className="text-[#ad6159] text-2xl font-semibold mt-4 mb-2">
              Corporal
            </h3>
            <p>
              Existem também diversos procedimentos corporais que podem ajudar a
              melhorar a aparência do corpo, combater a celulite, a flacidez e
              outros problemas estéticos.
            </p>
          </div>

          <div>
            <div>
              <Image src={Outro} alt="Limpeza de pele" />
            </div>
            <h3 className="text-[#ad6159] text-2xl font-semibold mt-4 mb-2">
              Outros
            </h3>
            <p>
              Além dos procedimentos faciais e corporais, existem também outros
              procedimentos estéticos que podem ajudar a melhorar a aparência do
              corpo e a autoestima das pessoas. Entre em contato que estaremos
              te auxiliando.
            </p>
          </div>
        </section>

        <section className="w-4/5 p-8 flex items-center justify-center  bg-[#fdf6f0] m-auto mobile:w-11/12 mobile:px-4 mobile:py-8">
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="w-full bg-[#ad6159] py-4 rounded-md text-white font-medium text-xl"
          >
            Formulário
          </button>
        </section>

        <section className="grid grid-cols-2 gap-x-10 w-4/5 p-8  bg-[#fdf6f0] m-auto mobile:grid-cols-1 mobile:w-11/12 mobile:px-4 mobile:py-8">
          <div>
            <Image src={Bruna} alt="bruna" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <p>Olá, me chamo</p>
              <p>Bruna Telemberg Sell</p>
            </div>

            <p>
              Sou Enfermeira graduada pela Universidade Federal de Santa
              Catarina (2011), Especialista em Gestão da Clínica pelo instituto
              de Ensino e Pesquisa Sírio Libanês (2012), Mestre em Enfermagem
              pela Universidade Federal de Santa Catarina (2015), Curso de
              Toxina Botulínica com a Drª Priscila de Medeiros (2022) e Curso de
              Harmonização Full exclusivo para Enfermeiros, Nurse Injector turma
              14 (2022)
            </p>

            <p className="mt-10">
              Minha missão é promover rejuvenescimento da sua pele, através da
              aplicação das melhores técnicas e procedimentos estéticos, sem
              exageros, com naturalidade, harmonia e segurança.
            </p>

            <button
              onClick={() => {
                setOpen(false);
              }}
              className="w-full bg-[#ad6159] py-4 rounded-md text-white font-medium text-xl mt-6"
            >
              Formulário
            </button>
          </div>
        </section>

        <section className=" w-4/5 p-8  bg-[#fdf6f0] m-auto mobile:w-11/12 mobile:px-4 mobile:py-8">
          <h3 className="text-[#ad6159] text-2xl font-semibold mt-4 mb-2">
            COMENTÁRIO DE QUEM CONHECE
          </h3>

          <div className="grid  gap-y-10 gap-x-10 grid-cols-3 mobile:grid-cols-1">
            <div>
              <Image src={slide1} alt="comentario 1" />
            </div>

            <div>
              <Image src={slide2} alt="comentario 2" />
            </div>

            <div>
              <Image src={slide3} alt="comentario 3" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
