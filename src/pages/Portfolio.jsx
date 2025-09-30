import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Premium Business Suits Collection",
      category: "Corporate Wear",
      date: "2024",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "High-end business suits for a Fortune 500 company, featuring premium wool fabrics and custom tailoring."
    },
    {
      title: "Sustainable Fashion Line",
      category: "Eco-Friendly",
      date: "2024",
      image: "https://images.pexels.com/photos/7876328/pexels-photo-7876328.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Environmentally conscious clothing line using organic cotton and recycled materials."
    },
    {
      title: "Luxury Evening Wear",
      category: "Formal Wear",
      date: "2023",
      image: "https://images.pexels.com/photos/7876354/pexels-photo-7876354.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Elegant evening gowns and formal wear for high-end boutique clients."
    },
    {
      title: "Athletic Performance Wear",
      category: "Sportswear",
      date: "2023",
      image: "https://images.pexels.com/photos/7876174/pexels-photo-7876174.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Technical sportswear with moisture-wicking fabrics and ergonomic design."
    },
    {
      title: "Children's School Uniforms",
      category: "Uniforms",
      date: "2023",
      image: "https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Durable and comfortable school uniforms for a major educational institution."
    },
    {
      title: "Healthcare Professional Scrubs",
      category: "Medical Wear",
      date: "2023",
      image: "https://images.pexels.com/photos/7876365/pexels-photo-7876365.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Antimicrobial medical scrubs designed for comfort and functionality."
    }
  ];

  const categories = ["All", "Corporate Wear", "Eco-Friendly", "Formal Wear", "Sportswear", "Uniforms", "Medical Wear"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-deep-teal to-mint-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-4 md:mb-6">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-dm-sans max-w-3xl mx-auto leading-relaxed px-2">
            Explore our diverse range of garment manufacturing projects, showcasing quality craftsmanship 
            and innovative solutions across various industries.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-12 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold font-dm-sans transition-all duration-300 text-sm md:text-base ${
                  selectedCategory === category
                    ? 'bg-deep-teal text-white shadow-lg'
                    : 'bg-white text-charcoal hover:bg-mint-green hover:text-deep-teal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-mint-green rounded-full flex items-center justify-center hover:bg-mint-green/90 transition-colors duration-300">
                      <ExternalLink className="w-5 h-5 text-deep-teal" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 md:px-3 bg-mint-green/20 text-deep-teal rounded-full text-xs md:text-sm font-semibold font-dm-sans">
                      <Tag className="w-3 h-3" />
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-charcoal/60 text-xs md:text-sm font-dm-sans">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold font-space-grotesk text-charcoal mb-2 md:mb-3 group-hover:text-deep-teal transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-charcoal/70 font-dm-sans leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-deep-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk mb-4 md:mb-6">
              Portfolio Highlights
            </h2>
            <p className="text-base md:text-xl text-white/90 font-dm-sans px-2">
              Numbers that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-space-grotesk text-mint-green mb-2">500+</div>
              <div className="text-white/80 font-dm-sans">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-space-grotesk text-mint-green mb-2">50+</div>
              <div className="text-white/80 font-dm-sans">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-space-grotesk text-mint-green mb-2">15+</div>
              <div className="text-white/80 font-dm-sans">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-space-grotesk text-mint-green mb-2">99%</div>
              <div className="text-white/80 font-dm-sans">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;