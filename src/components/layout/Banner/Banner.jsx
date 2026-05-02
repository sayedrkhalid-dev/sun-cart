"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import banner from "@/assets/banner.png";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiCart } from "react-icons/bi";

const slides = [
  {
    id: 1,
    title: "Summer Sale 50% OFF",
    subtitle: "Upgrade your style with hot discounts",
    image: banner,
  },
  {
    id: 2,
    title: "Hot Deals 🔥",
    subtitle: "Limited time offers on top products",
    image: banner,
  },
  {
    id: 3,
    title: "New Arrivals",
    subtitle: "Fresh trends just landed",
    image: banner,
  },
];

const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slider */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full relative h-[400px] md:h-[500px]"
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>

                  <div className="flex items-center gap-2">
                    <Link href={"/shop"}>
                      <Button
                        variant="primary"
                        size="lg"
                        className="bg-amber-600 hover:bg-amber-600/90 transition-all duration-300"
                      >
                        <BiCart className="text-2xl" />
                        Shop Now
                      </Button>
                    </Link>

                    <Link href={"/products"}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-2 group text-gray-50 border-gray-50 hover:bg-gray-50/10 transition-all duration-300"
                      >
                        Explore Products
                        <FaArrowRightLong className="group-hover:translate-x-1 transition-all duration-300" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-50/30 hover:bg-gray-50/50 p-2 rounded-full shadow"
      >
        <FiArrowLeft size={20} className="text-gray-50" />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-50/30 hover:bg-gray-50/50 p-2 rounded-full shadow"
      >
        <FiArrowRight size={20} className="text-gray-50" />
      </button>
    </section>
  );
};

export default Banner;
