"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, Instagram, Heart } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Dattatraya",
    location: "Panchpakhadi, Thane",
    rating: 5,
    text: "At Cream Chills I have enjoyed a lot with my family and friends. The service and quality is amazing... It's really cool.. Best Wishes!",
    avatar: "./placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Priya S.",
    location: "Mulund East",
    rating: 5,
    text: "The Mango Mastani here is absolutely divine! Been coming here since childhood and the quality has never dropped. Highly recommend!",
    avatar: "./placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Rahul M.",
    location: "Airoli, Navi Mumbai",
    rating: 5,
    text: "Love their Cassata and Black Forest flavors. The micro-batch process really makes a difference - you can taste the quality in every scoop!",
    avatar: "./placeholder.svg?height=60&width=60",
  },
]

const instagramPosts = [
  { id: 1, image: "./placeholder.svg?height=200&width=200", likes: 234 },
  { id: 2, image: "./placeholder.svg?height=200&width=200", likes: 189 },
  { id: 3, image: "./placeholder.svg?height=200&width=200", likes: 312 },
  { id: 4, image: "./placeholder.svg?height=200&width=200", likes: 156 },
  { id: 5, image: "./placeholder.svg?height=200&width=200", likes: 278 },
  { id: 6, image: "./placeholder.svg?height=200&width=200", likes: 203 },
]

export function CustomerLove() {
  const [activeTab, setActiveTab] = useState("reviews")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Customer <span className="text-blue-500">Love</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our amazing customers have to say!
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex">
            <Button
              variant={activeTab === "reviews" ? "default" : "ghost"}
              className={`rounded-full px-6 py-2 ${
                activeTab === "reviews" ? "bg-blue-500 text-white" : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              <Star className="w-4 h-4 mr-2" />
              Reviews
            </Button>
            <Button
              variant={activeTab === "instagram" ? "default" : "ghost"}
              className={`rounded-full px-6 py-2 ${
                activeTab === "instagram" ? "bg-blue-500 text-white" : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("instagram")}
            >
              <Instagram className="w-4 h-4 mr-2" />
              #CreamChills
            </Button>
          </div>
        </div>

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-pink-200" />
                    <p className="text-gray-600 italic pl-4">{testimonial.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Instagram Tab */}
        {activeTab === "instagram" && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {instagramPosts.map((post) => (
                <div key={post.id} className="relative group cursor-pointer">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={`Instagram post ${post.id}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="flex items-center text-white">
                      <Heart className="w-4 h-4 mr-1 fill-white" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Share your Cream Chills moments with <span className="font-semibold text-pink-500">#CreamChills</span>
              </p>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <Instagram className="w-4 h-4 mr-2" />
                Follow Us on Instagram
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
