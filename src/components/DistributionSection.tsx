import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Truck, Building, Users } from 'lucide-react';

export default function DistributionSection() {
  const states = [
    { name: "Odisha", hubs: 8, distributors: 25, status: "Primary Market" },
    { name: "Jharkhand", hubs: 5, distributors: 18, status: "Growing Market" },
    { name: "Chhattisgarh", hubs: 4, distributors: 15, status: "Established" },
    { name: "Bihar", hubs: 6, distributors: 22, status: "Key Market" },
    { name: "West Bengal", hubs: 7, distributors: 28, status: "Strategic Market" },
    { name: "Madhya Pradesh", hubs: 5, distributors: 20, status: "Expanding" }
  ];

  const networkTypes = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Mother Hubs",
      count: "12 Strategic Locations",
      description: "Primary distribution centers managing regional supply chains and inventory."
    },
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "CFA Centers",
      count: "25+ Facilities", 
      description: "Carrying & Forwarding Agents ensuring efficient last-mile distribution."
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: "Distributors",
      count: "128+ Partners",
      description: "Authorized distributors providing local market penetration and customer service."
    }
  ];

  return (
    <section id="distribution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Distribution Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Extensive distribution infrastructure spanning 6 states with strategically located hubs, CFA centers, and authorized distributors ensuring market reach and customer satisfaction.
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

        {/* State-wise Distribution */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">State-wise Presence</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {states.map((state, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-900 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                      {state.name}
                    </CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`${
                        state.status === 'Primary Market' ? 'border-green-500 text-green-700' :
                        state.status === 'Key Market' ? 'border-blue-500 text-blue-700' :
                        state.status === 'Strategic Market' ? 'border-purple-500 text-purple-700' :
                        'border-yellow-500 text-yellow-700'
                      }`}
                    >
                      {state.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{state.hubs}</p>
                      <p className="text-sm text-gray-600">Distribution Hubs</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{state.distributors}</p>
                      <p className="text-sm text-gray-600">Distributors</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Distribution Map Visualization */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Market Coverage</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Our strategic distribution network ensures efficient supply chain management and timely delivery across eastern and central India, covering major population centers and emerging markets.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">6 States</h4>
                <p className="text-gray-600">Market Presence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">37+ Hubs</h4>
                <p className="text-gray-600">Distribution Centers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">128+ Partners</h4>
                <p className="text-gray-600">Authorized Distributors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}