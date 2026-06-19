'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MovieCard from '@/components/ui/movie-card';
import { getMovieById, type Movie } from '@/services/movies';
import { mockMovies } from '@/lib/mock-data';
import { PlayCircle, Heart, Star, Share2 } from 'lucide-react';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [inList, setInList] = useState(false);

  useEffect(() => {
    const movieId = Array.isArray(id) ? id[0] : id;
    if (!movieId) return;

    let active = true;
    setLoading(true);
    getMovieById(movieId).then((m) => {
      if (active) {
        setMovie(m);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return <div className="flex h-[60vh] items-center justify-center text-gray-300">Loading...</div>;
  }

  if (!movie) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center gap-2 text-gray-300">
        <p className="text-lg">Movie not found</p>
      </div>
    );
  }

  const similar = mockMovies.filter((m) => m.id !== movie.id).slice(0, 5);

  return (
    <div className="min-h-screen bg-black">
      {/* Backdrop */}
      <div className="relative">
        <div
          className="h-[55vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdropUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      </div>

      <div className="relative z-10 mx-auto -mt-48 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end">
          {/* Poster */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-44 flex-shrink-0 rounded-lg shadow-2xl sm:w-56"
          />

          {/* Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">{movie.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <span>{movie.releaseYear}</span>
              <span>·</span>
              <span>{movie.duration}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {movie.rating}/10
              </span>
              <span>·</span>
              <span>{movie.views.toLocaleString()} views</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {movie.genre.map((g) => (
                <span key={g} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-200">
                  {g}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="flex items-center rounded-lg bg-pink-500 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-600">
                <PlayCircle className="mr-2 h-5 w-5" />
                Play
              </button>
              <button
                onClick={() => setInList((v) => !v)}
                className="flex items-center rounded-lg border border-gray-600 px-6 py-3 font-medium text-gray-200 transition-colors hover:border-gray-400 hover:text-white"
              >
                <Heart className={`mr-2 h-5 w-5 ${inList ? 'fill-pink-500 text-pink-500' : ''}`} />
                {inList ? 'In My List' : 'Add to My List'}
              </button>
              <button className="flex items-center rounded-lg border border-gray-600 px-6 py-3 font-medium text-gray-200 transition-colors hover:border-gray-400 hover:text-white">
                <Share2 className="mr-2 h-5 w-5" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-10 max-w-3xl">
          <h2 className="mb-2 text-lg font-semibold text-white">Overview</h2>
          <p className="leading-relaxed text-gray-300">{movie.description}</p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-white">Cast</h2>
            <div className="flex flex-wrap gap-2">
              {movie.cast.map((actor) => (
                <span key={actor} className="rounded bg-gray-800 px-3 py-1 text-sm text-gray-200">
                  {actor}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-white">Director</h2>
            <p className="text-gray-300">{movie.director}</p>
          </div>
        </div>

        {/* Similar */}
        <div className="mt-12 pb-12">
          <h2 className="mb-4 text-2xl font-bold text-white">More Like This</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {similar.map((m) => (
              <MovieCard
                key={m.id}
                movie={{
                  id: m.id,
                  title: m.title,
                  posterUrl: m.posterUrl,
                  trailerUrl: m.trailerUrl,
                  rating: m.rating,
                  year: m.releaseYear,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
