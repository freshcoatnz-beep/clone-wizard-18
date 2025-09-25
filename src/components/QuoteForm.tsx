import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

interface QuoteFormProps {
  children: React.ReactNode;
}

export const QuoteForm = ({ children }: QuoteFormProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Quote form submitted:', formData);
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 24 hours with your free quote.",
    });
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: '',
      message: ''
    });
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Get Your FREE Quote</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="address">Property Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Enter property address"
              />
            </div>
            
            <div>
              <Label htmlFor="serviceType">Service Type</Label>
              <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interior">Interior Painting</SelectItem>
                  <SelectItem value="exterior">Exterior Painting</SelectItem>
                  <SelectItem value="roof">Roof Painting</SelectItem>
                  <SelectItem value="commercial">Commercial Painting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="message">Additional Details</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us about your project..."
                rows={3}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
              Send Quote Request
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
          
          <div className="text-center text-sm text-muted-foreground pt-2">
            <p>Or contact us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>022 0366586</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>michael@freshcoat.co.nz</span>
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};