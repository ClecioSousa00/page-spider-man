import Image from 'next/image'
import logo from '../../assets/images/Logo.svg'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

import { Navbar } from '../Navbar'

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Image
        src={logo}
        width={140}
        height={40}
        alt="Logo da Columbia Pictures"
      />
      <Navbar />
      <div className=" flex gap-2">
        <Link href="" className="bg-white p-2 text-gray-400  hover:scale-105">
          <Github size={20} />{' '}
        </Link>
        <Link href="" className="bg-white p-2 text-gray-400  hover:scale-105">
          <Linkedin size={20} />{' '}
        </Link>
      </div>
    </header>
  )
}
