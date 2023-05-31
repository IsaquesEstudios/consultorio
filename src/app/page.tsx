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
import Slide from "@/components/slide";
import Form from "@/components/form";
import Link from "next/link";
import Zap from "@/components/zap";


export default function Page() {

  return (
    <>
      <title>Estética - Bruna</title>
      <main className="bg-[#FB9494] py-8 w-full ">
        <section className="w-4/5 p-0  bg-[#fdf6f0] m-auto max-mobile:w-11/12 max-mobile:p-8">
          <div className="grid grid-cols-2 max-mobile:grid-cols-1">
            <div>
              <Image src={Est} alt="ESTÉTICA" />
            </div>

            <div className="flex flex-col items-center justify-center w-full">
              <div>
                <Image src={Logo} alt="logo" />
              </div>

              {/* <section className=" w-4/5 p-8  bg-[#fdf6f0] m-auto max-mobile:w-11/12"> */}
                <Form />
              {/* </section> */}
            </div>
          </div>
        </section>

        <section className="w-4/5 py-4 px-8 bg-[#fdf6f0] m-auto max-mobile:w-11/12 min-mobile:p-2">
          <h2 className="text-3xl font-semibold text-[#FB9494] mb-4 mt-20 max-mobile:mt-0 max-mobile:text-xl">
            RECUPERE SUA AUTOESTIMA SEM A NECESSIDADE DE PROCEDIMENTOS EXTREMOS
          </h2>

          <p className="">
            A Bruna Telemberg busca proporcionar experiências únicas e oferecer
            serviços de excelência aos nossos clientes e parceiro.
          </p>

          <p className="">
            Prestando serviços de qualidade com o grande intuito de ressaltar
            com leveza a beleza e promover hábitos saudáveis.
          </p>
        </section>

        <section className="grid grid-cols-3 gap-x-7 w-4/5 p-8  bg-[#fdf6f0] m-auto max-mobile:grid-cols-1 max-mobile:w-11/12 max-mobile:gap-y-7">
          <div>
            <div>
              <Image src={Corpo} alt="hidratação" />
            </div>
            <h3 className="text-[#FB9494] text-2xl font-semibold mt-4 mb-2">
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
              <Image src={Facial} alt="Peling de diamante" />
            </div>
            <h3 className="text-[#FB9494] text-2xl font-semibold mt-4 mb-2">
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
            <h3 className="text-[#FB9494] text-2xl font-semibold mt-4 mb-2">
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

        <section className="w-4/5 p-8  bg-[#fdf6f0] m-auto max-mobile:w-11/12">
          <h3 className="text-[#FB9494] text-2xl font-semibold mt-4 mb-2 max-mobile:mt-2">
            Importante!
          </h3>

          <ul>
            <li>
              — Alguns dos procedimentos necessitam de várias sessões para
              alcançar os resultados desejados.
            </li>
            <li>— Mais informações serão passadas antes do procedimento.</li>
          </ul>
        </section>

        <section className="grid grid-cols-2 gap-x-10 w-4/5 p-8  bg-[#fdf6f0] m-auto max-mobile:grid-cols-1 max-mobile:w-11/12">
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
          </div>
        </section>

        <section className=" w-4/5 p-8  bg-[#fdf6f0] m-auto max-mobile:w-11/12">
          <h3 className="text-[#FB9494] text-2xl font-semibold mt-4 mb-2">
            COMENTÁRIO DE QUEM CONHECE
          </h3>

          <div>
            <Slide />
          </div>
        </section>

        <Zap />
      </main>
    </>
  );
}
