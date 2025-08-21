import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Truck, Building, Users } from 'lucide-react';

export default function DistributionSection() {
  const networkTypes = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Mother Hubs",
      count: "PAN INDIA",
      description: "Primary distribution centers managing regional supply chains and inventory."
    },
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "CFA Centers",
      count: "40+ Facilities", 
      description: "Carrying & Forwarding Agents ensuring efficient last-mile distribution."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: "Distributors",
      count: "560+ Partners",
      description: "Authorized distributors providing local market penetration and customer service."
    }
  ];

  return (
    <section id="distribution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Distribution Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Extensive distribution infrastructure with strategically located hubs, CFA centers, and authorized distributors ensuring market reach and customer satisfaction across India.
          </p>
        </div>

        {/* Network Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {networkTypes.map((type, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  {type.icon}
                </div>
                <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  {type.count}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Distribution Map Visualization */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Market Coverage</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Our strategic distribution network ensures efficient supply chain management and timely delivery across India, covering major population centers and emerging markets.
            </p>

            {/* India Map with Animated Dots */}
            <div className="relative w-full max-w-4xl mx-auto">
              <img
                src="/assets/india-map.png"
                alt="India Distribution Map"
                className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
              {/* Example pulsing dots */}
              <span className="absolute top-[30%] left-[40%] w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
              <span className="absolute top-[30%] left-[40%] w-4 h-4 bg-red-500 rounded-full"></span>

              <span className="absolute top-[45%] left-[55%] w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
              <span className="absolute top-[45%] left-[55%] w-4 h-4 bg-red-500 rounded-full"></span>

              <span className="absolute top-[60%] left-[35%] w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
              <span className="absolute top-[60%] left-[35%] w-4 h-4 bg-red-500 rounded-full"></span>
            </div>

            {/* Map Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">28 States</h4>
                <p className="text-gray-600">Market Presence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">84 Hubs</h4>
                <p className="text-gray-600">Distribution Centers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">560 Distributors</h4>
                <p className="text-gray-600">PAN India Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
