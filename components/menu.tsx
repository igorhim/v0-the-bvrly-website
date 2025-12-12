"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const menuCategories = {
  apps: {
    title: "Apps & Eggs",
    items: [
      {
        name: "Zucchini Mezze with Tzatziki Sauce",
        price: "$16",
        image: "/zucchini-mezze-fritters-with-white-tzatziki-sauce.jpg",
      },
      {
        name: "Honey Glazed Feta Pie",
        description: "caraway seeds",
        price: "$15",
        image: "/honey-glazed-feta-cheese-pie-with-caraway-seeds.jpg",
      },
      {
        name: "Bread & Butter",
        description: "French butter with house baguette + house made strawberry preserve",
        price: "$8",
        image: "/fresh-baguette-with-butter-and-strawberry-preserve.jpg",
      },
      {
        name: "Fig & Honey Toast",
        description: "goat cheese, lemon zest on country bread",
        price: "$15",
        image: "/fig-honey-toast-with-goat-cheese-on-country-bread.jpg",
      },
      {
        name: "Croissant with Housemade Chocolate Dip",
        price: "$8",
        image: "/buttery-croissant-with-chocolate-dipping-sauce.jpg",
      },
      {
        name: "Breakfast Plate",
        description: "sesame simit, herbs, feta, strawberry preserve, kaymak & sujuk",
        price: "$19",
        image: "/turkish-breakfast-plate-with-simit-bread-feta-chee.jpg",
      },
      {
        name: "Zucchini Cakes",
        description: "cilantro, green onion, dill, labne sauce",
        price: "$15",
        image: "/zucchini-cakes-with-herbs-and-yogurt-sauce.jpg",
      },
      {
        name: "Eggs & Bacon",
        description: "Bill-E's bacon, sunny side up eggs + bread OR pancakes",
        price: "$19",
        image: "/images/hxc6pvmxmv.png",
      },
      {
        name: "Zaatar Eggs & Sujuk",
        description: "sunny side up eggs with spiced sausage + bread",
        price: "$18",
        image: "/sunny-side-up-eggs-with-spiced-sausage-zaatar.jpg",
      },
      {
        name: "Shakshuka Scramble",
        description: "tomato, bell peppers, basil, cilantro + bread",
        price: "$17",
        image: "/shakshuka-scrambled-eggs-with-tomatoes-bell-pepper.jpg",
      },
      {
        name: "Croissant Egg Sandwich",
        description: "bacon, fig chutney, creamy spread, arugula, burnt harissa powder",
        price: "$19",
        image: "/images/hxc6pvmxmv.png",
      },
      {
        name: "Spiced Yogurt Eggs",
        description: "sunny side eggs with garlic yogurt, dill and chili, brown butter + bread",
        price: "$15",
        image: "/sunny-side-eggs-with-spiced-yogurt-sauce-and-herbs.jpg",
      },
      {
        name: "Bagel & Lox",
        description: "sesame bagel, cream cheese, capers, cucumbers, tomato, fresh onion",
        price: "$18",
        image: "/sesame-bagel-with-smoked-salmon-lox-cream-cheese.jpg",
      },
      {
        name: "Salmon Benedict",
        description: "English muffin, herb cream cheese spread, poached eggs & hollandaise sauce",
        price: "$19",
        image: "/images/hxc6pvmxmv.png",
      },
      {
        name: "Beef Benedict",
        description: "English muffin, herb cream cheese spread, poached eggs & hollandaise sauce",
        price: "$19",
        image: "/eggs-benedict-with-beef-and-hollandaise-sauce.jpg",
      },
      {
        name: "Avo Toast",
        description: "pickled onions, tomato, cilantro, black caraway & country bread",
        price: "$15",
        image: "/avocado-toast-with-pickled-onions-tomato-cilantro.jpg",
      },
      {
        name: "Breakfast Pide",
        description: "mozzarella, tomato, sujuk, egg, basil, sesame",
        price: "$18",
        image: "/turkish-pide-flatbread-with-egg-cheese-sausage.jpg",
      },
      {
        name: "Croissant French Toast",
        description: "hazelnuts, cinnamon, apricot, raisins, ice cream & syrup",
        price: "$17",
        image: "/images/nvars6ayyt.jpeg",
      },
      {
        name: "Pancakes",
        description: "blueberry or chocolate chips + maple ganache & syrup",
        price: "$16",
        image: "/images/nvars6ayyt.jpeg",
      },
      { name: "Nutella Crepe", price: "$15", image: "/crepe-with-nutella-chocolate-hazelnut-spread.jpg" },
      { name: "Dark Chocolate Hazelnut Crepe", price: "$15", image: "/dark-chocolate-hazelnut-crepe-with-ganache.jpg" },
    ],
  },
  salads: {
    title: "Salads & Bowls",
    items: [
      {
        name: "Greek Salad",
        description:
          "tomato, cucumbers, green bell peppers, kalamata olives, onion, basil, feta with lemon vinaigrette + bread",
        price: "$17",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Caprese Salad",
        description: "burrata, tomato, olive oil, basil sauce",
        price: "$17",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Gem Lettuce",
        description: "caraway seed, feta, avocado & lemon blossom with tahini cilantro vinaigrette",
        price: "$17",
        image: "/images/hxc6pvmxmv.png",
      },
      {
        name: "Kale Salad",
        description: "goat cheese, raisins, hazelnuts, chives with apple cider vinaigrette",
        price: "$17",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "French Onion Soup",
        description: "gouda cheese + bread",
        price: "$12",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Curry Cauliflower Bowl",
        description: "cilantro, raisins, green tahini, labne, chestnuts",
        price: "$18",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Salmon Bowl",
        description: "caraway, sesame, cilantro, green tahini, fava beans, dill, coconut rice",
        price: "$20",
        image: "/images/nvars6ayyt.jpeg",
      },
    ],
  },
  sandwiches: {
    title: "Sandwiches",
    items: [
      {
        name: "Tuna Melt",
        description: "house made tuna salad, tomato, cheese on toasted country bread",
        price: "$17",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Beef Wrap",
        description: "tomato, onion, fresh herbs, sumac, pickled jalapeno, bell pepper",
        price: "$18",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Seasoned Chicken Sandwich",
        description: "lettuce, tomato, jalapeños, cilantro, onion, lemon mayo, country bread",
        price: "$18",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Chicken Wrap",
        description: "lettuce, tomato, onion, pickled jalapeno, herbs, tahini, goddess dressing",
        price: "$18",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Caprese Sandwich",
        description: "burrata, marinara, basil pesto, chili oil, balsamic glaze, house baguette",
        price: "$18",
        image: "/images/hxc6pvmxmv.png",
      },
    ],
  },
  drinks: {
    title: "Drinks",
    items: [
      { name: "Double Espresso", price: "$4", image: "/placeholder.svg?height=300&width=400" },
      { name: "Turkish Coffee", price: "$4", image: "/placeholder.svg?height=300&width=400" },
      { name: "Drip Coffee", price: "$5", image: "/placeholder.svg?height=300&width=400" },
      { name: "Cortado", price: "$5", image: "/placeholder.svg?height=300&width=400" },
      { name: "Latte", price: "$6", image: "/placeholder.svg?height=300&width=400" },
      { name: "Bvrly Latte", price: "$6.50", image: "/placeholder.svg?height=300&width=400" },
      { name: "Cappuccino", price: "$6", image: "/placeholder.svg?height=300&width=400" },
      { name: "Mocha", price: "$6.50", image: "/placeholder.svg?height=300&width=400" },
      { name: "Chai Latte", price: "$6", image: "/placeholder.svg?height=300&width=400" },
      { name: "Cold Foam Pistachio Matcha", price: "$8", image: "/images/oyj6ugjy3v.png" },
      { name: "Cold Foam Iced Matcha", price: "$8", image: "/images/oyj6ugjy3v.png" },
      { name: "Matcha Latte", price: "$7", image: "/placeholder.svg?height=300&width=400" },
      { name: "Iced Coffee", price: "$5", image: "/placeholder.svg?height=300&width=400" },
      {
        name: "Green Goddess Smoothie",
        description: "kale, pineapple, orange juice, lemon, cilantro",
        price: "$8",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        name: "Very Berry Smoothie",
        description: "strawberries, blueberries, oat milk, coconut + chia",
        price: "$8",
        image: "/images/oyj6ugjy3v.png",
      },
      { name: "Strawberry Shake", price: "$7", image: "/placeholder.svg?height=300&width=400" },
      { name: "Chocolate Shake", price: "$7", image: "/placeholder.svg?height=300&width=400" },
      { name: "Matcha Shake", price: "$7", image: "/placeholder.svg?height=300&width=400" },
      { name: "Fresh OJ", price: "$8", image: "/placeholder.svg?height=300&width=400" },
      { name: "Fresh Lemonade with Mint", price: "$6", image: "/placeholder.svg?height=300&width=400" },
      { name: "Berry Mint Lemonade", price: "$6", image: "/placeholder.svg?height=300&width=400" },
      { name: "Iced Tea", price: "$5", image: "/placeholder.svg?height=300&width=400" },
      { name: "Arnold Palmer", price: "$5.50", image: "/placeholder.svg?height=300&width=400" },
      { name: "Earl Grey Tea", price: "$5", image: "/placeholder.svg?height=300&width=400" },
      { name: "Fruity Green Tea", price: "$5", image: "/placeholder.svg?height=300&width=400" },
      { name: "Fresh Mint Tea", price: "$4", image: "/placeholder.svg?height=300&width=400" },
    ],
  },
  sides: {
    title: "Sides",
    items: [
      { name: "Seasoned Fries", price: "$6", image: "/placeholder.svg?height=300&width=400" },
      { name: "Side Avo", price: "$4", image: "/placeholder.svg?height=300&width=400" },
      { name: "Smoked Salmon", price: "$8", image: "/placeholder.svg?height=300&width=400" },
      { name: "2 Local Market Eggs & Toast", price: "$10", image: "/placeholder.svg?height=300&width=400" },
      { name: "Bill-E's Bacon", price: "$8", image: "/placeholder.svg?height=300&width=400" },
      { name: "Turkey Bacon", price: "$6", image: "/placeholder.svg?height=300&width=400" },
      { name: "Seasoned Grilled Chicken", price: "$7", image: "/placeholder.svg?height=300&width=400" },
      { name: "Grilled Salmon", price: "$11", image: "/placeholder.svg?height=300&width=400" },
    ],
  },
}

