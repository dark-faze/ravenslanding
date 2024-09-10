import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-transparent backdrop-blur-md bg-opacity-30 p-4 sticky top-0 z-50 shadow-lg transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">MediumRaven 🐦‍⬛</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavItem href="#hero">Hero</NavItem>
            <NavItem href="#features">Features</NavItem>
            <NavItem href="#video">Video</NavItem>
            <NavItem href="#pricing">Pricing</NavItem>
            <NavItem href="#footer">Contact</NavItem>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-2">
            <a href="#hero" onClick={() => setIsOpen(false)}>Hero</a>
              <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#video" onClick={() => setIsOpen(false)}>Video</a>
              <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
              <a href="#footer" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-110"
    >
      {children}
    </a>
  )
}

function a({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white py-2 px-4 block rounded-md hover:bg-purple-800 transition duration-300 ease-in-out"
    >
      {children}
    </a>
  )
}