import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"
import Image from "next/image"
const locations = [
  {
    id: 1,
    name: "Mulund East - Flagship",
    address: "Maruti Darshan Soc Ltd, Shop 15, Hanuman Chowk, Navghar Road, Mulund (E) 400081",
    phone: "022-25638837",
    hours: "Daily: 11AM - 11PM",
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
  {
    id: 2,
    name: "Thane West",
    address: "Prasad Building, Shop 1, Gadkari Road, Ram Maruti Road, Thane West",
    phone: "022-25428766",
    hours: "Daily: 11AM - 11PM",
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
  {
    id: 3,
    name: "Airoli, Navi Mumbai",
    address: "Shop 29, Intop Heights, Sector 19, Airoli, Navi Mumbai",
    phone: "022-27797638",
    hours: "Daily: 11AM - 10PM",
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
  {
    id: 4,
    name: "Dombivli East",
    address: "Xperia Mall, Kiosk 1, Food Court, Dombivli East",
    phone: "7506345987",
    hours: "Mall Hours: 11AM - 10PM",
    image: "/placeholder.svg?height=200&width=300",
    isNew: true,
  },
  {
    id: 5,
    name: "Panvel",
    address: "Shop 1, Plot 41/42, Giriraj Enclave, Sector 20, Roadpali, Kalamboli, Panvel 410218",
    phone: "9820985022",
    hours: "Daily: 11AM - 10PM",
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
  {
    id: 6,
    name: "Kharghar",
    address: "Shop 1, Sai Shusti, Plot 15, Shilp Chowk, Sector 20, Kharghar 410210",
    phone: "022-27747799",
    hours: "Daily: 11AM - 10PM",
    image: "/placeholder.svg?height=200&width=300",
    isNew: false,
  },
]

export function LocationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Find Your Nearest <span className="text-blue-500">Cream Chills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
           {"Visit any of our welcoming locations for the full Cream Chills experience. Each store offers the same premium quality with its own unique charm."} 
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location) => (
            <Card
              key={location.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                 <Image
    src={location.image || "/placeholder.svg"}
    alt={location.name}
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-300"
  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {location.isNew && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        New Location!
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{location.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{location.address}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600">{location.phone}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600">{location.hours}</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                      Call Store
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Store Locator CTA */}
        <div className="bg-green-500 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{ "Can't Find a Location Near You?"}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {"We're always expanding! Use our store locator to find the closest Cream Chills or get notified when we open in your area."}  
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Store Locator
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full bg-transparent"
            >
              Notify Me of New Locations
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
