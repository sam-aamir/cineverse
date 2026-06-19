'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-20">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-white">Ready to start watching?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          Sign up now and get instant access to our entire library of movies and TV shows.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-lg bg-pink-500 px-6 py-3 font-medium text-white transition-colors hover:bg-pink-600"
          >
            Create Free Account
          </Link>
          <Link
            href="/login"
            className="rounded-lg border border-gray-600 px-6 py-3 font-medium text-gray-200 transition-colors hover:border-gray-400 hover:text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}
