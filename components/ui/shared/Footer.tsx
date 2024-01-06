import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t bg-black">

      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
        <Image
               src="/assets/images/logo.png"
               alt="logo"
               width={70}
               height={30}
               
               />
        </Link>
        <p className="text-white">2024 © Copyright Vanderbilt University</p>
        
      </div>

    </footer>
  )
}

export default Footer