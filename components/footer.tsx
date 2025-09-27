import { Waves, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-secondary wave-animation" />
              <div className="text-2xl font-bold text-foreground">
                Donde <span className="text-primary">César</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-pretty">
              Experience the authentic flavors of Colombia's Caribbean coast. Our family recipes have been passed down
              through generations, bringing you the true taste of coastal Colombian cuisine.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="p-2 bg-transparent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2 bg-transparent">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2 bg-transparent">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  Calle 58
                  <br />
                  Colombia, Barranquilla
                </span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">(57) 313 7057596 </span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm"> dondecesar@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>8am - 9pm</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>6am - 3pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>6am - 12pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Donde César. All rights reserved. | Bringing authentic Colombian coastal flavors to your table.
          </p>
        </div>
      </div>
    </footer>
  )
}
