import { motion } from 'motion/react';
import GlassCard from '../components/ui/GlassCard';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Founder, EcoBloom',
    content: 'N11 SEO Agency transformed our organic visibility in less than 3 months. Our traffic grew by 200% and our ROAS has never been better.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=s1',
  },
  {
    name: 'David Thompson',
    role: 'CTO, TechFlow Solutions',
    content: 'The development team at N11 is world-class. They built our SaaS dashboard with such precision and speed. Highly recommended!',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=s2',
  },
  {
    name: 'Michael O’Brien',
    role: 'Marketing Lead, Apex Retail',
    content: 'Expert backlink strategies and technical SEO excellence. We dominated our niche key phrases within 6 months of partnering with them.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=s3',
  },
  {
    name: 'Emma Walters',
    role: 'Owner, Bloom Shopify Store',
    content: 'Our Shopify store is now a high-performance selling machine. The UI/UX is stunning and the conversion rate has doubled.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=s4',
  },
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-extrabold sm:text-7xl"
          >
            Client <span className="text-gradient">Success</span>
          </motion.h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Don't just take our word for it. See what our clients have to say about their experience working with N11 SEO Agency UK.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {testimonials.map((test, i) => (
            <GlassCard key={test.name} delay={i * 0.1} className="text-left relative overflow-hidden group">
              <Quote className="absolute -top-4 -right-4 h-24 w-24 text-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-lg italic leading-relaxed text-gray-300 mb-8 relative z-10">"{test.content}"</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={test.img} alt={test.name} className="h-14 w-14 rounded-full border-2 border-brand-blue/30" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-white flex items-center gap-2">
                    {test.name} <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                  </h4>
                  <p className="text-sm text-gray-500">{test.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Video Testimonial Teaser */}
        <section className="mt-32">
          <GlassCard className="max-w-4xl mx-auto py-16 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 border-brand-blue/30">
            <h2 className="font-display text-3xl font-bold mb-4">See the Transformation</h2>
            <p className="text-gray-400 mb-8">Watch our case studies to see the real impact of our strategies on business growth.</p>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" alt="Case Study" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/20">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="h-20 w-20 flex items-center justify-center rounded-full bg-white text-brand-purple shadow-xl"
                  >
                    <div className="ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-brand-purple border-b-[10px] border-b-transparent" />
                  </motion.button>
               </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
