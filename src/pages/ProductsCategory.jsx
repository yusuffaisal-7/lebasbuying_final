import React, { useMemo } from 'react';
import MagicCard from '../components/ui/MagicCard';
import { useParams } from 'react-router-dom';

const CATEGORY_META = {
  knit: {
    title: 'Knit',
    description: 'Comfort-first knitwear including tees, polos, dresses and kidswear.',
    images: [
      'https://images.pexels.com/photos/10026491/pexels-photo-10026491.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6311671/pexels-photo-6311671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6311670/pexels-photo-6311670.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6311673/pexels-photo-6311673.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  woven: {
    title: 'Woven',
    description: 'Tailored shirts, trousers, denim and outerwear with precise construction.',
    images: [
      'https://images.pexels.com/photos/3738085/pexels-photo-3738085.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4814075/pexels-photo-4814075.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  sweater: {
    title: 'Sweater',
    description: 'Cardigans, pullovers and knit sets crafted with warmth and style.',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7679705/pexels-photo-7679705.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  prospectus: {
    title: 'Prospectus',
    description: 'Lookbooks and concept lines showcasing seasonal design directions.',
    images: [
      'https://images.pexels.com/photos/6311667/pexels-photo-6311667.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6311672/pexels-photo-6311672.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6311669/pexels-photo-6311669.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6311668/pexels-photo-6311668.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  }
};

export default function ProductsCategory() {
  const { category } = useParams();
  const data = useMemo(() => CATEGORY_META[category] || CATEGORY_META.knit, [category]);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-space-grotesk font-bold text-charcoal">
            {data.title} <span className="text-deep-teal">Collection</span>
          </h1>
          <p className="mt-4 text-charcoal/80 font-dm-sans max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.images.map((src, i) => (
            <MagicCard key={i} className="rounded-3xl">
              <div className="group overflow-hidden rounded-3xl shadow-lg bg-warm-beige">
                <div className="relative h-72">
                  <img src={src} alt={data.title + ' ' + (i + 1)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}


