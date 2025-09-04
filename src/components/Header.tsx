import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Star, Menu, X, ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { name: 'Interior Painting', href: '#interior' },
    { name: 'Exterior Painting', href: '#exterior' },
    { name: 'Painting & Decorating', href: '#decorating' },
    { name: 'House Preparation & Repairs', href: '#preparation' },
    { name: 'Maintenance Painting', href: '#maintenance' }
  ];

  return (
    <header className="bg-background shadow-soft">
      {/* Top bar */}
      <div className="border-b border-border bg-gray-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center text-base font-medium">
          <div className="flex items-center gap-2 text-brand-gray">
            <Phone size={18} />
            <span>0410 949 130</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Google Logo */}
            <div className="flex items-center gap-1 bg-white rounded px-2 py-1 shadow-sm">
              <span className="text-blue-600 font-bold text-lg">G</span>
              <span className="text-red-500 font-bold text-lg">o</span>
              <span className="text-yellow-500 font-bold text-lg">o</span>
              <span className="text-blue-600 font-bold text-lg">g</span>
              <span className="text-green-500 font-bold text-lg">l</span>
              <span className="text-red-500 font-bold text-lg">e</span>
            </div>
            <Star size={18} className="text-yellow-500 fill-current" />
            <span className="font-semibold">4.8</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-6 bg-white shadow-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-red text-white p-3 rounded-lg shadow-md">
              <span className="font-bold text-2xl">F</span>
            </div>
            <div>
              <span className="font-bold text-2xl text-brand-gray">reshcoat</span>
              <span className="font-bold text-2xl text-yellow-500 ml-1">Painting</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* What We Do Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-brand-red transition-colors font-semibold text-base"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                What We Do
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-strong border border-border z-50"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <ul className="py-2">
                    {services.map((service) => (
                      <li key={service.name}>
                        <a
                          href={service.href}
                          className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary hover:text-brand-red transition-colors"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <a href="#about" className="hover:text-brand-red transition-colors font-semibold text-base">About Us</a>
            <a href="#areas" className="hover:text-brand-red transition-colors font-semibold text-base">Service Areas</a>
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
              {/* Mobile What We Do Section */}
              <div>
                <p className="font-semibold text-brand-gray mb-2">What We Do</p>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block text-base font-medium text-muted-foreground hover:text-brand-red transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#about" className="hover:text-brand-red transition-colors font-semibold text-base">About Us</a>
              <a href="#areas" className="hover:text-brand-red transition-colors font-semibold text-base">Service Areas</a>
              <Button variant="cta" className="w-full">Contact Us</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};