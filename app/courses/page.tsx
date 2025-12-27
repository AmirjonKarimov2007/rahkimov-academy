import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, BookOpen, Video, MapPin, Check } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function CoursesPage() {
  const onlineCourses = [
    {
      title: "Boshlang'ich arab tili",
      level: "Beginner",
      description: "Arab harflarini o'qish va yozishni biladiganlar uchun",
      duration: "3 oy",
      lessons: "36 dars",
      students: "15 kishi",
      schedule: "Dushanba, Chorshanba, Juma",
      time: "18:00 - 19:30",
      price: "350,000",
      teacher: "Rahimov Marufjon",
      teacherImage: "/teacher.png",
      features: ["Live video darslar", "Dars yozuvlari", "Homework va testlar", "Shaxsiy mentor", "Sertifikat"],
      image: "/online-arabic-course-laptop-with-video-lesson.jpg",
    },
    {
      title: "CEFR A2 - B2",
      level: "Intermediate",
      description: "Eng kamida 3-4 oy davomida arab tilini o'rganib kelayotganlar uchun",
      duration: "4 oy",
      lessons: "64 dars",
      students: "20 kishi",
      schedule: "Seshanba, Payshanba, Shanba",
      time: "19:00 - 20:30",
      price: "490,000",
      teacher: "Rahimov Marufjon",
      teacherImage: "/teacher.png",
      features: ["Live video darslar", "Amaliy mashqlar", "Nutq amaliyoti", "Progress monitoring", "Sertifikat"],
      image: "/online-video-call-arabic-language-lesson.jpg",
    },
    {
      title: "Sarf va Nahv",
      level: "Advanced",
      description: "Arab tilini gramatikasini puxta o'rganmoqchi bo'lganlar uchun",
      duration: "6 oy",
      lessons: "96 dars",
      students: "15 kishi",
      schedule: "Dushanba, Chorshanba, Juma",
      time: "20:00 - 21:30",
      price: "490,000",
      teacher: "Rahimov Marufjon",
      teacherImage: "/teacher.png",
      features: ["Live video darslar", "Adabiyot tahlili", "Tarjima amaliyoti", "1-1 konsultatsiya", "Sertifikat"],
      image: "/advanced-arabic-online-learning-with-books.jpg",
    },
  ]

  const offlineCourses = [
    {
      title: "CEFR A2 - B2",
      level: "Intermediate",
      description: "Jonli darslarimizda haqiqiy arab tili atmosferasini his eting",
      duration: "4 oy",
      lessons: "64 dars",
      students: "15 kishi",
      schedule: "Dushanba, Chorshanba, Payshanba va Shanba",
      time: "15:00 - 17:00",
      price: "970,000",
      location: "Toshkent shahar, Beruniy metro , Maydan ta'lim markazi",
      teacher: "Rahimov Marufjon",
      teacherImage: "/teacher.png",
      features: ["Guruhli darslar", "Interaktiv mashqlar", "Darslik materiallari", "Progress monitoring", "Sertifikat"],
      image: "/classroom-students-learning-arabic-language.jpg",
    }
  ]

  const levelColors = {
    Beginner: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    Intermediate: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
    Advanced: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Bizning kurslar</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Online va offline formatda har bir daraja uchun maxsus ishlab chiqilgan kurslar. O'zingizga qulay formatni
            tanlang va bugun o'rganishni boshlang.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="online" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="online" className="text-base cursor-pointer hover:bg-primary/10 transition-colors">
                <Video className="w-4 h-4 mr-2" />
                Online Kurslar
              </TabsTrigger>
              <TabsTrigger value="offline" className="text-base cursor-pointer hover:bg-primary/10 transition-colors">
                <MapPin className="w-4 h-4 mr-2" />
                Offline Kurslar
              </TabsTrigger>
            </TabsList>

            {/* Online Courses */}
            <TabsContent value="online" className="space-y-8">
              {onlineCourses.map((course, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <Card className="border-border overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-2 overflow-hidden">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            className="w-full h-full object-cover min-h-[300px] group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="lg:col-span-3 p-6 lg:p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <Badge
                                className={`${levelColors[course.level as keyof typeof levelColors]} hover:scale-110 transition-transform cursor-pointer`}
                              >
                                {course.level}
                              </Badge>
                              <h3 className="text-3xl font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                                {course.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors cursor-pointer">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <div className="text-muted-foreground">Davomiyligi</div>
                                <div className="font-medium text-foreground">{course.duration}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors cursor-pointer">
                              <BookOpen className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <div className="text-muted-foreground">Darslar</div>
                                <div className="font-medium text-foreground">{course.lessons}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors cursor-pointer">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <div className="text-muted-foreground">Guruh</div>
                                <div className="font-medium text-foreground">{course.students}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors cursor-pointer">
                              <Video className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <div className="text-muted-foreground">Format</div>
                                <div className="font-medium text-foreground">Online</div>
                              </div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <div className="text-sm text-muted-foreground mb-2">Dars jadvali:</div>
                            <div className="font-medium text-foreground">
                              {course.schedule} • {course.time}
                            </div>
                          </div>

                          <div className="mb-6">
                            <div className="text-sm text-muted-foreground mb-3">Kurs o'z ichiga oladi:</div>
                            <div className="grid grid-cols-2 gap-2">
                              {course.features.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-sm hover:translate-x-1 transition-transform cursor-pointer group/feature"
                                >
                                  <Check className="w-4 h-4 text-primary flex-shrink-0 group-hover/feature:scale-125 transition-transform" />
                                  <span className="text-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-6 border-t border-border">
                            <div className="flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                              <Avatar className="ring-2 ring-transparent hover:ring-primary/50 transition-all">
                                <AvatarImage src={course.teacherImage || "/placeholder.svg"} alt={course.teacher} />
                                <AvatarFallback>
                                  {course.teacher
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="text-sm text-muted-foreground">O'qituvchi</div>
                                <div className="font-medium text-foreground">{course.teacher}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform inline-block">
                                {course.price} so'm
                              </div>
                              <div className="text-sm text-muted-foreground">oyiga</div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <Link href="/connect">
                              <Button
                                size="lg"
                                className="w-full rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                              >
                                Kursga yozilish
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </TabsContent>

            {/* Offline Courses */}
            <TabsContent value="offline" className="space-y-8">
              {offlineCourses.map((course, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <Card className="border-border overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-2 overflow-hidden">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            className="w-full h-full object-cover min-h-[300px] group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="lg:col-span-3 p-6 lg:p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <Badge
                                className={`${levelColors[course.level as keyof typeof levelColors]} hover:scale-110 transition-transform cursor-pointer`}
                              >
                                {course.level}
                              </Badge>
                              <h3 className="text-3xl font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                                {course.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors cursor-pointer">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <div className="text-muted-foreground">Davomiyligi</div>
                                <div className="font-medium text-foreground">{course.duration}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors cursor-pointer">
                              <BookOpen className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <div className="text-muted-foreground">Darslar</div>
                                <div className="font-medium text-foreground">{course.lessons}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors cursor-pointer">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <div className="text-muted-foreground">Guruh</div>
                                <div className="font-medium text-foreground">{course.students}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm hover:bg-secondary/50 p-2 rounded-lg transition-colors cursor-pointer">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <div className="text-muted-foreground">Format</div>
                                <div className="font-medium text-foreground">Offline</div>
                              </div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <div className="text-sm text-muted-foreground mb-2">Dars jadvali:</div>
                            <div className="font-medium text-foreground">
                              {course.schedule} • {course.time}
                            </div>
                            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                              <MapPin className="w-4 h-4" />
                              <span>{course.location}</span>
                            </div>
                          </div>

                          <div className="mb-6">
                            <div className="text-sm text-muted-foreground mb-3">Kurs o'z ichiga oladi:</div>
                            <div className="grid grid-cols-2 gap-2">
                              {course.features.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-sm hover:translate-x-1 transition-transform cursor-pointer group/feature"
                                >
                                  <Check className="w-4 h-4 text-primary flex-shrink-0 group-hover/feature:scale-125 transition-transform" />
                                  <span className="text-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-6 border-t border-border">
                            <div className="flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                              <Avatar className="ring-2 ring-transparent hover:ring-primary/50 transition-all">
                                <AvatarImage src={course.teacherImage || "/placeholder.svg"} alt={course.teacher} />
                                <AvatarFallback>
                                  {course.teacher
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="text-sm text-muted-foreground">O'qituvchi</div>
                                <div className="font-medium text-foreground">{course.teacher}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform inline-block">
                                {course.price} so'm
                              </div>
                              <div className="text-sm text-muted-foreground">oyiga</div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <Link href="/connect">
                              <Button
                                size="lg"
                                className="w-full rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                              >
                                Kursga yozilish
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kurslar haqida video</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Bizning kurslar to'g'risida to'liq ma'lumot oling va dars jarayonini ko'ring
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/4zxyCrxLQMM?si=3Y6p9osAwlg-I4eT"
                    title="Bizning kurslar haqida"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bugun boshlang!</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Arab tilini professional darajada o'rganish uchun hoziroq ro'yxatdan o'ting va bepul konsultatsiya oling
          </p>
          <Link href="/connect">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full text-base px-8 h-14 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-pulse"
            >
              Bepul konsultatsiya olish
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
