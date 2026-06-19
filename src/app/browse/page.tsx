'use client';

import { useState, useEffect } from 'react';
import MovieCard from '@/components/ui/movie-card';
import { getMovies } from '@/services/movies';
import { Search } from 'lucide-react';

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const filters: any = {};
        if (searchTerm) {
          filters.searchTerm = searchTerm;
        }
        
        const { movies: fetchedMovies } = await getMovies(filters, 20);
        setMovies(fetchedMovies);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Browse Movies</h1>
          <p className="mt-2 text-sm text-gray-400">
            Discover thousands of movies to watch
          </p>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search movies..."
              className="block w-full rounded-md border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {error && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500 text-red-400 rounded">
            {error}
          </div>
        )}
        
        {loading && movies.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center h-8 w-8 border-2 border-current border-x-transparent rounded-full animate-spin">
              <div className="h-2.5 w-2.5 bg-current rounded-full" />
            </div>
            <p className="mt-2 text-sm text-gray-400">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400">No movies found</p>
              </div>
            ) : (
              movies.map((movie) => (
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
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
