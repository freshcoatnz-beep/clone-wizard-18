import { Phone, Mail, MapPin, Star } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="font-bold text-lg text-white">Freshcoat Painting</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading Christchurch painters with over 30 years of experience delivering quality finishes for homes and businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/interior" className="hover:text-white transition-colors">Interior Painting</a></li>
              <li><a href="/exterior" className="hover:text-white transition-colors">Exterior Painting</a></li>
              <li><a href="/roof-painting" className="hover:text-white transition-colors">Roof Painting</a></li>
              <li><a href="/commercial" className="hover:text-white transition-colors">Commercial Painting</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/painters/riccarton" className="hover:text-white transition-colors">Riccarton</a></li>
              <li><a href="/painters/merivale" className="hover:text-white transition-colors">Merivale</a></li>
              <li><a href="/painters/fendalton" className="hover:text-white transition-colors">Fendalton</a></li>
              <li><a href="/painters/rolleston" className="hover:text-white transition-colors">Rolleston</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+6422036658" className="text-gray-300 hover:text-white transition-colors">022 0366586</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:michael@freshcoat.co.nz" className="text-gray-300 hover:text-white transition-colors">michael@freshcoat.co.nz</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-gray-300">Christchurch, New Zealand</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} />
                <a
                  href="https://share.google/wcP3T2HVz31q1HSLt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Find us on Google
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Freshcoat Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};