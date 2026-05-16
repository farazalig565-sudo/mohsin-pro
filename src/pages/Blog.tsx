import { motion } from 'motion/react';
import GlassCard from '../components/ui/GlassCard';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    title: 'Future of SEO: AI and Search Intent',
    excerpt: 'How AI models are changing the way search engines understand user intent and what it means for your rankings in 2026.',
    date: 'May 15, 2026',
    author: 'Alexander North',
    category: 'SEO Trends',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: '10 Reasons to Use React for Business Apps',
    excerpt: 'Why high-performance businesses are choosing React for their web and mobile application needs over traditional frameworks.',
    date: 'May 12, 2026',
    author: 'Sophia Chen',
    category: 'Development',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Mastering Backlink Acquisition',
    excerpt: 'A comprehensive guide to building a robust backlink profile that search engines trust and reward with higher authorities.',
    date: 'May 10, 2026',
    author: 'Elena Smith',
    category: 'Digital Strategy',
    img: 'https://images.unsplash.com/photo-1557838323-b756567216aa?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Shopify vs Custom Ecommerce',
    excerpt: 'Deciding which platform is right for your ecommerce brand? We break down the pros and cons of Shopify vs Custom builds.',
    date: 'May 05, 2026',
    author: 'Marcus Grant',
    category: 'Ecommerce',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-extrabold sm:text-7xl"
          >
            Insights & <span className="text-gradient">Ideas</span>
          </motion.h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Stay updated with the latest in SEO, web development, and digital strategies from our team of industry experts.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col gap-8 group"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-white/5 relative">
                <img src={post.img} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute top-6 left-6">
                   <span className="glass px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-blue">
                     {post.category}
                   </span>
                </div>
              </div>

              <div className="px-2">
                <div className="flex gap-6 mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                   <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-brand-blue" /> {post.date}</div>
                   <div className="flex items-center gap-2"><User className="h-4 w-4 text-brand-purple" /> {post.author}</div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">{post.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">{post.excerpt}</p>
                <button className="flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
                  Read Full Article <ArrowRight className="h-5 w-5 text-brand-blue" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Teaser */}
        <section className="mt-32">
          <GlassCard className="max-w-4xl mx-auto p-12 text-center border-brand-purple/20">
            <h2 className="font-display text-3xl font-bold mb-4">Subscribe to N11 Insights</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Get the latest digital marketing trends and technical growth hacks delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
               <input type="email" placeholder="Email Address" className="flex-grow rounded-2xl border border-white/10 bg-white/5 py-4 px-6 text-white outline-none focus:border-brand-purple transition-colors" />
               <button type="submit" className="h-14 px-10 rounded-2xl bg-brand-purple font-bold text-white hover:scale-105 active:scale-95 transition-all">Subscribe Now</button>
            </form>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
