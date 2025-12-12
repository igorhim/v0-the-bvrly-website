"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Image src="/images/logo.png" alt="The Bvrly" width={120} height={60} className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-sm border-t border-border">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-3 font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-3 font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left py-3 font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left py-3 font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-3 font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
