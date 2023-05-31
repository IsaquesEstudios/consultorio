import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
  return (
    <main className="h-screen w-full bg-[#FB9494] flex justify-center items-center flex-col">
      <p className="text-white text-xl text-center">
        Obrigado, retornaremos o contato em breve!
      </p>

      <Link href="/" className="max-w-[320px] pt-4 w-4/5">
        <button className=" bg-white py-4 w-full text-lg max-w-[320px] rounded-md">
          Início
        </button>
      </Link>


      <Link
        href="https://api.whatsapp.com/send?phone=554884795876&text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20no%20Google%20e%20estou%20interessado(a)%20em%20fazer%20alguns%20procedimentos.%20Voc%C3%AA%20pode%20me%20atender"
        className="max-w-[320px] pt-4 w-4/5"
      >
        <button className="bg-[#008000] py-4 w-full text-lg max-w-[320px] rounded-md flex justify-center items-center text-white border-white border-2">
          <FaWhatsapp className="mr-2 text-white" />
          Whatsapp
        </button>
      </Link>
    </main>
  );
}
