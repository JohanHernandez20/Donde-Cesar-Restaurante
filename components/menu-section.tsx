import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Heart } from "lucide-react"

const menuItems = [
  {
    name: "Coconut Rice",
    description: "Traditional Colombian coconut rice with a hint of sweetness",
    image: "/colombian-coconut-rice-in-a-bowl-with-coconut-flak.jpg",
    price: "$15.000",
    popular: true,
  },
  {
    name: "Fried Fish",
    description: "Fresh catch of the day, perfectly seasoned and fried",
    image: "/colombian-fried-fish-with-lime-and-herbs-on-a-plat.jpg",
    price: "$35.000",
    popular: false,
  },
  {
    name: "Patacones",
    description: "Twice-fried plantains served with garlic sauce",
    image: "/colombian-patacones-fried-plantains-with-garlic-sa.jpg",
    price: "$10.000",
    popular: true,
  },
  {
    name: "Seafood Casserole",
    description: "Rich casserole with shrimp, fish, and coastal spices",
    image: "/colombian-seafood-casserole-with-shrimp-and-fish-i.jpg",
    price: "$25.000",
    popular: false,
  },
  {
    name: "Tropical Salad",
    description: "Fresh tropical fruits with lime and chili powder",
    image: "/colombian-tropical-fruit-salad-with-mango--pineapp.jpg",
    price: "$12.000",
    popular: true,
  },
  {
    name: "Arepa de Huevo",
    description: "Traditional arepa filled with egg and fried to perfection",
    image: "/colombian-arepa-de-huevo-fried-corn-cake-with-egg.jpg",
    price: "$5.000",
    popular: false,
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Signature <span className="text-primary">Dishes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the authentic flavors of Colombia's Caribbean coast, prepared with traditional recipes passed down
            through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Popular
                  </div>
                )}
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                  <span className="text-lg font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-pretty">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
