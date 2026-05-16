import { motion } from 'motion/react';
import GlassCard from '../components/ui/GlassCard';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Ecommerce Growth Suite',
    category: 'SEO & Web Development',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    stats: { traffic: '+340%', conversion: '+45%' },
    link: '#',
  },
  {
    title: 'Global SaaS Platform',
    category: 'App Development',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    stats: { users: '50k+', latency: '-120ms' },
    link: '#',
  },
  {
    title: 'Luxury Real Estate Portal',
    category: 'Custom Web Solution',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    stats: { leads: '2.5k/mo', visibility: 'Top 3' },
    link: '#',
  },
  {
    title: 'Fintech Mobile App',
    category: 'iOS/Android Development',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    stats: { rating: '4.9/5', security: 'Bank Grade' },
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-extrabold sm:text-7xl"
          >
            Digital <span className="text-gradient">Masterpieces</span>
          </motion.h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            A showcase of our recent projects where design meets performance. Each project is a testament to our commitment to excellence.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="overflow-hidden rounded-[2rem] bg-white/5">
                <div className="relative aspect-video">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                  <div className="absolute top-6 right-6 flex gap-2">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-colors hover:bg-brand-blue">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-colors hover:bg-brand-purple">
                      <Github className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">{project.category}</span>
                      <h3 className="mt-1 text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <div className="flex gap-6">
                      {Object.entries(project.stats).map(([k, v]) => (
                        <div key={k} className="text-center">
                          <div className="text-lg font-bold text-white">{v}</div>
                          <div className="text-[10px] uppercase tracking-tighter text-gray-500">{k}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
