"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function FoundersGallery() {
  const founder = {
    name: "Ma’rufjon Rahimov",
    role: "Bosh direktori va O'qituvchi",
    bio: "Rahimov Academy Arab tili markazi   asoschisi. Oʻzbekiston xalqaro islom akademiyasi bitiruvchisi. Arab tili grammatikasi bo'yicha 6 yillik tajribaga ega expert. Arab tili fonetikasida 10 yildan ortiq tajriba. Imom Abu Zakarariyo Yahyo ibn Sharaf an-Navaviy Dimashqiyning “Arbain” asarlaridan  “Jamiul u’lum val hikam” nomli sharhi asosida Shayx Ahmad Sa'd Damanhuriy al-Misriydan ijoza sohibi. Imom Jazariyning “Manzumatul muqoddima” asaridan Dr Ayman Suvayd Rushdiy sharhi asosida Jahongir qori Ne’matovdan ijoza sohibi. Imom Termiziyning \"Sunani Termiziy\" hadis to'plamidan Alimardon Mirahmaddan muallifgacha ijoza sohibi.",
  };

  const images = [
    "/founder/1.png",
    "/founder/2.png",
    "/founder/3.jpg",
    "/founder/4.JPG",
  ];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-8 items-center">
        {/* Main Image Gallery */}
        <div className="lg:col-span-3">
          <div className="relative group">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src={images[current] || "/placeholder.svg"}
                alt={founder.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <button
                onClick={prev}
                className="pointer-events-auto p-3 rounded-full bg-white/90 text-black hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label="Oldingi rasm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="pointer-events-auto p-3 rounded-full bg-white/90 text-black hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label="Keyingi rasm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2 mt-6 justify-center flex-wrap">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setAutoPlay(false);
                  }}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    index === current
                      ? "bg-primary w-3 h-3"
                      : "bg-border w-2 h-2 hover:bg-primary/60"
                  }`}
                  aria-label={`Rasm ${index + 1}`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-center mt-4 text-sm text-muted-foreground">
              {current + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* Founder Information */}
        <div className="lg:col-span-2">
          <Card className="border-primary/30 bg-card/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
                  Tashkil etuvchi
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-lg text-primary font-semibold mb-6">
                  {founder.role}
                </p>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              {/* Play/Pause Toggle */}
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {autoPlay ? "⏸ Pauza qilish" : "▶ Davom ettirish"}
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FoundersGallery;
