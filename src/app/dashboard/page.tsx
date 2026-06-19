'use client';

import Link from 'next/link';
import { useRequireAuth } from '@/lib/auth';
import MovieCard from '@/components/ui/movie-card';
import {
  Film,
  Clock,
  Heart,
  Star,
  PlayCircle,
  TrendingUp,
} from 'lucide-react';
import {
  continueWatching,
  myList,
  watchHistory,
  recommended,
  dashboardStats,
} from '@/lib/mock-data';

export default function DashboardPage() {
  const { user, loading } = useRequireAuth();

  if (loading) {
    return <div className="flex h-[60vh] items-center justify-center text-gray-300">Loading...</div>;
  }

  if (!user) {
    return <div className="flex h-[60vh] items-center justify-center text-gray-300">Redirecting...</div>;
  }

  const memberSince = user.metadata.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
      })
    : 'Unknown';

  const stats = [
    { label: 'Movies Watched', value: dashboardStats.moviesWatched, icon: Film },
    { label: 'Hours Watched', value: dashboardStats.hoursWatched, icon: Clock },
    { label: 'In My List', value: dashboardStats.listCount, icon: Heart },
    { label: 'Avg. Rating', value: dashboardStats.avgRating, icon: Star },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Welcome back, {user.displayName || user.email?.split('@')[0] || 'User'} 👋
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              {user.email} · Member since {memberSince}
            </p>
          </div>
          <Link
            href="/browse"
            className="mt-4 inline-flex items-center gap-2 self-start rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-600 sm:mt-0"
          >
            <TrendingUp className="h-4 w-4" />
            Browse Library
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{label}</span>
                <Icon className="h-5 w-5 text-pink-500" />
              </div>
              <p className="mt-3 text-3xl font-bold text-white">{value}</p>
            </div>
          ))}
        </div>

        {/* Continue Watching */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-white">Continue Watching</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {continueWatching.map(({ movie, progress, remaining }) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="group relative w-[260px] flex-shrink-0 overflow-hidden rounded-lg bg-gray-900"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={movie.backdropUrl}
                  alt={movie.title}
                  className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <PlayCircle className="h-12 w-12 text-white/90" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="line-clamp-1 text-sm font-semibold text-white">{movie.title}</h3>
                  <p className="mt-0.5 text-xs text-gray-400">{remaining}</p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-700">
                    <div
                      className="h-full rounded-full bg-pink-500"
                      style={{ width: `${Math.round(progress * 100)}%` }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* My List */}
        <section className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">My List</h2>
            <Link href="/browse" className="text-sm font-medium text-pink-500 hover:text-pink-400">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {myList.map((movie) => (
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
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-white">Recommended For You</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {recommended.map((movie) => (
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
            ))}
          </div>
        </section>

        {/* Watch History */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-white">Recently Watched</h2>
          <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50">
            {watchHistory.map(({ movie, watchedOn }, i) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className={`flex items-center gap-4 p-4 transition-colors hover:bg-gray-800/50 ${
                  i !== watchHistory.length - 1 ? 'border-b border-gray-800' : ''
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="h-16 w-11 flex-shrink-0 rounded object-cover"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-medium text-white">{movie.title}</h3>
                  <p className="text-sm text-gray-400">
                    {movie.releaseYear} · {movie.duration}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-300">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {movie.rating}
                </div>
                <span className="hidden text-sm text-gray-500 sm:block">{watchedOn}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
