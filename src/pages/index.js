import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import Postres from '@/components/Postres'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main>

       <div>

    <Navbar></Navbar>
    <Logo></Logo>
    <Postres/>

   </div>
    </main>
  
  )
}
