import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Factory, Target, ArrowRight } from 'lucide-react';

export default function InvestmentSection() {
  const investmentBreakdown = [
    {
      category: "Refinery Infrastructure",
      amount: "₹30 Cr",
      percentage: 60,
      description: "Advanced processing equipment, technology upgrades, and facility expansion"
    },
    {
      category: "Working Capital",
      amount: "₹15 Cr", 
      percentage: 30,
      description: "Raw material procurement, inventory management, and operational expenses"
    },
    {
      category: "Marketing & Distribution",
      amount: "₹5 Cr",
      percentage: 10,
      description: "Brand development, market expansion, and distribution network strengthening"
    }
  ];

  const growthTargets = [
    {
      icon: <Factory className="w-6 h-6 text-blue-600" />,
      metric: "500 Tons",
      label: "Daily Capacity Target",
      timeline: "Within 18 months"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      metric: "150,000 Tons",
      label: "Annual Production",
      timeline: "Post expansion"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      metric: "10 States",
      label: "Market Presence",
      timeline: "Next 2 years"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-600" />,
      metric: "₹200+ Cr",
      label: "Revenue Target",
      timeline: "Annual projection"
    }
  ];

  const investmentHighlights = [
    "Proven business model with established market presence",
    "Experienced leadership team with 25+ years industry expertise",
    "Strong distribution network across 6 states",
    "Modern refinery infrastructure with expansion potential",
    "Growing demand for quality edible oils in target markets",
    "Strategic partnerships and supplier relationships"
  ];

  return (
    <section id="investment" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Investment & Growth Plan</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic investment opportunity to scale operations, expand market reach, and capitalize on the growing demand for premium edible oils.
          </p>
        </div>

        {/* Investment Overview */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-5xl font-bold text-white mb-2">₹50 Crores</h3>
            <p className="text-xl text-gray-300">Total Investment Requirement</p>
            <Badge className="bg-yellow-500 text-yellow-900 mt-3">Growth Capital</Badge>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {investmentBreakdown.map((item, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-white">{item.category}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{item.amount}</span>
                    <Badge variant="outline" className="border-yellow-500 text-yellow-400">
                      {item.percentage}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                  <div className="mt-3 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-500 to-amber-600 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Growth Targets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {growthTargets.map((target, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                  {target.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">{target.metric}</h4>
                <p className="text-gray-300 font-medium mb-2">{target.label}</p>
                <p className="text-gray-400 text-sm">{target.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Highlights */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Investment Highlights</h3>
            <div className="space-y-4">
              {investmentHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Expected Returns</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-6 rounded-lg border border-green-800">
                <h4 className="text-xl font-semibold text-white mb-2">Revenue Growth</h4>
                <p className="text-gray-300">
                  Projected annual revenue of ₹200+ crores post-expansion with increased production capacity and market penetration.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-6 rounded-lg border border-blue-800">
                <h4 className="text-xl font-semibold text-white mb-2">Market Expansion</h4>
                <p className="text-gray-300">
                  Expansion to 10 states with enhanced distribution network and increased market share in premium oil segment.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/50 to-violet-900/50 p-6 rounded-lg border border-purple-800">
                <h4 className="text-xl font-semibold text-white mb-2">Strategic Value</h4>
                <p className="text-gray-300">
                  Strong ROI potential with established operations, experienced team, and proven business model in growing market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Partner with Us?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join us in scaling India's next major edible oil brand. Contact our team to discuss investment opportunities and partnership possibilities.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white">
              Schedule Investment Discussion
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}