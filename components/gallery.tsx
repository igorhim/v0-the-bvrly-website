import Image from "next/image"

const images = [
  {
    src: "/images/hxc6pvmxmv.png",
    alt: "Brunch spread with lemon plates",
  },
  {
    src: "/images/nvars6ayyt.jpeg",
    alt: "French toast and pancakes",
  },
  {
    src: "/images/f7287v38zd.png",
    alt: "Interior cafe view",
  },
  {
    src: "/images/oyj6ugjy3v.png",
    alt: "Specialty drinks",
  },
  {
    src: "/images/q1jczj7kor.png",
    alt: "Counter and bar area",
  },
  {
    src: "/images/x2obiiqsi8.png",
    alt: "Barista preparing drinks",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            A glimpse into our cozy space and delicious offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
