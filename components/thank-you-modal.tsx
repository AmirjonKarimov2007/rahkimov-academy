"use client"

import { X, CheckCircle2 } from "lucide-react"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-background rounded-2xl shadow-2xl max-w-md w-full animate-in scale-in duration-300 border-2 border-primary/20">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          </button>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-emerald-600" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-foreground mb-3">Rahmat!</h2>

          {/* Message */}
          <p className="text-center text-muted-foreground mb-8 leading-relaxed">
            Sizning ariza muvaffaqiyatli qabul qilindi. Bizning mutaxassislar sizga tez orada Telegram orqali javob
            berishadi.
          </p>

          {/* Telegram Channel Link */}
          <div className="bg-secondary/50 rounded-xl p-5 mb-8 border-2 border-primary/10">
            <p className="text-sm text-muted-foreground mb-3">Yangiliklar uchun bizning kanalga obuna bo'ling:</p>
            <a
              href="https://t.me/rahimovacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-full justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a11.955 11.955 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.485-1.306.472-.429-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.157.285-.328.731-.484 2.817-1.256 4.686-1.885 5.631-2.252 2.619-1.2 3.219-1.406 3.583-1.409.086-.003.27.023.414.135z" />
              </svg>
              Kanalga obuna bo'ling
            </a>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-secondary text-foreground font-semibold py-3 px-6 rounded-lg hover:bg-secondary/80 transition-colors duration-300"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  )
}
