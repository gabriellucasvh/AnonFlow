'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, User, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Preços', href: '#precos' },
    { name: 'Perguntas frequentes', href: '#faq' },
]

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">AnonFlow</span>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className="hidden md:flex items-center">
                            <Button variant="outline" asChild>
                                <Link href="/login"><User className="w-4 h-4" />Entrar</Link>
                            </Button>
                        </div>
                        <div className="hidden md:flex items-center">
                            <Button asChild>
                                <Link href="/login">Crie sua conta agora</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Abrir menu principal</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href
                                        ? 'bg-blue-100 text-blue-600'
                                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full mt-4">
                            <Link href="/demo" onClick={() => setIsMenuOpen(false)}>
                                Solicitar Demo
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}

