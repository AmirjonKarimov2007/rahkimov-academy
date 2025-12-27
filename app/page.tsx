"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Award,
  Target,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import FoundersCarousel from "@/components/founders-carousel";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const features = [
    {
      icon: Users,
      title: "Kichik guruhlar",
      description:
        "Har bir o'quvchiga maksimal e'tibor. 6-8 kishilik kichik guruhlar orqali shaxsiy yondashuv va tezkor natijalar kafolati",
      color: "emerald",
    },
    {
      icon: Award,
      title: "Xalqaro sertifikat",
      description:
        "Kursni muvaffaqiyatli tugatganingizdan keyin xalqaro tan olingan sertifikat va professional darajaga erishish",
      color: "amber",
    },
    {
      icon: Target,
      title: "Natijaga yo'naltirilgan",
      description:
        "Har bir darsda aniq maqsadlar va ko'rinadigan natijalar. 3 oyda erkin gaplasha olish, 6 oyda kitob o'qish darajasi",
      color: "blue",
    },
  ];

  const courses = [
    {
      title: "Boshlang'ich arab tili",
      description: "Arab harflarini o'qish va yozishni biladiganlar uchun",
      duration: "3 oy",
      lessons: "36 dars",
      price: "350,000 so'm/oy",
    },
    {
      title: "CEFR A2 - B2",
      description: "Eng kamida 3-4 oy davomida arab tilini o'rganib kelayotganlar uchun",
      duration: "4 oy",
      lessons: "64 dars",
      price: "490,000 so'm/oy",
    },
    {
      title: "Sarf va Nahv",
      description: "Arab tilini gramatikasini puxta o'rganmoqchi bo'lganlar uchun",
      duration: "6 oy",
      lessons: "96 dars",
      price: "490,000 so'm/oy",
    },
  ];

  const studentResults = [
    {
      id: 1,
      image: "/images/1.png",
      alt: "O'quvchi natijalari 1",
    },
    {
      id: 2,
      image: "/images/2.png",
      alt: "O'quvchi natijalari 2",
    },
    {
      id: 3,
      image: "/images/3.png",
      alt: "O'quvchi natijalari 3",
    },
    {
      id: 4,
      image: "/images/4.png",
      alt: "O'quvchi natijalari 4",
    },
    {
      id: 5,
      image: "/images/5.png",
      alt: "O'quvchi natijalari 5",
    },
    {
      id: 6,
      image: "/images/6.png",
      alt: "O'quvchi natijalari 6",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 hover:bg-primary/20 transition-colors cursor-default animate-pulse">
                Madrasalarga tayyorlov markazi
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Talaba bo'lish orzuingizni biz bilan amalga oshiring
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                O'zbekiston xalqaro islomshunoslik akademiyasi hamda madrasalar
                imtixoniga tayyorlov markazi
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link href="/connect">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full text-base px-8 h-14 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    Kursga yozilish
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-transparent hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    Kurslar haqida batafsil
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden group">
                <img
                  src="/image.png"
                  alt="Arabic Learning"
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bizning tashkil etuvchilar - Section 2 */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Bizning tashkil etuvchilar
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Rahimov Academy ni tashkil etgan tajribali va mohir
                mutaxassislarni tanishing
              </p>
            </div>
          </ScrollReveal>
          <FoundersCarousel />
        </div>
      </section>

      {/* O'quvchilarimiz natijalari - Section 3 */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Bizning natijalarimiz
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Rahimov Academy da o'qigan o'quvchilarni muvaffaqiyati va
                erishgan natijalari
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="mb-8 md:mb-12">
                <p className="text-center text-base md:text-lg text-foreground mb-6 md:mb-8 leading-relaxed px-2">
                  2025-yilda o'quvchilarimiz CEFR imtixoniga kirib, sertifikatga
                  ega bo'lishdi, bir qancha Oliy ta'lim muassasalari hamda
                  madrasalar talabasiga aylanishdi. Ulardan ba'zilarini quyida
                  havola qilamiz:
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
              {studentResults.map((result, index) => (
                <ScrollReveal key={result.id} delay={index * 50}>
                  <button
                    onClick={() => setSelectedImage(index)}
                    className="group relative overflow-hidden rounded-lg md:rounded-2xl bg-secondary h-32 sm:h-40 md:h-56 hover:shadow-2xl transition-all duration-300 w-full hover:scale-105"
                  >
                    <Image
                      src={result.image || "/placeholder.svg"}
                      alt={result.alt}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                      <span className="text-white text-xs md:text-sm font-semibold">
                        Ko'rish
                      </span>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>

            {selectedImage !== null && (
              <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Yopish"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === 0
                        ? studentResults.length - 1
                        : selectedImage - 1
                    )
                  }
                  className="absolute left-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden md:flex"
                  aria-label="Oldingi rasm"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <div className="relative w-full max-w-2xl max-h-[80vh] animate-in zoom-in-95 duration-300">
                  <Image
                    src={
                      studentResults[selectedImage].image || "/placeholder.svg"
                    }
                    alt={studentResults[selectedImage].alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>

                <button
                  onClick={() =>
                    setSelectedImage(
                      (selectedImage + 1) % studentResults.length
                    )
                  }
                  className="absolute right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden md:flex"
                  aria-label="Keyingi rasm"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {studentResults.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === selectedImage
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Rasm ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Arab tilini o'rganish yo'riqnomasi - Section 4 */}
      <section className="py-16 md:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Arab tilini o'rganish yo'riqnomasi
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Boshlang'ichdan yuqori darajagacha arab tilini o'rganish uchun
                to'liq qo'llanma
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="relative w-full rounded-lg md:rounded-2xl overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-shadow duration-300 mb-6 md:mb-8">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/4crgAfeq2s4?si=0TikUuKad4rQqkdX"
                    title="Arab tilini o'rganish yo'riqnomasi"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="text-center px-4">
                <a
                  href="https://www.youtube.com/@Marufjon_Raximov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                    Kurslardan lavhalar - YouTube kanalini ko'rish
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bizning kurslar haqida - Section 5 */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Bizning kurslar
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Har bir daraja uchun maxsus ishlab chiqilgan o'quv dasturlari
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {courses.map((course, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <Card className="border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group h-full">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-muted-foreground">
                          Davomiyligi:
                        </span>
                        <span className="font-medium text-foreground">
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs md:text-sm">
                        <span className="text-muted-foreground">
                          Darslar soni:
                        </span>
                        <span className="font-medium text-foreground">
                          {course.lessons}
                        </span>
                      </div>
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-primary mb-6">
                      {course.price}
                    </div>
                    <Link href="/courses">
                      <Button className="w-full rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer text-sm md:text-base">
                        Batafsil ma'lumot
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center">
              <Link href="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-transparent hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  Barcha kurslarni ko'rish
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-16 md:py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Ilmga eltuvchi ilk qadam!
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
              Ilm yo'liga biz bilan birinchi qadamni qo'ying !
            </p>
            <Link href="/connect">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full text-base px-8 h-14 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-pulse"
              >
                Kursga yozilish
              </Button>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
