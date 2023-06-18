import Image from "next/image";
import Link from "next/link";

import Whts from "./../img/icons8-whatsapp-96.png";

export default function Zap() {
  return (
    <div id="zap" className="fixed right-2 bottom-2">
      <Link
        id="zap"
        href="https://wa.me/554884795876?text=V%C3%AD+seu+an%C3%BAncio+no+Google+e+preciso+tirar+algumas+d%C3%BAvidas+sobre+procedimentos+est%C3%A9ticos.+Voc%C3%AA+pode+me+ajudar%3F"
      >
        <Image id="zap" src={Whts} alt="whatsapp" height={80} width={80} />
      </Link>
    </div>
  );
}
