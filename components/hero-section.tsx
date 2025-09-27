import { Button } from "@/components/ui/button"
import { ArrowRight, Palmtree, Fish, Waves } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/colombian-coastal-cuisine-dishes-including-coconut.jpg')`,
        }}
      />

      {/* Floating coastal elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Palmtree
          className="absolute top-20 left-10 h-12 w-12 text-accent/30 wave-animation"
          style={{ animationDelay: "0s" }}
        />
        <Fish
          className="absolute top-40 right-20 h-8 w-8 text-secondary/40 wave-animation"
          style={{ animationDelay: "1s" }}
        />
        <Waves
          className="absolute bottom-32 left-20 h-10 w-10 text-secondary/30 wave-animation"
          style={{ animationDelay: "2s" }}
        />
        <Palmtree
          className="absolute bottom-20 right-10 h-14 w-14 text-accent/20 wave-animation"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Authentic Coastal
          <span className="block text-accent">Flavors</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Experience the rich culinary traditions of Colombia's Caribbean coast at Donde César, where every dish tells a
          story of heritage and passion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group"
          >
            View Menu
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4 text-lg font-semibold bg-transparent"
          >
            Make Reservation
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
