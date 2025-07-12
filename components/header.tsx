"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Flavors", href: "/flavors" },
    { name: "About", href: "/about" },
    { name: "Locations", href: "/locations" },
    { name: "Catering", href: "/catering" },
    { name: "Contact", href: "/contact" },
  ]

  return (
   <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-20 md:h-26 relative">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 absolute left-0 z-10"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Logo */}
      <div className="flex-1 flex justify-center md:justify-start">
        <Image
          src="/logo.png"
          alt="logo"
          width={180}
          height={88}
          className="w-30 h-18 md:h-24 md:w-45"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 font-semibold mr-10">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-pink-500 font-large text-xl transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          className="border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700 bg-transparent text-xl px-5 py-6"
        >
          <MapPin className="w-4 h-4 mr-2" />
          Find Store
        </Button>
        <Button className="hover:bg-pink-400 text-white bg-pink-500 text-xl px-5 py-6">
          Order Now
        </Button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div
      className={cn(
        "md:hidden overflow-hidden transition-all duration-300",
        isMenuOpen ? "max-h-96 pb-4" : "max-h-0",
      )}
    >
      <nav className="flex flex-col space-y-4 pt-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <div className="flex flex-col space-y-2 pt-4">
          <Button
            variant="outline"
            size="sm"
            className="border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Find Store
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white">Order Now</Button>
        </div>
      </nav>
    </div>
  </div>
</header>

  )
}