export function Menu() {
  const [activeTab, setActiveTab] = useState("apps")

  return (
    <section id="menu" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Menu</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-mono leading-relaxed">
            Kindly notify our staff of any allergies or dietary needs before placing your order
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5 mb-12 bg-background">
            <TabsTrigger value="apps" className="font-mono">
              Apps & Eggs
            </TabsTrigger>
            <TabsTrigger value="salads" className="font-mono">
              Salads & Bowls
            </TabsTrigger>
            <TabsTrigger value="sandwiches" className="font-mono">
              Sandwiches
            </TabsTrigger>
            <TabsTrigger value="drinks" className="font-mono">
              Drinks
            </TabsTrigger>
            <TabsTrigger value="sides" className="font-mono">
              Sides
            </TabsTrigger>
          </TabsList>

          {Object.entries(menuCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-balance">{item.name}</h3>
                        <span className="text-primary font-bold font-mono ml-2 flex-shrink-0">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground font-mono leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 bg-accent/30 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Our Ingredients</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto font-mono text-sm">
            <p>
              <strong>Matcha:</strong> Organic, ceremonial grade, directly from Japan
            </p>
            <p>
              <strong>Eggs & Vegetables:</strong> Fresh, locally sourced from Menos Farm
            </p>
            <p>
              <strong>Bacon:</strong> Organic, all-natural, from Bill-E's Bacon
            </p>
            <p>
              <strong>Coffee:</strong> Our signature house blend from local LA roastery
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
