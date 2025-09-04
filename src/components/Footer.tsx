import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-red text-white p-2 rounded">
                <span className="font-bold text-lg">F</span>
              </div>
              <div>
                <span className="font-bold text-lg">reshcoat</span>
                <span className="font-bold text-lg text-yellow-500 ml-1">Painting</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading Sydney painters with over 20 years of experience delivering quality finishes for homes and businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Commercial Painting</li>
              <li>Painting & Decorating</li>
              <li>Maintenance Services</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Hills District</li>
              <li>North Shore</li>
              <li>Inner West</li>
              <li>Western Sydney</li>
              <li>City of Sydney</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-gray-300">0410 949 130</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-gray-300">info@freshcoatpainting.com.au</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-gray-300">Sydney, NSW</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Freshcoat Painting Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};