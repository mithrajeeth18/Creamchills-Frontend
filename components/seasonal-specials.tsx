import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Snowflake, Sun, Leaf } from "lucide-react"
import Image from "next/image"

const seasonalItems = [
  {
    id: 1,
    name: "Winter Wonderland",
    description: "Peppermint ice cream with crushed candy canes and white chocolate chunks",
    image: "/placeholder.svg?height=250&width=300",
    price: "₹199",
    season: "Winter",
    icon: Snowflake,
    color: "from-blue-400 to-cyan-400",
    available: "Dec - Feb",
  },
  {
    id: 2,
    name: "Summer Berry Blast",
    description: "Mixed berry sorbet with fresh strawberries, blueberries, and raspberries",
    image: "/placeholder.svg?height=250&width=300",
    price: "₹179",
    season: "Summer",
    icon: Sun,
    color: "from-orange-400 to-red-400",
    available: "Jun - Aug",
  },

  {
    id: 3,
    name: "Autumn Spice Delight",
    description: "Cinnamon ice cream with caramel swirl and spiced cookie pieces",
    image: "/placeholder.svg?height=250&width=300",
    price: "₹189",
    season: "Fall",
    icon: Leaf,
    color: "from-amber-400 to-orange-500",
    available: "Sep - Nov",
  },
]

export function SeasonalSpecials() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Seasonal <span className="text-blue-500">Specials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            { "Limited-time flavors that capture the essence of each season. Don't miss out on these exclusive creations!"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {seasonalItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Season Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 text-white text-xs">
                    <item.icon className="w-3 h-3 mr-1" />
                    {item.season}
                  </Badge>
                </div>

                {/* Limited Time Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-gray-700 text-xs shadow-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    Limited
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-pink-600">{item.price}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{item.available}</span>
                </div>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Try It Now</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm text-center border border-gray-100">
          <h3 className="text-2xl font-bold mb-4">{"Don't Miss Our Special Flavors! ✨"}</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {"From Mango Mastani to Cassata, our seasonal and signature flavors are crafted with the same micro-batch care. Subscribe to stay updated on new arrivals!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
