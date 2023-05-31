import Image from "next/image";
import Link from "next/link";

import Whts from './../img/icons8-whatsapp-96.png'


export default function Zap(){

  return(
    <div id="zap" className="fixed right-2 bottom-2">
      <Link id="zap" href="https://api.whatsapp.com/send?phone=554884795876&text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20no%20Google%20e%20estou%20interessado(a)%20em%20fazer%20alguns%20procedimentos.%20Voc%C3%AA%20pode%20me%20atender">
        <Image id="zap" src={Whts} alt="whatsapp" height={80} width={80}/>
      </Link>
    </div>
  )
}