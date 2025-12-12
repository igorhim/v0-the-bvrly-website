import Image from "next/image"
import { Leaf, Heart, Coffee } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Welcome to The Bvrly</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-mono leading-relaxed">
            A cozy neighborhood cafe in the heart of Beverly Hills, where Mediterranean flavors meet fresh California
            ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/images/q1jczj7kor.png"
              alt="The Bvrly interior"
              width={600}
              height={800}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fresh & Local</h3>
                <p className="text-muted-foreground font-mono leading-relaxed">
                  We source our eggs and vegetables fresh daily from Menos Farm at the local farmer's market, ensuring
                  the highest quality ingredients in every dish.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Made with Love</h3>
                <p className="text-muted-foreground font-mono leading-relaxed">
                  Every dish is crafted with care, combining Mediterranean traditions with modern California cuisine to
                  create unique, flavorful experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Artisan Coffee</h3>
                <p className="text-muted-foreground font-mono leading-relaxed">
                  Our signature house blend is created in collaboration with a local Los Angeles organic coffee
                  roastery, featuring organic ceremonial grade matcha directly from Japan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent/30 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Commitment to Quality</h3>
          <p className="text-muted-foreground font-mono leading-relaxed max-w-3xl mx-auto">
            We proudly support local farms and sustainable sourcing. From our organic, all-natural Bill-E's bacon to our
            house-made preserves and baguettes, every element on your plate represents our dedication to excellence and
            community.
          </p>
        </div>
      </div>
    </section>
  )
}
