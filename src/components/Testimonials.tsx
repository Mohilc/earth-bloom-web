import React from "react";
import { Star, Shield, BadgeCheck, CertificateIcon } from "lucide-react";

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
    icon: CertificateIcon,
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
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-eco-green/10 text-eco-green font-medium text-sm mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Community Says
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Join thousands of eco-conscious individuals who have made the switch to sustainable living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-eco-beige p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                  onError={(e) => {
                    const imgElement = e.currentTarget as HTMLImageElement;
                    imgElement.src = "https://via.placeholder.com/48";
                  }}
                />
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-eco-green mb-4">
              Trusted Certifications
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to sustainability is validated by world-renowned certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 bg-eco-beige/50 rounded-xl hover:shadow-md transition-all group"
              >
                <div className="mb-4 text-eco-green/80 group-hover:text-eco-green transition-colors">
                  <cert.icon size={48} strokeWidth={1.5} />
                </div>
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="h-20 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all"
                  onError={(e) => {
                    const imgElement = e.currentTarget as HTMLImageElement;
                    imgElement.src = "https://via.placeholder.com/150?text=" + encodeURIComponent(cert.name);
                  }}
                />
                <h4 className="font-semibold text-eco-green mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
