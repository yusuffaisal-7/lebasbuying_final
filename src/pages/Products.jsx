import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shirt, Scissors, Package, Palette, ChevronDown, ChevronUp } from 'lucide-react';
import MagicCard from '../components/ui/MagicCard';

const Products = () => {
  const [showAllCriteria, setShowAllCriteria] = useState(false);
  
  const categories = [
    { key: 'knit', title: 'Knit', image: 'https://images.pexels.com/photos/6311577/pexels-photo-6311577.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: <Shirt className="w-8 h-8" /> },
    { key: 'woven', title: 'Woven', image: 'https://images.pexels.com/photos/3738085/pexels-photo-3738085.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: <Scissors className="w-8 h-8" /> },
    { key: 'sweater', title: 'Sweater', image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: <Package className="w-8 h-8" /> },
    { key: 'prospectus', title: 'Prospectus', image: 'https://images.pexels.com/photos/6311667/pexels-photo-6311667.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: <Palette className="w-8 h-8" /> },
  ];

  const criteriaData = [
    {
      title: "Materials & Fabrics",
      content: [
        "Cotton (Combed, Ringspun, Organic), Cotton-Spandex",
        "Polyester, Recycled Polyester (rPET), Performance Blends",
        "Denim, Twill, Poplin, Flannel for woven programs",
        "Wool, Acrylic, Cashmere blends for sweaters"
      ],
      popular: true
    },
    {
      title: "Sizing & Grading",
      content: [
        "Standard size sets: XS–XXXL (adult), 2–12 (kids)",
        "Custom grading rules per region (US/EU/UK/ASIA)",
        "Tolerance: ±0.5–1.0 cm by garment area"
      ],
      popular: true
    },
    {
      title: "MOQ & Capacity",
      content: [
        "Sampling: 3–5 pcs per style",
        "Bulk: 300–1,000 pcs per color/style (flexible by program)",
        "Monthly capacity available on request by category"
      ],
      popular: true
    },
    {
      title: "Lead Times",
      content: [
        "Development samples: 7–14 days",
        "Pre‑production (PP) sample: 10–15 days",
        "Bulk production: 45–75 days post PP approval"
      ],
      popular: false
    },
    {
      title: "Quality & Testing",
      content: [
        "AQL 2.5/4.0 inline and final inspections",
        "Color fastness, shrinkage, pilling, seam strength tests",
        "Needle policy, metal detection (as required)"
      ],
      popular: false
    },
    {
      title: "Compliance & Sustainability",
      content: [
        "OEKO‑TEX®/GOTS/GRS capable supply chain",
        "Social audits: BSCI/SEDEX/WRAP (site‑wise availability)",
        "Restricted Substances List (RSL) adherence"
      ],
      popular: false
    },
    {
      title: "Customization",
      content: [
        "Printing: screen, digital DTG, sublimation, puff, discharge",
        "Embroidery: flat, 3D, chenille, appliqué",
        "Trims: woven labels, heat transfers, zippers, hardware"
      ],
      popular: false
    },
    {
      title: "Packaging",
      content: [
        "Poly‑bag or eco paper options, size stickers, barcodes",
        "Folding boards, hangtags, care and fiber labels",
        "Custom cartons with brand and shipping marks"
      ],
      popular: false
    },
    {
      title: "Sampling & Approvals",
      content: [
        "Fit, size set, color lab dips, fabric hand‑feel swatches",
        "Pre‑production sample for sign‑off before bulk",
        "Gold seal sample retained for reference"
      ],
      popular: false
    },
    {
      title: "Payments & Shipping",
      content: [
        "Terms: TT/LC (discussed per order volume)",
        "Incoterms: FOB/CIF/DDP options",
        "Logistics: sea/air/courier with full tracking"
      ],
      popular: false
    }
  ];

  const displayedCriteria = showAllCriteria ? criteriaData : criteriaData.filter(item => item.popular);

  return (
    <section id="products" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-charcoal mb-3">
            Our <span className="text-deep-teal">Products</span>
          </h2>
          <p className="text-base md:text-xl text-charcoal/80 font-dm-sans max-w-3xl mx-auto leading-relaxed">
            Explore categories. Click a card to view a curated gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((c) => (
            <MagicCard key={c.key} className="rounded-3xl">
              <Link to={`/products/${c.key}`} className="group block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-warm-beige">
                <div className="relative h-60 md:h-72">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-deep-teal text-white rounded-2xl flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <h3 className="text-white text-2xl font-space-grotesk font-bold drop-shadow">{c.title}</h3>
                  </div>
                </div>
              </Link>
            </MagicCard>
          ))}
        </div>

        {/* Criteria & Specifications */}
        <div className="mt-12 md:mt-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-space-grotesk font-bold text-charcoal">
              Criteria <span className="text-deep-teal">& Specifications</span>
            </h3>
            <p className="mt-3 text-charcoal/80 font-dm-sans max-w-3xl mx-auto">
              Clear, production-ready standards we follow for consistent quality and reliable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedCriteria.map((criteria, index) => (
              <div key={index} className="rounded-2xl border border-deep-teal/20 bg-warm-beige p-6">
                <h4 className="text-deep-teal font-space-grotesk font-bold text-xl mb-2">{criteria.title}</h4>
                <ul className="list-disc pl-5 text-charcoal/80 font-dm-sans space-y-1">
                  {criteria.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllCriteria(!showAllCriteria)}
              className="inline-flex items-center gap-2 bg-deep-teal text-white px-8 py-4 rounded-xl font-semibold font-space-grotesk text-lg hover:bg-deep-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAllCriteria ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  View All Specifications
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;