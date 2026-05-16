import { motion } from 'motion/react';
import { BarChart3, Layout, AppWindow, Globe, Link2, ShoppingBag, PenTool, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

// Re-import CN as it might be needed if I didn't include it in this block
import { cn } from '../lib/utils';

const serviceDetails = [
  {
    title: 'SEO Services',
    description: 'Improve Google rankings, increase organic traffic, and grow business visibility using advanced SEO strategies. We perform deep keyword research, technical audits, and content optimization.',
    icon: BarChart3,
    features: ['Keyword Research', 'Technical Audits', 'On-Page SEO', 'Competitor Analysis'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Website Development',
    description: 'Build modern, responsive, fast, and high-converting websites with premium UI/UX. We use the latest technologies like React and Next.js to ensure speed and performance.',
    icon: Layout,
    features: ['Custom Design', 'Responsive Layouts', 'Speed Optimization', 'Secure Hosting'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'App Development',
    description: 'Create scalable Android, iOS, and web applications with modern technologies and smooth user experiences. We focus on scalability and intuitive design.',
    icon: AppWindow,
    features: ['Cross-Platform Apps', 'UI/UX Design', 'API Integration', 'Cloud Deployment'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Off-Page SEO',
    description: 'Increase website authority with high-quality link building and strategic off-page optimization. We help you build trust with search engines.',
    icon: Globe,
    features: ['Brand Mentions', 'Social Signals', 'Forum Links', 'PR Strategy'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Backlinks Building',
    description: 'Get powerful white-hat backlinks from trusted websites to improve domain authority and rankings. Our link building is safe and effective.',
    icon: Link2,
    features: ['High DA Links', 'Contextual Backlinks', 'Manual Outreach', 'Dofollow Strategy'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Guest Posting',
    description: 'Publish high-quality guest posts on authority websites to improve SEO and brand visibility. We reach out to top blogs in your niche.',
    icon: PenTool,
    features: ['Niche Relevance', 'Quality Content', 'Vetted Sites', 'Permanent Links'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Shopify Store Development',
    description: 'Design and develop premium Shopify stores optimized for sales, speed, and conversions. Start selling with a store built for revenue.',
    icon: ShoppingBag,
    features: ['Theme Customization', 'App Setup', 'Conversion Optimization', 'Product Strategy'],
    color: 'from-teal-500 to-cyan-500',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-extrabold sm:text-7xl"
          >
            Digital <span className="text-gradient">Solutions</span>
          </motion.h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            We provide a comprehensive suite of digital marketing and development services designed to help your business scale in the digital age.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {serviceDetails.map((service, i) => (
            <GlassCard
              key={service.title}
              delay={i * 0.1}
              className="flex flex-col h-full items-start"
            >
              <div className={cn('mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-xl', service.color)}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white">{service.title}</h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">{service.description}</p>
              
              <div className="mt-auto grid grid-cols-2 gap-4 w-full border-t border-white/5 pt-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                    <span className="text-sm font-medium text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

