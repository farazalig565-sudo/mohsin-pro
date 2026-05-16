import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'glass-dark py-4 shadow-xl' : 'bg-transparent py-6'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple"
            >
              <Rocket className="h-6 w-6 text-white" />
            </motion.div>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              N11 <span className="text-brand-blue">SEO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-blue',
                  location.pathname === link.path ? 'text-brand-blue' : 'text-gray-300'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/923222488702"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition-transform hover:scale-105 active:scale-95"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/5 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-brand-dark/95 border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg font-medium transition-colors',
                    location.pathname === link.path ? 'text-brand-blue' : 'text-gray-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/923222488702"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-4 text-center font-bold text-white shadow-lg"
              >
                Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
