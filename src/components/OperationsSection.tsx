import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Factory, Package, Cog, MapPin } from 'lucide-react';

export default function OperationsSection() {
  const facilities = [
    {
      icon: <Factory className="w-8 h-8 text-blue-600" />,
      title: "Main Refinery",
      location: "30 km from Office HQ",
      capacity: "300 tons/day",
      area: "4-acre facility",
      description: "State-of-the-art refinery with advanced processing equipment and quality control systems."
    },
    {
      icon: <Cog className="w-8 h-8 text-green-600" />,
      title: "Solvent Plant",
      location: "Main Refinery Complex",
      capacity: "Integrated processing",
      area: "Specialized unit",
      description: "Advanced solvent extraction technology for maximum oil yield and purity."
    },
    {
      icon: <Package className="w-8 h-8 text-yellow-600" />,
      title: "Packaging Plant",
      location: "On-site + Barampur, Odisha",
      capacity: "100 tons additional",
      area: "Strategic partnership",
      description: "Modern packaging facilities ensuring product freshness and brand integrity."
    },
    {
      icon: <MapPin className="w-8 h-8 text-purple-600" />,
      title: "Kachhi Ghani Plant",
      location: "Main Refinery Complex",
      capacity: "Traditional processing",
      area: "Heritage methods",
      description: "Traditional cold-pressed oil extraction preserving natural nutrients and flavor."
    }
  ];

  const productionStats = [
    { label: "Daily Capacity", value: 300, unit: "Tons", progress: 100 },
    { label: "Annual Production", value: 109500, unit: "Tons", progress: 100 },
    { label: "Processing Efficiency", value: 98, unit: "%", progress: 98 },
    { label: "Quality Standards", value: 100, unit: "%", progress: 100 }
  ];

  return (
    <section id="operations" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Refinery & Operations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced infrastructure and cutting-edge technology powering our production capabilities across multiple specialized facilities.
          </p>
        </div>

        {/* Production Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productionStats.map((stat, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}
                  <span className="text-lg text-gray-400">{stat.unit}</span>
                </h3>
                <p className="text-gray-300 mb-3">{stat.label}</p>
                <Progress value={stat.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    {facility.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">{facility.title}</CardTitle>
                    <p className="text-gray-400 text-sm">{facility.location}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">Capacity</p>
                    <p className="text-white font-semibold">{facility.capacity}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Area/Type</p>
                    <p className="text-white font-semibold">{facility.area}</p>
                  </div>
                </div>
                <p className="text-gray-300">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infrastructure Highlight */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Strategic Infrastructure</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <p className="text-gray-300">Main refinery on 4-acre facility with integrated processing units</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-300">Strategic partnership with 100-ton packaging plant in Barampur, Odisha</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-300">Advanced quality control systems ensuring consistent product standards</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="text-gray-300">Integrated logistics network for efficient distribution management</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3" 
                alt="Oil refinery facility" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}