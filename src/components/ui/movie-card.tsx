'use client';

import Link from 'next/link';
import { PlayCircle, Heart, Plus, Star } from 'lucide-react';
import { useState } from 'react';
import TrailerModal from './trailer-modal';

interface MovieCardProps {
  movie: {
    id: string;
    title: string;
    posterUrl: string;
    trailerUrl: string;
    rating?: number;
    year?: number;
  };
  className?: string;
}

export default function MovieCard({ movie, className }: MovieCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  return (
    <div className={`group relative overflow-hidden rounded-lg bg-gray-900 ${className ?? ''}`}>
      <Link href={`/movie/${movie.id}`} className="block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="aspect-[2/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </Link>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          onClick={() => setIsTrailerOpen(true)}
          aria-label={`Play ${movie.title} trailer`}
          className="hover:scale-110 transition-transform"
        >
          <PlayCircle className="h-14 w-14 text-white/90" />
        </button>
      </div>

      <div className="absolute right-2 top-2 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button
          onClick={() => setIsFavorited((v) => !v)}
          aria-label="Add to favorites"
          className="rounded-full bg-black/50 p-2 backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-pink-500 text-pink-500' : 'text-white'}`} />
        </button>
        <button
          aria-label="Add to list"
          className="rounded-full bg-black/50 p-2 backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <Plus className="h-4 w-4 text-white" />
        </button>
      </div>

      {/* Title + meta */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-white">{movie.title}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-300">
          {movie.year && <span>{movie.year}</span>}
          {movie.rating !== undefined && (
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              {movie.rating}
            </span>
          )}
        </div>
      </div>

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        trailerUrl={movie.trailerUrl}
        title={movie.title}
      />
    </div>
  );
}
