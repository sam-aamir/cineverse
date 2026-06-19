'use client';

import { useEffect, useState } from 'react';
import MovieCard from './movie-card';
import { getTrendingMovies, type Movie } from '@/services/movies';

export default function TrendingSection() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const movies = await getTrendingMovies(10);
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-white">Trending Now</h2>

        {loading ? (
          <div className="py-12 text-center">
            <div className="inline-flex h-8 w-8 animate-spin items-center justify-center rounded-full border-2 border-current border-x-transparent">
              <div className="h-2.5 w-2.5 rounded-full bg-current" />
            </div>
            <p className="mt-2 text-sm text-gray-400">Loading...</p>
          </div>
        ) : (
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {trendingMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={{
                  id: movie.id,
                  title: movie.title,
                  posterUrl: movie.posterUrl,
                  trailerUrl: movie.trailerUrl,
                  rating: movie.rating,
                  year: movie.releaseYear,
                }}
                className="w-[160px] flex-shrink-0 sm:w-[200px]"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
