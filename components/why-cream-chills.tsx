import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, MapPin, Award } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Micro-Batch Quality",
    description:
      "We churn our ice cream in small batches of ten gallons or less, ensuring each scoop is crafted with care.",
    color: "text-green-500",
  },
  {
    icon: Heart,
    title: "25+ Years of Love",
    description:
      "Since 1998, we've been creating wonderful memories with mouth-watering treats for families across Mumbai.",
    color: "text-pink-500",
  },
  {
    icon: MapPin,
    title: "Neighbourhood Café",
    description: "Your friendly local ice cream destination with 18+ locations across Mumbai, Thane, and Navi Mumbai.",
    color: "text-blue-500",
  },
  {
    icon: Award,
    title: "Best Quality Promise",
    description: "Our mission: to serve the best mouth-watering taste without compromising on quality.",
    color: "text-purple-500",
  },
]

export function WhyCreamChills() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="text-green-500">Cream Chills?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 1998, we've been your friendly neighbourhood ice cream café, creating wonderful memories with
            fantastic, irresistible treats that make everyone feel right at home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-pink-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Our Story: From 1998 to <span className="text-pink-500">Today</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since 1998, Cream Chills has been delighting kids and adults of all ages with fantastic, irresistible &
                mouth-watering ice creams, desserts, and a friendly atmosphere. We've helped countless customers make
                wonderful memories across Mumbai and surrounding areas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We churn our ice cream in small batches, ten gallons or less at a time. That micro-batch process allows
                us to care for and consider each scoop of ice cream that we serve. It may take longer, but we think it
                makes our ice cream that much better.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Cream Chills founders"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-500">1998</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
