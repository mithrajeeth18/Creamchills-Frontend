"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const flavors = [
  {
    id: 1,
    name: "Mango Mastani",
    description: "Rich mango ice cream with fresh mango chunks - a Mumbai favorite",
    image: "./placeholder.svg?height=300&width=300",
    price: "₹180",
    rating: 4.9,
    isPopular: true,
    color: "from-orange-400 to-yellow-400",
  },
  {
    id: 2,
    name: "Chocolate Brownie",
    description: "Rich chocolate ice cream with fudgy brownie pieces",
    image: "./placeholder.svg?height=300&width=300",
    price: "₹160",
    rating: 4.8,
    isNew: true,
    color: "from-amber-600 to-orange-600",
  },
  {
    id: 3,
    name: "Cassata",
    description: "Traditional Italian dessert with mixed fruits and nuts",
    image: "./placeholder.svg?height=300&width=300",
    price: "₹200",
    rating: 4.7,
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 4,
    name: "Hazelnut Brownie",
    description: "Creamy hazelnut ice cream with brownie chunks",
    image: "./placeholder.svg?height=300&width=300",
    price: "₹170",
    rating: 4.9,
    color: "from-yellow-200 to-amber-300",
  },
  {
    id: 5,
    name: "Black Forest",
    description: "Chocolate ice cream with cherries and chocolate shavings",
    image: "./placeholder.svg?height=300&width=300",
    price: "₹190",
    rating: 4.8,
    color: "from-red-400 to-pink-400",
  },
]

export function FeaturedFlavors() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % flavors.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + flavors.length) % flavors.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-pink-500">Featured Flavors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We churn our ice cream in small batches, ten gallons or less at a time. That micro-batch process allows us
            to care for each scoop we serve.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {flavors.map((flavor) => (
            <div
              key={flavor.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={flavor.image || "/placeholder.svg"}
                  alt={flavor.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Simple Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {flavor.isNew && <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">New</Badge>}
                  {flavor.isPopular && (
                    <Badge className="bg-pink-500 hover:bg-pink-600 text-white text-xs">Popular</Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 shadow-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium text-gray-700">{flavor.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {flavor.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{flavor.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-pink-600">{flavor.price}</span>
                  <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-3 py-1">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {flavors.map((flavor) => (
                <div key={flavor.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={flavor.image || "/placeholder.svg"}
                        alt={flavor.name}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute top-3 left-3 flex gap-2">
                        {flavor.isNew && <Badge className="bg-green-500 text-white text-xs">New</Badge>}
                        {flavor.isPopular && <Badge className="bg-pink-500 text-white text-xs">Popular</Badge>}
                      </div>

                      <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 shadow-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{flavor.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{flavor.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{flavor.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-pink-600">{flavor.price}</span>
                        <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-gray-200 hover:bg-gray-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-gray-200 hover:bg-gray-50"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {flavors.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-pink-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 hover:bg-green-50 px-8 py-3 rounded-full bg-transparent text-black border-black"
          >
            View All Flavors
          </Button>
        </div>
      </div>
    </section>
  )
}
