'use client';

import Link from 'next/link';
import { PlayCircle, Info, Star } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="relative flex min-h-[80vh] items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded bg-pink-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pink-400">
            Featured Movie
          </span>

          <h1 className="mt-4 text-5xl font-bold text-white sm:text-7xl">
            Avengers: Endgame
          </h1>

          <div className="mt-4 flex items-center gap-4 text-white">
            <span className="text-lg">2019</span>

            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">8.4</span>
            </div>

            <span className="rounded border border-gray-500 px-2 py-1 text-sm">
              Action
            </span>

            <span className="rounded border border-gray-500 px-2 py-1 text-sm">
              Adventure
            </span>

            <span className="rounded border border-gray-500 px-2 py-1 text-sm">
              Sci-Fi
            </span>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            After the devastating events of Infinity War, the Avengers assemble
            once more to reverse Thanos&apos; actions and restore balance to the
            universe. The epic conclusion to Marvel&apos;s Infinity Saga.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/browse"
              className="flex items-center rounded-lg bg-pink-500 px-6 py-3 font-medium text-white transition hover:bg-pink-600"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Now
            </Link>

            <Link
              href="/movie/avengers-endgame"
              className="flex items-center rounded-lg border border-gray-500 px-6 py-3 font-medium text-white transition hover:border-white"
            >
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}