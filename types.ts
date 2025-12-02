import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  leader?: {
    name: string;
    role: string;
    image?: string;
  };
}

export type PortfolioCategory = 'All' | 'Mac' | 'Windows' | 'Business Support';

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  description: string;
  highlight?: string;
}

export interface NavLink {
  name: string;
  to: string;
}