import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, TrendingUp, Star } from 'lucide-react';

export default function LeadershipSection() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "25+ Years Experience",
      description: "Core team with extensive experience from top Indian oil brands"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Industry Veterans",
      description: "Leadership team with proven track record in edible oil industry"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Growth Expertise",
      description: "Successfully scaled operations and built distribution networks"
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "Quality Leadership",
      description: "Commitment to excellence and international quality standards"
    }
  ];

  const expertise = [
    "Edible Oil Processing & Refining",
    "Supply Chain Management", 
    "Quality Control & Assurance",
    "Distribution Network Development",
    "Brand Building & Market Penetration",
    "Regulatory Compliance & Standards",
    "Technology Integration",
    "Business Strategy & Operations"
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by industry veterans with decades of experience in building successful edible oil businesses across India.
          </p>
        </div>

        {/* Founder Profile */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">SU</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Schin Urmalia</h3>
                  <p className="text-xl text-gray-600">Founder & Director</p>
                  <Badge className="bg-yellow-100 text-yellow-800 mt-2">Industry Leader</Badge>
                </div>
              </div>
              
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  <strong>Schin Urmalia</strong> brings over 25 years of extensive experience in the edible oil industry, having worked with top Indian oil brands and successfully built distribution networks across multiple states.
                </p>
                <p>
                  His visionary leadership and deep industry knowledge have been instrumental in establishing PS Oil & Foods as a trusted name in the edible oil refinery sector, with a focus on quality, innovation, and sustainable growth.
                </p>
                <p>
                  Under his guidance, the company has achieved remarkable milestones in production capacity, market penetration, and operational excellence.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
               src="/assets/face.JPG" 
                alt="Professional leadership" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Expertise */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Core Expertise</h3>
            <div className="grid gap-3">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Industry Impact</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Market Leadership</h4>
                <p className="text-gray-600">
                  Successfully established market presence across 6 states with comprehensive distribution network and strong brand recognition.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Operational Excellence</h4>
                <p className="text-gray-600">
                  Built and scaled refinery operations to 300 tons daily capacity with integrated processing facilities and quality control systems.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Strategic Vision</h4>
                <p className="text-gray-600">
                  Developed comprehensive business strategy for sustainable growth and market expansion with focus on innovation and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}