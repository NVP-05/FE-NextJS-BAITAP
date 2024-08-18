'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Home() {
    const pathName = usePathname();
    console.log("Giá trị của pathName", pathName);
    
  return (
    <div className='flex gap-5'>
      <Link className={pathName == "/home" ? "active" : ""} href={"/home"}>Home</Link>
      <Link className={pathName == "/contact" ? "active" : ""} href={"/contact"}>Contact</Link>
      <Link className={pathName == "/about" ? "active" : ""} href={"/about"}>About</Link>
      <Link className={pathName == "/login" ? "active" : ""} href={"/login"}>Login</Link>
    </div>
  )
}
  