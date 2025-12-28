"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Award,
  Users,
  BookOpen,
  Target,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "350+", label: "O'quvchilar" },
    { icon: Award, value: "6+", label: "O'qituvchilar" },
    { icon: BookOpen, value: "5+", label: "Kurslar" },
    { icon: Target, value: "95%", label: "Muvaffaqiyat darajasi" },
  ];

  const teachers = [
    {
      name: "Rahimov Marufjon",
      role: "O'qituvchi",
      experience: "6 yillik tajriba",
      specialization: "Arab tili markazi asoschisi",
      image: "/professional-arabic-teacher-male.jpg",
    },
    {
      name: "Sattorov Salohiddin",
      role: "O'qituvchi",
      experience: "4 yillik tajriba",
      specialization: "Madrasaga tayyorlov markazi asoschisi",
      image: "/professional-arabic-teacher-female-hijab.jpg",
    },
    {
      name: "Madaminov Azamat ",
      role: "O'qituvchi",
      experience: "3 yillik tajriba",
      specialization: "O'zbaekiston xalqaro islomshunoslik akademiyasi bitiruvchisi",
      image: "/professional-arabic-teacher-male-glasses.jpg",
    },
    {
      name: "Rahmatjonova Nodira",
      role: "O'qituvchi",
      experience: "2 yillik tajriba",
      specialization: "O'zbaekiston xalqaro islomshunoslik akademiyasi bitiruvchisi",
      image: "/professional-teacher-female-hijab-smiling.jpg",
    },
    {
      name: "Aminjonova Ma'rifat",
      role: "O'qituvchi",
      experience: "2 yillik tajriba",
      specialization: "O'zbaekiston xalqaro islomshunoslik akademiyasi bitiruvchisi",
      image: "/professional-teacher-female-hijab-smiling.jpg",
    },
    {
      name: "Abdumalikova Muslima",
      role: "O'qituvchi",
      experience: "1 yillik tajriba",
      specialization: "O'zbaekiston xalqaro islomshunoslik akademiyasi bitiruvchisi",
      image: "/professional-teacher-female-hijab-smiling.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Jasur Abdurahmonov",
      role: "Universitet talabasi",
      text: "8 oyda B2 darajasiga chiqdim! Muhammad ustoz grammatikani juda tushunarli tushuntiradi. Endi Qur'onni asl tilida o'qiy olaman. Eng yaxshi tomoni - darslardan keyin audio materiallar berilishi.",
      rating: 5,
      image: "/uzbek-male-student.jpg",
      course: "Yuqori daraja",
    },
    {
      name: "Dilnoza Rahimova",
      role: "Uy bekasi",
      text: "Online kurslar hayotimni o'zgartirdi! Kechqurun 1.5 soat dars oldim. Fatima opa juda sabr-toqatli. 6 oyda asosiy suhbatlashishni o'rgandim. Umraga borish orzuim amalga oshdi!",
      rating: 5,
      image: "/uzbek-female-student-hijab.jpg",
      course: "O'rta daraja",
    },
    {
      name: "Sardor Yusupov",
      role: "Biznes rahbar",
      text: "Juda bandman, lekin individual jadval tuzib berishdi. Ahmad ustoz bilan tajvid va adabiyotni o'rganmoqdamiz. 4 oyda katta natijaga erishdim. Har bir ishbilarmon uchun ideal!",
      rating: 5,
      image: "/uzbek-businessman.jpg",
      course: "Individual",
    },
    {
      name: "Madina Karimova",
      role: "O'qituvchi",
      text: "Zamonaviy metodlar ishlatiladi: video, interaktiv darslar, real vaziyatlar. Zarina opa bilan grammatika o'z-o'zidan esda qoladi. 5 oyda kitob o'qiy bosladim. Hammaga tavsiya!",
      rating: 5,
      image: "/uzbek-female-teacher.jpg",
      course: "Kompleks",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Biz haqimizda
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rahimov Academy - O'zbekiston xalqaro islomshunoslik akademiyasi
            hamda madrasalar imtixoniga tayyorlov markazi
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="border-border text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group h-full">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary group-hover:animate-bounce" />
                      </div>
                      <div className="text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Maqsadimiz
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Rahimov Academy 2015-yilda tashkil etilgan bo'lib, o'shandan
                  beri minglab o'quvchilarga arab tilini professional darajada
                  o'rganishda yordam berdi.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Rahimov academy 2024-yildan buyon faoliyat yuritib keladi. Bu
                  orada ko'plab arab tili ixlosmandlariga manfaatli kurslar
                  tashkil etildi. Maqsadimiz Arab tilini sodda va oson uslubda
                  o'rgatish. Shuningdek, ilm dargohlarida ta'lim olishni niyat
                  qilgan abiturientlarga to'g'ri yo'l ko'rsatish hamda ularni
                  kirish imtixonlaridan muvaffaqiyatli o'tib, talaba
                  bo'lishlariga yordam berish.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300 cursor-pointer group">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-4 h-4 text-primary-foreground"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        Sifatli ta'lim
                      </h3>
                      <p className="text-muted-foreground">
                        Xalqaro standartlarga mos keladigan o'quv dasturlari
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300 cursor-pointer group">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-4 h-4 text-primary-foreground"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        Tajribali o'qituvchilar
                      </h3>
                      <p className="text-muted-foreground">
                        Har biri o'z sohasida professional mutaxassislar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300 cursor-pointer group">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-4 h-4 text-primary-foreground"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        Zamonaviy metodlar
                      </h3>
                      <p className="text-muted-foreground">
                        Interaktiv va samarali o'qitish usullari
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden group">
                  <img
                    src="/about-avatar.png"
                    alt="Our Academy"
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Islom Siyosiy akademiyasi
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Rahimov Academy'ning sinf xonalari va o'quv jarayonini videoda
                tomosha qiling
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-3xl bg-secondary/50 flex items-center justify-center overflow-hidden group hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <img
                  src="/city.png"
                  alt="Academy Video"
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Bizning o'qituvchilar
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tajribali va malakali o'qituvchilar jamoasi
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group h-full">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-transparent group-hover:ring-primary/20 transition-all duration-300 group-hover:scale-110">
                      <AvatarImage
                        src={teacher.image || "/placeholder.svg"}
                        alt={teacher.name}
                      />
                      <AvatarFallback className="text-2xl">
                        {teacher.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {teacher.name}
                    </h3>
                    <div className="text-sm text-primary font-medium mb-2">
                      {teacher.role}
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">
                      {teacher.experience}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {teacher.specialization}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                O'quvchilarimiz fikri
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                O'quvchilar sharhi
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bizning o'quvchilarimiz nima deyishadi
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="border-2 border-border shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card/95 backdrop-blur-sm max-w-2xl mx-auto">
                      <CardContent className="p-6">
                        {/* Author Info at Top */}
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="w-14 h-14 ring-2 ring-primary/20">
                            <AvatarImage
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                            />
                            <AvatarFallback className="text-base font-bold bg-primary/10 text-primary">
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="font-bold text-foreground text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </div>
                          </div>
                          {/* Rating Stars - Compact */}
                          <div className="flex gap-0.5">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-amber-500 text-amber-500"
                                />
                              )
                            )}
                          </div>
                        </div>

                        {/* Message Bubble Style */}
                        <div className="relative bg-primary/5 rounded-2xl rounded-tl-sm p-5 mb-3">
                          <MessageCircle className="absolute -top-2 -left-2 w-6 h-6 text-primary/30" />
                          <p className="text-foreground/90 leading-relaxed text-base">
                            {testimonial.text}
                          </p>
                        </div>

                        {/* Course Badge */}
                        <div className="flex justify-end">
                          <div className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            📚 {testimonial.course}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - More prominent */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-12 h-12 rounded-full shadow-xl hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all z-10 bg-background border-2"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-12 h-12 rounded-full shadow-xl hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all z-10 bg-background border-2"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Dots Indicator - Larger and more visible */}
            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary w-10 shadow-lg"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Trust Badge */}
          <ScrollReveal delay={300}>
            <div className="text-center mt-12 pt-8 border-t border-border max-w-2xl mx-auto">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-bold text-primary text-lg">500+</span>{" "}
                o'quvchi Rahimov Academy'da arab tilini muvaffaqiyatly o'rganib,
                o'z maqsadlariga erishdi
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
