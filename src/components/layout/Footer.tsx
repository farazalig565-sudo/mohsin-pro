import { Link } from 'react-router-dom';
import { Rocket, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  agency: [
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
  ],
  services: [
    { name: 'SEO Services', path: '/services' },
    { name: 'Web Development', path: '/services' },
    { name: 'App Development', path: '/services' },
    { name: 'Off-Page SEO', path: '/services' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61576436316447' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/seoranker11/' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-brand-dark/50 pt-16 pb-8 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                N11 <span className="text-brand-blue">SEO</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Transforming digital landscapes for UK businesses through innovative SEO strategies and high-performance development solutions.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-brand-blue hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Agency Links */}
          <div>
            <h3 className="mb-6 font-display text-sm font-bold uppercase tracking-wider text-white">Agency</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.agency.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-gray-400 transition-colors hover:text-brand-blue">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-6 font-display text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-gray-400 transition-colors hover:text-brand-blue">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-brand-blue" />
                <span className="text-sm text-gray-400">London, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-blue" />
                <span className="text-sm text-gray-400">03222488702</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-blue" />
                <span className="text-sm text-gray-400">farazalig565@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} N11 SEO Agency UK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
