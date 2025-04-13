
import React from "react";
import { Star, Shield, BadgeCheck, Award, Check } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Environmental Activist",
    quote:
      "Finally, a company that understands sustainability isn't just a buzzword. Their products have transformed how I think about everyday essentials.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Design Enthusiast",
    quote:
      "The perfect blend of functionality and eco-conscious design. I love that I don't have to sacrifice aesthetics for sustainability.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    title: "Conscious Consumer",
    quote:
      "The quality exceeds my expectations. It's refreshing to find products that are both beautiful and truly sustainable.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
  },
];

const certifications = [
  {
    name: "Climate Neutral",
    logo: "https://via.placeholder.com/150?text=Climate+Neutral",
    icon: Shield,
    description: "Carbon Neutrality Certified"
  },
  {
    name: "Cradle to Cradle",
    logo: "https://via.placeholder.com/150?text=Cradle+to+Cradle",
    icon: BadgeCheck,
    description: "Circular Economy Standard"
  },
  {
    name: "FSC Certified",
    logo: "https://via.placeholder.com/150?text=FSC+Certified",
    icon: Award,
    description: "Responsible Forest Management"
  },
  {
    name: "1% For The Planet",
    logo: "https://via.placeholder.com/150?text=1%+For+The+Planet",
    icon: Star,
    description: "Environmental Giving Commitment"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-leaf-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90"></div>
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 slide-up">
          <div className="inline-block px-4 py-1 rounded-full bg-eco-green/10 text-eco-green font-medium text-sm mb-6">
            What People Say
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Join Our Community of <span className="text-eco-green">Eco-Enthusiasts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Hear from people who have made the switch to sustainable living and discover 
            how our products have made a difference in their everyday lives.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-12 left-4 w-20 h-20 rounded-full bg-eco-green opacity-5 animate-pulse"></div>
        <div className="absolute bottom-24 right-8 w-32 h-32 rounded-full bg-eco-sand opacity-10 animate-pulse"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-up-delay-1">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-eco-beige/50 group"
            >
              <div className="flex items-center space-x-1 text-yellow-500 mb-6 group-hover:scale-105 transition-transform">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    strokeWidth={1.5}
                    className="transition-all duration-300"
                  />
                ))}
              </div>

              <p className="text-foreground font-medium mb-8 text-lg italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center mt-auto">
                <div className="relative mr-5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full object-cover border-2 border-eco-green/20 group-hover:border-eco-green transition-colors"
                    onError={(e) => {
                      const imgElement = e.currentTarget as HTMLImageElement;
                      imgElement.src = "https://via.placeholder.com/64?text=User";
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-eco-green text-white rounded-full p-1 shadow-md">
                    <Check size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-eco-green">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 relative slide-up-delay-2">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-eco-green-dark mb-4">
              Our Sustainability Certifications
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to environmental responsibility is validated by 
              these world-renowned sustainability certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-2xl border border-eco-beige hover:border-eco-green/30 transition-all group relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-eco-green/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="mb-5 p-4 rounded-full bg-eco-green/10 text-eco-green group-hover:bg-eco-green/20 transition-colors">
                    <cert.icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <div className="h-20 mb-5 flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="max-h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        const imgElement = e.currentTarget as HTMLImageElement;
                        imgElement.src = "https://via.placeholder.com/150?text=" + encodeURIComponent(cert.name);
                      }}
                    />
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-3 group-hover:text-eco-green transition-colors">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground italic">
              We're constantly working to improve our environmental impact and add more certifications to our portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
