"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, CheckCircle2, XCircle, Send } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ThankYouModal } from "@/components/thank-you-modal"

export default function ConnectPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [showThankYou, setShowThankYou] = useState(false)

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
      course: formData.get("course"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/consultation", {
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

        setShowThankYou(true)
        setSubmitStatus({
          type: "success",
          message: "Arizangiz muvaffaqiyatli yuborildi! Adminlarimiz tez orada siz bilan bog'lanishadi.",
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

  return (
    <div className="min-h-screen">
      <Navigation />
      <ThankYouModal isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Bepul konsultatsiya oling</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Formani to'ldiring va bizning mutaxassislarimiz sizga eng mos kursni tanlashda yordam berishadi
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <ScrollReveal className="lg:col-span-2">
              <Card className="border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  {submitStatus.type && (
                    <div
                      className={`mb-6 p-5 rounded-xl flex items-start gap-4 animate-in fade-in slide-in-from-top-2 duration-500 ${
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
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      <label htmlFor="course" className="block text-sm font-semibold text-foreground mb-3">
                        Qaysi kursga qiziqasiz? <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="course"
                        name="course"
                        required
                        disabled={isSubmitting}
                        className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <option value="">Kursni tanlang</option>
                        <option value="online-beginner">Online - Boshlang'ich daraja</option>
                        <option value="online-intermediate">Online - O'rta daraja</option>
                        <option value="online-advanced">Online - Yuqori daraja</option>
                        <option value="offline-beginner">Offline - Boshlang'ich daraja</option>
                        <option value="offline-intermediate">Offline - O'rta daraja</option>
                        <option value="offline-advanced">Offline - Yuqori daraja</option>
                        <option value="not-sure">Hali aniq emas</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                        Qo'shimcha ma'lumot{" "}
                        <span className="text-muted-foreground text-xs font-normal">(ixtiyoriy)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        disabled={isSubmitting}
                        className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground/50"
                        placeholder="O'zingiz haqingizda, maqsadlaringiz yoki savollaringiz haqida yozing..."
                      />
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
                          <span>Ariza yuborish</span>
                        </>
                      )}
                    </button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <ScrollReveal delay={200}>
                <Card className="border-border bg-primary text-primary-foreground hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Nega biz bilan bog'lanishingiz kerak?</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Bepul konsultatsiya va yo'nalish</span>
                      </li>
                      <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Sizga mos kursni tanlashda yordam</span>
                      </li>
                      <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Maxsus chegirmalar va takliflar</span>
                      </li>
                      <li className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>Tezkor javob va professional yondashuv</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Tezkor bog'lanish</h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+998901234567"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all hover:translate-x-1 duration-300 group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Telefon</div>
                          <div className="font-medium text-foreground">+998 (93) 774 05 50</div>
                        </div>
                      </a>
                      <a
                        href="mailto:info@rahimovacademy.uz"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all hover:translate-x-1 duration-300 group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Email</div>
                          <div className="font-medium text-foreground">info@rahimovacademy.uz</div>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="border-border bg-secondary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">24 soat ichida</strong> sizga javob berishga va eng yaxshi
                      kursni tanlashda yordam berishga kafolatimiz bor.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Bizni tanlash uchun sabablar</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Rahimov Academy sizga eng yaxshi ta'lim tajribasini taqdim etadi
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Professional o'qituvchilar",
                description: "Har biri 6+ yillik tajribaga ega bo'lgan malakali o'qituvchilar",
              },
              {
                title: "Moslashuvchan jadval",
                description: "Online va offline formatda o'zingizga qulay vaqtda dars olish",
              },
              {
                title: "Sertifikat berish",
                description: "Kursni tugatganingizdan keyin rasmiy sertifikat olish",
              },
            ].map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card
                  key={index}
                  className="border-border text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
