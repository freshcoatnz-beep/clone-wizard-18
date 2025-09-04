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
        <div className="container mx-auto px-4 py-3 flex justify-between items-center text-xl font-medium">
          <div className="flex items-center gap-3 text-brand-gray ml-4">
            <Phone size={24} />
            <span className="text-xl font-bold">022 0366586</span>
          </div>
          <a 
            href="https://g.page/r/CR4Ie-y0WfnAEBM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 mr-4 hover:opacity-90 transition-opacity cursor-pointer"
          >
            {/* Google G Icon */}
            <div className="flex items-center justify-center bg-white rounded-full w-12 h-12 shadow-sm hover:shadow-md transition-shadow">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <Star size={24} className="text-yellow-500 fill-current" />
            <span className="font-bold text-xl">5.0</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-500 fill-current" />
              ))}
            </div>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-6 bg-white shadow-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div>
              <span className="font-bold text-2xl text-brand-gray">Freshcoat Painting</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* What We Do Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 transition-colors font-semibold text-base text-black"
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