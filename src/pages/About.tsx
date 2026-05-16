import { motion } from 'motion/react';
import { Target, Eye, Award, Sparkles, Users, History, TrendingUp, Cpu } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const skills = [
  { name: 'Technical SEO', level: 98 },
  { name: 'React/Next.js Dev', level: 95 },
  { name: 'App Development', level: 90 },
  { name: 'Backlink Strategy', level: 96 },
  { name: 'Digital Strategy', level: 94 },
];

const team = [
  { name: 'Alexander North', role: 'CEO & SEO Strategist', img: 'https://i.pravatar.cc/150?u=a1' },
  { name: 'Sophia Chen', role: 'Head of Web Development', img: 'https://i.pravatar.cc/150?u=a2' },
  { name: 'Marcus Grant', role: 'App Lead', img: 'https://i.pravatar.cc/150?u=a3' },
  { name: 'Elena Smith', role: 'Content Lead', img: 'https://i.pravatar.cc/150?u=a4' },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-extrabold sm:text-7xl"
          >
            Our Mission is <span className="text-gradient">Your Growth</span>
          </motion.h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            N11 SEO Agency UK was founded on the principle that digital visibility should be accessible, high-performing, and measurable. We don't just optimize websites; we build brands.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid gap-8 md:grid-cols-2">
          <GlassCard className="flex flex-col gap-6 border-brand-blue/20 bg-brand-blue/5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg">
              <History className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wide">Our Mission</h2>
            <p className="leading-relaxed text-gray-400">
              To empower UK businesses with cutting-edge SEO and development strategies that deliver exponential growth and sustainable digital dominance.
            </p>
          </GlassCard>
          <GlassCard className="flex flex-col gap-6 border-brand-purple/20 bg-brand-purple/5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple text-white shadow-lg">
              <Eye className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wide">Our Vision</h2>
            <p className="leading-relaxed text-gray-400">
              To be the most innovative digital agency globally, known for transforming simple ideas into industry-leading digital assets.
            </p>
          </GlassCard>
        </div>

        {/* Skills & Progress */}
        <section className="mt-32">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-bold text-white mb-8">Crafting Digital Excellence</h2>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm font-bold">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-brand-blue">{skill.level}%</span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-brand-blue to-brand-purple"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <GlassCard className="py-12 text-center" hoverEffect={false}>
                  <TrendingUp className="mx-auto mb-4 h-10 w-10 text-brand-blue" />
                  <div className="text-3xl font-bold">10X</div>
                  <div className="text-xs text-gray-500 uppercase tracking-tighter">Avg Growth</div>
                </GlassCard>
                <GlassCard className="py-12 text-center" hoverEffect={false}>
                  <Sparkles className="mx-auto mb-4 h-10 w-10 text-brand-purple" />
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-tighter">Apps Built</div>
                </GlassCard>
              </div>
              <div className="mt-12 space-y-4">
                <GlassCard className="py-12 text-center" hoverEffect={false}>
                  <Cpu className="mx-auto mb-4 h-10 w-10 text-brand-blue" />
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-tighter">Code Quality</div>
                </GlassCard>
                <GlassCard className="py-12 text-center" hoverEffect={false}>
                  <Award className="mx-auto mb-4 h-10 w-10 text-brand-purple" />
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-tighter">Industry Awards</div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-32">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-bold text-white">The Brains Behind the Success</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">Our multidisciplinary team of experts is dedicated to your brand's digital evolution.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -20, rotateY: 10, rotateX: 5, scale: 1.05 }}
                viewport={{ once: true }}
                style={{ transformStyle: 'preserve-3d' }}
                transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 300 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={member.img} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-dark px-6 py-8">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-brand-blue">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
