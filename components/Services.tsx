import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Book, FileText, Home, Users, Headphones } from 'lucide-react';

const services = [
  {
    title: "Visa Application Support",
    description: "Expert guidance through the visa application process for Germany, Poland, and the Netherlands.",
    icon: FileText,
  },
  {
    title: "Course Selection",
    description: "Personalized assistance in choosing the right course and university based on your goals and qualifications.",
    icon: Book,
  },
  {
    title: "Travel Arrangements",
    description: "Help with booking flights and planning your journey to your chosen study destination.",
    icon: Plane,
  },
  {
    title: "Accommodation",
    description: "Support in finding suitable and affordable housing options near your university.",
    icon: Home,
  },
  {
    title: "Cultural Integration",
    description: "Programs and resources to help you adapt to European culture and make the most of your study abroad experience.",
    icon: Users,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for any queries or concerns during your stay in Europe.",
    icon: Headphones,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <service.icon className="w-6 h-6 mr-2 text-primary" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;