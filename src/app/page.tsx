'use client';

import { motion } from 'framer-motion';
import HeroBanner from '@/components/ui/hero-banner';
import TrendingSection from '@/components/ui/trending-section';
import CategoriesSection from '@/components/ui/categories-section';
import CTASection from '@/components/ui/cta-section';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroBanner />
        <TrendingSection />
        <CategoriesSection />
        <CTASection />
      </motion.div>
    </div>
  );
}
