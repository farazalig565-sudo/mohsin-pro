import { motion } from 'motion/react';
import { Rocket, BarChart3, Globe, AppWindow, Link2, ShoppingBag, Layout, Mail, CheckCircle2 } from 'lucide-react';
import Hero3D from '../components/3d/Hero3D';
import GlassCard from '../components/ui/GlassCard';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const stats = [
  { label: 'Organic Traffic', value: '250%', suffix: '+' },
  { label: 'Client Retention', value: '98', suffix: '%' },
  { label: 'Successful Projects', value: '500', suffix: '+' },
  { label: 'Team Experts', value: '50', suffix: '+' },
];

const services = [
  {
    title: 'SEO Services',
    description: 'Improve Google rankings, increase organic traffic, and grow business visibility using advanced SEO strategies.',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Website Development',
    description: 'Build modern, responsive, fast, and high-converting websites with premium UI/UX.',
    icon: Layout,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'App Development',
    description: 'Create scalable Android, iOS, and web applications with modern technologies and smooth user experiences.',
    icon: AppWindow,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Off-Page SEO',
    description: 'Increase website authority with high-quality link building and strategic off-page optimization.',
    icon: Globe,
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Backlinks Building',
    description: 'Get powerful white-hat backlinks from trusted websites to improve domain authority and rankings.',
    icon: Link2,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Shopify Store Development',
    description: 'Design and develop premium Shopify stores optimized for sales, speed, and conversions.',
    icon: ShoppingBag,
    color: 'from-teal-500 to-cyan-500',
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center pt-20">
        <Hero3D />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/0 via-brand-dark/50 to-brand-dark" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
              #1 Digital Agency in UK
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ translateZ: 50, rotateX: -5 }}
              style={{ transformStyle: 'preserve-3d' }}
              transition={{ duration: 0.8 }}
              className="font-display mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl"
            >
              Rank Higher. <br />
              <span className="text-gradient">Grow Faster.</span> <br />
              Dominate Online.
            </motion.h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl">
              We help businesses grow with SEO, website development, app development, Shopify solutions, and powerful backlink strategies.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/923222488702"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-brand-purple px-10 font-bold transition-all hover:scale-105 sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple transition-opacity group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation <Rocket className="h-5 w-5" />
                </span>
              </a>
              <Link
                to="/services"
                className="glass flex h-14 w-full items-center justify-center rounded-full px-10 font-bold transition-all hover:bg-white/10 sm:w-auto"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}{stat.suffix}
                </div>
                <div className="mt-1 text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">Our Core Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Transforming your digital presence with cutting-edge technology and data-driven marketing strategies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <GlassCard key={service.title} delay={i * 0.1}>
                <div className={cn('mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg', service.color)}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{service.description}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:underline">
                  Learn More <Rocket className="h-4 w-4" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="bg-white/5 py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                We Build Digital <br />
                <span className="text-brand-blue">Success Stories</span>
              </h2>
              <p className="mt-6 text-lg text-gray-400">
                N11 SEO Agency UK helps businesses dominate online with innovative SEO and development solutions designed for long-term growth. Our approach is data-driven, creative, and result-oriented.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {['Innovative Strategies', 'Certified SEO Specialists', 'Custom Development Solutions'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-brand-blue" />
                    <span className="font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="mt-10 inline-block rounded-full bg-white/5 px-8 py-3 font-bold transition-all hover:bg-white/10">
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-brand-blue to-brand-purple px-8 py-20 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="font-display mb-6 text-4xl font-bold text-white sm:text-6xl">
                Ready to dominate <br className="hidden sm:block" /> the search results?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
                Get a free consultation today and find out how we can help your business grow faster with our powerful SEO and development solutions.
              </p>
              <a
                href="https://wa.me/923222488702"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-brand-purple shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Kickstart Your Growth <Rocket className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
