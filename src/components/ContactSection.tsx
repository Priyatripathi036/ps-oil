import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone Numbers",
      details: ["+91 9893708055", "+91 9111708055" , "+91 8109109111"],
      description: "Available during business hours"
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: "Email",
      details: ["psoilnfoods@gmail.com"],
      description: "For business inquiries and partnerships"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Location",
      details: ["Refinery: 30 km from Office HQ", "Packaging Plant: Barampur, Odisha"],
      description: "Strategic locations for operations"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "Contact us during these hours"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to partner with us or learn more about our products and services? Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="grid gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-gray-900 flex items-center">
                      <div className="w-10 h-10 mr-3 bg-gray-100 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 mb-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-900 font-medium">{detail}</p>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Why Choose PS Oil & Foods?</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <p className="text-gray-700">25+ years industry expertise</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-700">300 tons daily production capacity</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-700">Extensive 6-state distribution network</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="text-gray-700">Premium quality assurance standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <Input placeholder="Enter your company name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input placeholder="What is this regarding?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}