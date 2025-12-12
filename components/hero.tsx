import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hxc6pvmxmv.png"
          alt="The Bvrly brunch spread"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <Image
          src="/images/output-onlinepngtools_3.png"
          alt="The Bvrly"
          width={500}
          height={250}
          className="mx-auto mb-8 drop-shadow-lg"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-foreground drop-shadow-md">
          Cozy Brunch Spot in Beverly Hills
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-mono">
          Fresh, locally sourced Mediterranean cuisine
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-mono uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-mono uppercase tracking-wider hover:bg-secondary/90 transition-colors"
          >
            Visit Us
          </a>
        </div>
      </div>
    </section>
  )
}
