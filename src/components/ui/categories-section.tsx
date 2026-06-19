'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CategoriesSection() {
  const categories = [
    { id: '1', name: 'Action', icon: '💥' },
    { id: '2', name: 'Comedy', icon: '😂' },
    { id: '3', name: 'Drama', icon: '🎭' },
    { id: '4', name: 'Horror', icon: '👻' },
    { id: '5', name: 'Sci-Fi', icon: '🚀' },
    { id: '6', name: 'Romance', icon: '💖' },
    { id: '7', name: 'Documentary', icon: '📽️' },
    { id: '8', name: 'Animation', icon: '🎨' },
  ];

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const router = useRouter();

  const handleCategoryClick = (categoryId: string, categoryName: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
    if (categoryId) {
      router.push(`/browse?genre=${encodeURIComponent(categoryName)}`);
    } else {
      router.push('/browse');
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-white">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id, category.name)}
                className={`bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/70 transition-colors rounded-lg p-6 text-center cursor-pointer ${isActive ? 'border-2 border-pink-500' : ''}`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className={`font-semibold text-white ${isActive ? 'text-pink-500' : ''}`}>{category.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
