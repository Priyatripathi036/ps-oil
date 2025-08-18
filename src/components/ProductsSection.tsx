import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProductsSection() {
  const products = [
    {
      name: "Sunflower Oil",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3",
      description: "Premium quality sunflower oil rich in Vitamin E and low in saturated fats, perfect for healthy cooking.",
      features: ["Heart Healthy", "High Vitamin E", "Light Taste", "Versatile Cooking"]
    },
    {
      name: "Palm Oil",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3",
      description: "Refined palm oil ideal for deep frying and commercial food preparation with excellent stability.",
      features: ["High Stability", "Deep Frying", "Commercial Grade", "Cost Effective"]
    },
    {
      name: "Rice Oil",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3",
      description: "Premium rice bran oil with natural antioxidants and cholesterol-lowering properties.",
      features: ["Antioxidant Rich", "Cholesterol Free", "High Smoke Point", "Heart Friendly"]
    },
    {
      name: "Mustard Oil",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3",
      description: "Traditional mustard oil with authentic flavor, perfect for regional cuisines and health benefits.",
      features: ["Traditional Taste", "Antimicrobial", "Regional Favorite", "Therapeutic Properties"]
    },
    {
      name: "Soya Oil",
      image: "/images/SoyaOil.jpg",
      description: "Refined soybean oil rich in omega-3 fatty acids and essential nutrients for healthy living.",
      features: ["Omega-3 Rich", "Nutritious", "Mild Flavor", "All-Purpose Oil"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive range of high-quality edible oils processed with advanced technology and stringent quality control measures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Guarantee</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All our products undergo rigorous quality testing and are processed using state-of-the-art technology to ensure purity, freshness, and nutritional value. We maintain international quality standards throughout our production process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}