"use client"

import Link from "next/link"
import { Home, Info, BookOpen, Mail, Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Bosh sahifa", icon: Home },
    { href: "/about", label: "Biz haqimizda", icon: Info },
    { href: "/courses", label: "Kurslar", icon: BookOpen },
    { href: "/contact", label: "Kontakt", icon: Mail },
  ]

  return (
    <>
      {/* Desktop Navigation - Top */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border lg:block hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-all duration-300 bg-background border border-border">
                <Image src="/logo.png" alt="Rahimov Academy Logo" width={56} height={56} className="object-cover" />
              </div>
              <div>
                <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  Rahimov Academy
                </div>
                <div className="text-xs text-muted-foreground">Arabic Learning Center</div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium relative group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Link href="/connect">
                <Button
                  size="lg"
                  className="rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Ro'yxatdan o'tish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-background border border-border">
                <Image src="/logo.png" alt="Rahimov Academy Logo" width={48} height={48} className="object-cover" />
              </div>
              <div className="font-bold text-base text-foreground">Rahimov Academy</div>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border pb-safe">
        <div className="flex items-center justify-around px-2 py-2">
          {navLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-xl cursor-pointer transition-all hover:bg-primary/10 min-w-[70px]"
              >
                <Icon className={`w-6 h-6 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                <span
                  className={`text-[10px] font-medium transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label.split(" ")[0]}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-6 pb-8">
          {/* Handle bar */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1.5 bg-muted-foreground/30 rounded-full" />
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-4 text-foreground hover:text-primary hover:bg-primary/10 transition-all font-medium py-4 px-4 rounded-xl cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-base">{link.label}</span>
                </Link>
              )
            })}
            <Link href="/connect" onClick={() => setIsOpen(false)} className="mt-4">
              <Button size="lg" className="w-full rounded-full hover:scale-105 transition-transform cursor-pointer">
                Ro'yxatdan o'tish
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
