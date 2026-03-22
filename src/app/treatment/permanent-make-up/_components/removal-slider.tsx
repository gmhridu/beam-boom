"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SliderItem {
  id: string;
  image: string;
}

const items: SliderItem[] = [
  { id: "1", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774120303/cn193vg8vc2hy6j1nal5.avif" },
  { id: "2", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774120303/cn193vg8vc2hy6j1nal5.avif" },
  { id: "3", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774120486/lm97ghxfbpxocpteeeta.avif" },
  { id: "4", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774120531/pzpmq7eiy10vfdtrrdps.avif" },
  { id: "5", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774120583/tysmxvxawgzkg6ntfctj.avif" },
  { id: "6", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774120583/tysmxvxawgzkg6ntfctj.avif" },
  { id: "7", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774160905/snxj2hsqdconof6vq6bl.avif" },
  { id: "8", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774160989/dnjh1qd9krytj3krzifg.avif" },
  { id: "9", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161053/ups1glkofv1iksqcesgn.avif" },
  { id: "10", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161113/lw6uan5cbv5ytvtibwfg.avif" },
  { id: "11", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161173/mxkwz1mosqsasj482xyf.avif" },
  { id: "12", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161230/nlwuayloqypdkndmbhbg.avif" },
  { id: "13", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161295/a8y6m1w2ousvd9prchgf.avif" },
  { id: "14", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161351/o4n0ggqdgz6bcedws6pi.avif" },
  { id: "15", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161458/uji2n4q4l7bungml9njn.avif" },
  { id: "16", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161513/ktd4j6xvvbqnxy7n9szm.avif" },
  { id: "17", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161569/umx7t14ehqbrgpdywebz.avif" },
  { id: "18", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161697/o3qzc8zmpkoyo4neben8.avif" },
  { id: "19", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161748/elvjr6kkfyisycd0mz9v.avif" },
  { id: "20", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161795/y2ovvjqy414lwot1qdvu.avif" },
  { id: "21", image: "https://res.cloudinary.com/dyq0ij1yk/image/upload/v1774161837/d6c7sjdmoparhivoyyxk.avif" },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(2);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = items.length - perView;

  const next = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const translateX = -(current * (100 / perView));

  return (
    <section className="py-16 md:py-24 relative bg-gray-900 text-white overflow-hidden"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dyq0ij1yk/image/upload/v1773073650/q4kbnu9g2hktj4opewzm.avif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden">

          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="px-3 shrink-0"
                style={{ width: `${100 / perView}%` }}
              >
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden group shadow-xl">

                  <Image
                    src={item.image}
                    alt="Permanent Make-up result at Beam & Bloom"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                </div>
              </div>
            ))}
          </div>

          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70"
          >
            <ArrowLeftIcon size={20} />
          </button>

          {/* Right Button */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full hover:bg-black/70"
          >
            <ArrowRightIcon size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
