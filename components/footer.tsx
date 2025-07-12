import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="ml-12 w-45 h-20"/>
            
          </Link>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your friendly neighborhood ice cream café, serving premium handcrafted treats that bring families together
              since 2015.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-blue-500/20 hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-pink-500/20 hover:text-pink-400">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-green-500/20 hover:text-green-400">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-blue-500/20 hover:text-blue-400">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-gray-400 hover:text-green-400 transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-green-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">123 Main Street, Downtown</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">hello@creamchills.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Mon-Sun: 10AM - 10PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Sweet</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest updates on new flavors, seasonal specials, and exclusive offers!
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-pink-400"
              />
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Cream Chills. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
