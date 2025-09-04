import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Star, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-soft">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>0410 949 130</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="font-semibold">4.8</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-red text-white p-2 rounded">
              <span className="font-bold text-xl">F</span>
            </div>
            <div>
              <span className="font-bold text-xl text-brand-gray">reshcoat</span>
              <span className="font-bold text-xl text-yellow-500 ml-1">Painting</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#services" className="hover:text-brand-red transition-colors">What We Do</a>
            <a href="#about" className="hover:text-brand-red transition-colors">About Us</a>
            <a href="#areas" className="hover:text-brand-red transition-colors">Service Areas</a>
            <Button variant="cta">Contact Us</Button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#services" className="hover:text-brand-red transition-colors">What We Do</a>
              <a href="#about" className="hover:text-brand-red transition-colors">About Us</a>
              <a href="#areas" className="hover:text-brand-red transition-colors">Service Areas</a>
              <Button variant="cta" className="w-full">Contact Us</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};