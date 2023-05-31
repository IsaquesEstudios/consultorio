'use client'

import axios from "axios"
import { FormEvent, useState } from "react"



export default function Form() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  async function HandleForm(e: FormEvent) {
    e.preventDefault()

    const data = {
      emailTo: ['ezeque_2008@Hotmail.com'],
      // emailTo: 'sellbruna@hotmail.com',
      title: 'Formulário',
      name,
      phone,
      message
    }


    try {
      await axios.post('https://main-form.herokuapp.com/ticonnected', data)


      window.location.assign("/obrigado")
    } catch (error) {
    }
  }



  return (
    <form className='flex flex-col w-full' onSubmit={HandleForm} id="form">
      <input type="text" placeholder='Nome' onChange={(e) => { setName(e.target.value) }} className='mb-6 border border-[#FB9494] p-2' />
      <input type="text" placeholder='Numero' onChange={(e) => { setPhone(e.target.value) }} className='mb-6 border border-[#FB9494] p-2' />
      <textarea placeholder='mensagem' onChange={(e) => { setMessage(e.target.value) }} className='h-20 border border-[#FB9494] p-2' />

      <button type="submit" className='w-full bg-[#FB9494] text-white py-3 mt-8 rounded-sm'>ENVIAR</button>
    </form>
  )
}