'use client';

import { useRequireAuth } from '@/lib/auth';

export default function AdminPage() {
  const { user, loading } = useRequireAuth();

  if (loading) {
    return <div className="flex h-[60vh] items-center justify-center">Loading...</div>;
  }

  // If not authenticated, the hook would have redirected
  if (!user) {
    return <div className="flex h-[60vh] items-center justify-center">Redirecting...</div>;
  }

  // In a real app, you would check user.role === 'admin' here and redirect if not
  // For demo purposes, we'll show the admin page to any logged-in user

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="mb-6 text-2xl font-bold text-white">Admin Dashboard</h1>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
          <h2 className="mb-4 text-xl font-semibold text-white">Admin Functions</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="block w-10 h-10 bg-pink-500 rounded flex items-center justify-center text-white mr-3">
                🎬
              </span>
              <div>
                <h3 className="font-semibold text-white">Content Management</h3>
                <p className="text-sm text-gray-300">
                  Add, edit, and delete movies, posters, trailers, and categories
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="block w-10 h-10 bg-pink-500 rounded flex items-center justify-center text-white mr-3">
                👥
              </span>
              <div>
                <h3 className="font-semibold text-white">User Management</h3>
                <p className="text-sm text-gray-300">
                  View and manage user accounts, roles, and permissions
                </p>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="block w-10 h-10 bg-pink-500 rounded flex items-center justify-center text-white mr-3">
                📊
              </span>
              <div>
                <h3 className="font-semibold text-white">Analytics</h3>
                <p className="text-sm text-gray-300">
                  View statistics on users, views, popular content, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
