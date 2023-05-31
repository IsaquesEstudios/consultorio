'use client'
import '@splidejs/react-splide/css';


import { Splide, SplideSlide } from '@splidejs/react-splide';

import slide1 from './../img/slide/9ef5139b-ce86-4a61-b556-434fb137fc28.jpg'
import slide2 from './../img/slide/648a270f-3cc4-4b1a-9ec7-ac81c6b7231a.jpg'
import slide3 from './../img/slide/d7ea91b6-c62f-4346-8420-64b82479a7ae.jpg'
import slide4 from './../img/slide/e5b09a39-9286-4619-93c5-aae0eca20777.jpg'
import slide5 from './../img/slide/e18a28c8-2beb-4035-b2f3-5fbb17ac5778.jpg'
import Image from 'next/image';

export default function Slide() {

  return (
    <Splide options={{
      type: 'loop',
      autoplay: true,
      perPage: 3,
      gap: 50,
      breakpoints: {
        726: {
          perPage: 1,
          gap: 0
        }
      }
    }}>
      <SplideSlide>
        <Image src={slide1} alt="comentario 1" />
      </SplideSlide>
      <SplideSlide>
        <Image src={slide2} alt="comentario 2" />
      </SplideSlide>
      <SplideSlide>
        <Image src={slide3} alt="comentario 3" />
      </SplideSlide>
      <SplideSlide>
        <Image src={slide4} alt="comentario 4" />
      </SplideSlide>
      <SplideSlide>
        <Image src={slide5} alt="comentario 5" />
      </SplideSlide>
    </Splide>
  )
}