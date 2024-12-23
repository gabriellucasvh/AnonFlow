'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex sticky top-0 z-50 items-center justify-between h-16 p-6 bg-slate-100 shadow'>
        <div className='flex items-center'>
            <Link className='flex items-center gap-2' href="/">
            <Image src="/anonflow-svg.svg" alt="AnonFlow Logo" width={30} height={30} quality={100} className='rounded-full' />
            <span className='text-2xl font-bold'>AnonFlow</span>
            </Link>
        </div>
        <div>
            <ul className='flex flex-row items-center gap-4 font-medium'>
                <li>
                    <Link href="/">Início</Link>
                </li>
                <li>
                    <Link href="/">Sobre nós</Link>
                </li>
                <li>
                    <Link href="/">Recursos</Link>
                </li>
                <li>
                    <Link href="/">Preços</Link>
                </li>
            </ul>
        </div>
        <div className='flex items-center gap-2'>
            <Button variant="outline" onClick={ () => { window.location.href = "/login" }}>Login</Button>
            <Button variant="default">Criar uma conta</Button>
        </div>
    </div>
  )
}

export default Navbar