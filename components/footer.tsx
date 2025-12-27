import Link from "next/link"
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 pb-24 md:pb-16 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <Image
                  src="https://www.amirjonkarimov.uz/arabic-calligraphy-and-books.jpg"
                  alt="Rahimov Academy Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  Rahimov Academy
                </div>
                <div className="text-xs text-muted-foreground">Arabic Learning</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
               Arab tilini online hamda offline tarzda 6 yillik tajribaga ega mutaxassisdan o'rganing
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Tezkor havolalar</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all cursor-pointer"
              >
                Bosh sahifa
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all cursor-pointer"
              >
                Biz haqimizda
              </Link>
              <Link
                href="/courses"
                className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all cursor-pointer"
              >
                Kurslar
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all cursor-pointer"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Bog'lanish</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+998901234567"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all cursor-pointer group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +998 (93) 774 05 50
              </a>
              <a
                href="mailto:marufjon19941005@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all cursor-pointer group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                marufjon19941005@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all cursor-pointer group">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>Toshkent shahar, Chilonzor tumani</span>
              </div>
            </div>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Ijtimoiy tarmoqlar</h3>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.instagram.com/marufjon_abdurrohim/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/Madrasalarga_tayyorlov"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer"
                title="Telegram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.597-.222 2.015l4.3 1.341 2.265 7.286c.24.75.935 1.188 1.74 1.188.393 0 .79-.085 1.167-.256l.quote" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@marufjon_raximov"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rahimov Academy. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
}
