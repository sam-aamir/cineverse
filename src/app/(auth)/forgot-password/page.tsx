'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Film, Mail, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock: pretend to send a reset email.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLoading(false);
    setSuccess(true);
  };

  const inputClass =
    'block w-full rounded-md border-0 bg-gray-900 py-3 pl-10 pr-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6';

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-gray-800 bg-gray-950/60 p-8 backdrop-blur-sm">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <Film className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold text-white">CineVerse</span>
          </div>
          <h1 className="mt-4 text-xl font-semibold text-white">Reset your password</h1>
        </div>

        {!success ? (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <p className="text-sm text-gray-400">
              Enter your email and we&apos;ll send you a link to reset your password.
            </p>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={inputClass}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-pink-500 px-3 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-pink-600 disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send reset link'}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
            <h2 className="mt-4 text-lg font-semibold text-white">Reset link sent</h2>
            <p className="mt-2 text-sm text-gray-400">
              We&apos;ve sent a password reset link to {email}. Please check your inbox.
            </p>
          </div>
        )}

        <p className="text-center text-sm text-gray-400">
          <Link href="/login" className="font-medium text-pink-500 hover:text-pink-400">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
