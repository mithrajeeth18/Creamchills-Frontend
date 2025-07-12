"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-blue-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-40 w-24 h-24 bg-yellow-200 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200">
              <span className="text-sm font-medium text-pink-600">
                ✨ Your Friendly Neighbourhood Café
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-pink-500">Stay Calm &</span>
              <br />
              <span className="text-gray-800">Try One!</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
             {" Since 1998, we've been delighting kids and adults with fantastic, irresistible & mouth-watering ice creams, desserts, and a friendly atmosphere that makes everyone feel right at home."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="hover:bg-pink-400 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-pink-500"
            >
              Order Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-pink-400 text-lg px-8 py-6 rounded-full bg-white/80 backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">25+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">18+</div>
              <div className="text-sm text-gray-600">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">Mumbai</div>
              <div className="text-sm text-gray-600">& Surrounding Areas</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center">
        <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] aspect-square min-h-[250px] rounded-3xl overflow-hidden">
  <Image
    src="/icecream1.png"
    alt="Delicious ice cream scoops"
    fill
    className="object-cover"
    priority
  />
</div>


          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
            <span className="text-2xl sm:text-3xl">🍓</span>
          </div>
          <div
            className="absolute -bottom-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <span className="text-xl sm:text-2xl">🍫</span>
          </div>
        </div>
      </div>
    </section>
  )
}
