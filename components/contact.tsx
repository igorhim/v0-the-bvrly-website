import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Us</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-mono">
            We'd love to see you at our cozy brunch spot
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-muted-foreground font-mono leading-relaxed">
                  200 S Beverly Dr
                  <br />
                  Beverly Hills, CA 90212
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a
                  href="tel:4247770033"
                  className="text-muted-foreground font-mono hover:text-primary transition-colors"
                >
                  424 777 0033
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:Bvrlycafe@gmail.com"
                  className="text-muted-foreground font-mono hover:text-primary transition-colors"
                >
                  Bvrlycafe@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="flex gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Hours</h3>
              </div>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday</span>
                <span className="font-medium">8:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tuesday</span>
                <span className="font-medium">8:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Wednesday</span>
                <span className="font-medium">8:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Thursday</span>
                <span className="font-medium">8:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Friday</span>
                <span className="font-medium">8:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-medium">8:00 AM – 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-medium">8:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground font-mono">Copyright 2025 thebvrly.com</p>
        </footer>
      </div>
    </section>
  )
}
