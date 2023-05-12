import React from 'react'

function Navbar() {
  return (
    <div className='bg-rose-500 text-[#efefef] h-[60px] w-full flex justify-center' >
        <div className='h-full  my-auto flex items-center'>
          
            <ul className='flex justify-center items-center gap-6 ' >
                <li className='cursor-pointer text-[18px] hover:text-violet-950 hover:font-extrabold' >Inicio</li>
                <li className='cursor-pointer text-[18px] hover:text-violet-950 hover:font-extrabold' >Postres</li>
                <li className='cursor-pointer text-[18px] hover:text-violet-950 hover:font-extrabold' >Hojaldres</li>
                <li className='cursor-pointer text-[18px] hover:text-violet-950 hover:font-extrabold' >Tortas</li>
                <li className='cursor-pointer text-[18px] hover:text-violet-950 hover:font-extrabold' >Eventos especiales</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar