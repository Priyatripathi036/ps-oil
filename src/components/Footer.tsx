import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Factory } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Operations', href: '#operations' },
    { name: 'Distribution', href: '#distribution' }
  ];

  const products = [
    { name: 'Sunflower Oil', href: '#products' },
    { name: 'Palm Oil', href: '#products' },
    { name: 'Rice Oil', href: '#products' },
    { name: 'Mustard Oil', href: '#products' },
    { name: 'Soya Oil', href: '#products' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PS</span>
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">PS Oil & Foods</h3>
                <p className="text-gray-400">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading edible oil refinery with 300 tons daily capacity, serving premium quality oils across 6 states with 25+ years of industry expertise.
            </p>
            <div className="flex items-center space-x-3 mb-3">
              <Factory className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-300">300 Tons Daily Capacity</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#leadership" 
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a 
                  href="#investment" 
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Investment
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <a 
                    href={product.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-300">+91 9893708055</p>
                  <p className="text-gray-300">+91 9111708055</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-300">psoilnfoods@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p className="text-gray-300">Main Refinery: 30 km from Office HQ</p>
                  <p className="text-gray-300">Packaging Plant: Barampur, Odisha</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>&copy; 2025 PS Oil & Foods Pvt. Ltd. All rights reserved.</p>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>Founded by <span className="text-yellow-400 font-semibold">Schin Urmalia</span> | Industry Leader since 1999</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h5 className="text-yellow-400 font-semibold mb-2">Distribution Network</h5>
              <p className="text-gray-300 text-sm">6 States • 128+ Distributors • 37+ Hubs</p>
            </div>
            <div>
              <h5 className="text-yellow-400 font-semibold mb-2">Production Capacity</h5>
              <p className="text-gray-300 text-sm">300 Tons/Day • 90,000 Tons/Year</p>
            </div>
            <div>
              <h5 className="text-yellow-400 font-semibold mb-2">Quality Assurance</h5>
              <p className="text-gray-300 text-sm">International Standards • Premium Quality</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}