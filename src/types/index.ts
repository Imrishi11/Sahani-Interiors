export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  serviceType: string;
  propertyType: string;
  timeline?: string;
  message?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'interior' | 'exterior' | 'kitchen' | 'textures' | 'sofa' | 'furniture' | 'flooring';
  location: string;
  description: string;
  imageUrl: string;
  beforeImageUrl?: string;
  sqft?: string;
  duration: string;
  highlights: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  features: string[];
  materialsOrBrands: string[];
  imageUrl: string;
  recommendedFor: string;
}

