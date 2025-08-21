import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Zap, Shield } from 'lucide-react';

function AboutImageSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    '/assets/IMG.jpg',
    '/assets/oil3.mp4',
    '/assets/oil4.mp4',
    '/assets/oil8.mp4',
    '/assets/oil11.mp4',
    '/assets/oil6.jpg',
    '/assets/oil5.mp4',
    // '/assets/oil7.jpg',
    '/assets/oil9.mp4',
    '/assets/oil12.mp4',
    '/assets/oil1.jpg',
    '/assets/oil2.jpg',
    '/assets/oil15.mp4',
    '/assets/oil13.mp4',
    '/assets/oil4.mp4',
    '/assets/oil11.mp4',
    '/assets/oil12.mp4'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500); // Change slide every 2.5s
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`transition-opacity duration-500 ${
            index === currentImage ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
        >
          {/* ✅ Conditional rendering for videos vs images */}
          {image.endsWith('.mp4') || image.endsWith('.mov') ? (
            <video
              src={image}
              className="w-full h-96 object-cover rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={image}
              alt={`PS Oil Refinery Operations ${index + 1}`}
              className="w-full h-96 object-cover rounded-lg"
            />
          )}
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
      
      {/* Image/Video Counter */}
      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
        {currentImage + 1} / {images.length}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "Stringent quality control processes ensuring premium edible oils that meet international standards."
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Market Leadership",
      description: "Established presence across 6 states with strong distribution network and brand recognition."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Advanced Technology",
      description: "State-of-the-art refinery equipment and processing technology for efficient oil production."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Expert Team",
      description: "Core team with 25+ years experience from top Indian oil brands bringing proven expertise."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About PS Oil & Foods</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A premier edible oil refinery company committed to delivering high-quality oils with a focus on innovation, sustainability, and customer satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                "Founded under the leadership of Sachin Urmalia, PS Oil & Foods Pvt. Ltd. is envisioned to become a trusted name in the edible oil industry. We are building a modern refinery facility on a 4-acre site, designed to bring together advanced technology and traditional practices like Kachhi Ghani operations. 
              </p>
              <p>
                Our aim is not just scale — with a planned capacity of 300 tons of premium oils daily — but also quality, ensuring that every drop meets the highest standards of purity, taste, and nutrition. Through strategic partnerships, including expansion into Odisha, we are preparing to serve families and communities across eastern and central India with oils that inspire confidence and care.
              </p>
            </div>
          </div>
          
          {/* ✅ Updated Slideshow with video + image support */}
          <AboutImageSlideshow />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group relative border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.03] hover:border-yellow-500/60 transition-all duration-500 ease-out overflow-hidden rounded-xl bg-white"
            >
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-yellow-500/80 rounded-full transform -translate-x-1/2 transition-all duration-500 ease-out group-hover:w-2/3"></span>

              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-5 bg-yellow-50 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:text-yellow-600">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
