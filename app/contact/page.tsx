"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube, CheckCircle2, XCircle, Send } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      telegram: formData.get("telegram"),
      phone2: formData.get("phone2"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        form.reset()
        const phoneInput = form.querySelector("#phone") as HTMLInputElement
        if (phoneInput) phoneInput.value = "+998"

        setSubmitStatus({
          type: "success",
          message: "Ma'lumotlaringiz muvaffaqiyatli yuborildi! Adminlarimiz tez orada siz bilan bog'lanishadi.",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.",
        })
      }
    } catch (error) {
      console.error("[v0] Fetch error:", error)
      setSubmitStatus({
        type: "error",
        message: "Tarmoq xatosi. Iltimos qaytadan urinib ko'ring.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    let value = input.value.replace(/\D/g, "")

    if (value.startsWith("998")) {
      value = value.slice(3)
    }

    if (value.length > 9) {
      value = value.slice(0, 9)
    }

    let formatted = "+998"
    if (value.length > 0) {
      formatted += " (" + value.slice(0, 2)
      if (value.length > 2) {
        formatted += ") " + value.slice(2, 5)
      }
      if (value.length > 5) {
        formatted += "-" + value.slice(5, 7)
      }
      if (value.length > 7) {
        formatted += "-" + value.slice(7, 9)
      }
    }

    input.value = formatted
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon raqamlar",
      items: ["+998 (93) 774 05 50", "+998 (93) 774 05 50", "+998 (93) 774 05 50"],
    },
    {
      icon: MapPin,
      title: "Manzil",
      items: ["Toshkent shahar",  "Beruniy metro", "Maydan ta'lim markazi"],
    },
    {
      icon: Clock,
      title: "Ish vaqti",
      items: ["Dushanba - Shanba: 9:00 - 20:00", "Yakshanba: Dam olish kuni"],
    },
  ]

  const socialMedia = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/marufjon_abdurrohim/",
      handle: "@rahimovacademy",
      color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/marufjon.abdurrohiym?mibextid=wwXIfr&rdid=YLdUJY41s8gvgRvX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F181qSk8E67%2F%3Fmibextid%3DwwXIfr",
      handle: "Rahimov Academy",
      color: "hover:bg-blue-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@marufjon_raximov",
      handle: "@rahimovacademy",
      color: "hover:bg-red-600",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Biz bilan bog'laning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Savollaringiz bo'lsa yoki kurslarimiz haqida qo'shimcha ma'lumot olishni istasangiz, biz bilan bog'laning.
            Har doim sizga yordam berishga tayyormiz!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">So'rov qoldiring</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Formani to'ldiring va biz tez orada siz bilan bog'lanamiz
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Card className="border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8 md:p-12">
                {submitStatus.type && (
                  <div
                    className={`mb-8 p-5 rounded-xl flex items-start gap-4 animate-in fade-in slide-in-from-top-2 duration-500 ${
                      submitStatus.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border-2 border-emerald-200"
                        : "bg-red-50 text-red-800 border-2 border-red-200"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="font-medium leading-relaxed">{submitStatus.message}</p>
                  </div>
                )}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-3">
                        Ism <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        disabled={isSubmitting}
                        className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground/50"
                        placeholder="Ismingiz"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-3">
                        Familiya <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        disabled={isSubmitting}
                        className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground/50"
                        placeholder="Familiyangiz"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-3">
                      Telefon raqam <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      disabled={isSubmitting}
                      onInput={handlePhoneInput}
                      className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground/50"
                      placeholder="+998 (XX) XXX-XX-XX"
                      defaultValue="+998"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Faqat raqamlarni kiriting, avtomatik formatlash amalga oshiriladi
                    </p>
                  </div>
                  <div>
                    <label htmlFor="telegram" className="block text-sm font-semibold text-foreground mb-3">
                      Telegram username <span className="text-muted-foreground text-xs font-normal">(ixtiyoriy)</span>
                    </label>
                    <input
                      type="text"
                      id="telegram"
                      name="telegram"
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground/50"
                      placeholder="@username (masalan: @amirjon)"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone2" className="block text-sm font-semibold text-foreground mb-3">
                      Qo'shimcha telefon raqam{" "}
                      <span className="text-muted-foreground text-xs font-normal">(ixtiyoriy)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone2"
                      name="phone2"
                      disabled={isSubmitting}
                      onInput={handlePhoneInput}
                      className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground/50"
                      placeholder="+998 (XX) XXX-XX-XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                      Xabar <span className="text-muted-foreground text-xs font-normal">(ixtiyoriy)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      disabled={isSubmitting}
                      className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground/50"
                      placeholder="Qo'shimcha ma'lumot yoki savollaringiz bo'lsa yozing..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold text-lg py-5 px-8 rounded-xl hover:from-primary/90 hover:to-primary hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                        <span>Yuborilmoqda...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Yuborish</span>
                      </>
                    )}
                  </button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card
                    className="border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      <div className="space-y-2">
                        {info.items.map((item, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Map Section */}
          <ScrollReveal>
            <Card className="border-border overflow-hidden mb-16 hover:shadow-2xl transition-all duration-500 cursor-pointer group">
              <CardContent className="p-0">
                <div className="aspect-[16/9] bg-secondary/50 flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5158947228407!2d69.2078871!3d41.2825074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sChilonzor%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full group-hover:saturate-150 transition-all duration-500"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Social Media Section */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Ijtimoiy tarmoqlarda</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty">
                Bizning ijtimoiy tarmoqlardagi sahifalarimizda yangiliklar, foydali maslahatlar va bepul darslarni
                kuzatib boring
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialMedia.map((social, index) => {
              const Icon = social.icon
              return (
                <ScrollReveal key={index} delay={index * 150}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="group/social">
                    <Card className="border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-8 text-center">
                        <div
                          className={`w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover/social:text-white group-hover/social:scale-110 ${social.color}`}
                        >
                          <Icon className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover/social:text-primary transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </CardContent>
                    </Card>
                  </a>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Bizni topish oson</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                  O'quv markazimiz Toshkent shahrining qulay joyida -Toshkent shahar, Beruniy metro , Maydan ta'lim markazida joylashgan. Biz sizni kutib
                  qolamiz!
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300 cursor-pointer group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Manzil
                      </h3>
                      <p className="text-muted-foreground">
                        Toshkent shahar, Beruniy metro , Maydan ta'lim markazi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300 cursor-pointer group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Telefon
                      </h3>
                      <p className="text-muted-foreground">
                        +998 (93) 774 05 50
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300 cursor-pointer group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        Ish vaqti
                      </h3>
                      <p className="text-muted-foreground">
                        Dushanba - Shanba: 9:00 - 20:00
                        <br />
                        Yakshanba: Dam olish kuni
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
                <div className="overflow-hidden rounded-3xl group cursor-pointer">
                  <img
                    src="/modern-academy-building-entrance.jpg"
                    alt="Academy Building"
                    className="w-full rounded-3xl shadow-lg group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
