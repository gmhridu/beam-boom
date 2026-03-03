"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

type Product = {
  title: string;
  imageSrc: string;
  description: string;
  category: string;
};

const products: Product[] = [
  {
    title: "E.X.F.O. Cleanse",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/product-1.png",
    description:
      "A gentle cleansing exfoliant, which helps to effectively remove makeup and impurities. Contains Lactobionic acid, Rooibos extract, Vitamin B5, Urea and Papain enzyme. This cleanser will assist in removing dead skin cells without stripping the skin or disrupting the skin barrier and is ideal to use in combination with all the pHformula skin resurfacing treatments. Suitable for all skin types.",
    category: "DAILY ESSENTIALS",
  },
  {
    title: "FOAM Cleanse",
    imageSrc:
      "https://www.pulse-clinic.co.uk/wp-content/uploads/2023/05/product-2.png",
    description:
      "This soap-free liquid cleanser that turns into a generous, airy foam to effectively remove makeup and impurities, while protecting the skin from urban pollution. This formulation is rich in essential minerals to maintain a healthy balance, whilst bisabolol and D-panthenol provide moisture and soothing properties. Excellent for city dwellers.",
    category: "DAILY ESSENTIALS",
  },
];

const categories = [
  "DAILY ESSENTIALS",
  "HOMECARE KITS",
  "CONCENTRATED SERUMS",
  "ACTIVE PRESCRIPTIONS",
  "ABC",
  "POINT",
  "DEFENCE",
  "SPOT ON",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("DAILY ESSENTIALS");

  const filteredProducts = products.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Right gray panel — lg only to avoid layout issues */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[22%] bg-gray-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-5 md:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Purchase In Clinic
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Please book a skin consultation to discuss your skin concerns
          </p>
        </div>

        {/* Brand / Line Selector */}
        <div className="flex justify-end mb-6 sm:mb-8 lg:mb-10">
          <Select
            defaultValue="pHformula Skincare"
            onValueChange={(value) => console.log(value)}
          >
            <SelectTrigger className="w-40 sm:w-45 bg-white shadow cursor-pointer text-sm sm:text-base">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pHformula Skincare" className="cursor-pointer">
                Phformula Skincare
              </SelectItem>
              <SelectItem value="Obagi Medical" className="cursor-pointer">
                Obagi Skincare
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 sm:mb-10 lg:mb-12">

          {/* Mobile only: wrap into a neat grid of pills */}
          <div className="flex flex-wrap gap-2 justify-start sm:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
          px-3 py-1.5 rounded-md font-medium text-xs whitespace-nowrap
          transition-all duration-300 cursor-pointer
          ${selectedCategory === cat
                    ? "bg-sky-500 text-white shadow-md"
                    : "bg-white border shadow text-gray-700 hover:bg-gray-200"
                  }
        `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* sm and above: horizontal scrollable row (unchanged behaviour) */}
          <div className="hidden sm:block overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex space-x-3 md:space-x-4 justify-center min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
            px-4 md:px-5 py-2.5 md:py-3 rounded-md font-medium
            text-sm md:text-base whitespace-nowrap transition-all duration-300 cursor-pointer
            ${selectedCategory === cat
                      ? "bg-sky-500 text-white shadow-md"
                      : "bg-white border shadow text-gray-700 hover:bg-gray-200"
                    }
          `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {filteredProducts.map((product, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image container */}
                <div className="relative w-full aspect-square bg-gray-50">
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Title bar */}
                <div className="bg-black text-white py-3 sm:py-4 px-4 sm:px-6 text-center font-bold text-base sm:text-lg md:text-xl">
                  {product.title}
                </div>

                {/* Description */}
                <div className="p-4 sm:p-5 md:p-6 text-gray-700 text-sm md:text-base leading-relaxed">
                  {product.description}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 md:py-20 text-gray-500 text-base sm:text-lg md:text-xl">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
