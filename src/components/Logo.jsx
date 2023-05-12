import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.png'

function Logo() {
  return (
    <div className='bg-rose-400 flex justify-center my-10'>
        <Image src={logo} alt='logo' width={250} height={250}/>
    </div>
  )
}

export default Logo