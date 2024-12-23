import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerLinks = [
  { title: 'Empresa', links: [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ]},
  { title: 'Produto', links: [
    { name: 'Recursos', href: '#recursos' },
    { name: 'Preços', href: '#precos' },
    { name: 'FAQ', href: '#faq' },
  ]},
  { title: 'Legal', links: [
    { name: 'Termos de Serviço', href: '/termos' },
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Cookies', href: '/cookies' },
  ]},
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
]

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-900">
              AnonFlow
            </Link>
            <p className="mt-4 text-gray-600">
              Transformando a cultura de feedback nas organizações.
            </p>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} AnonFlow. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

