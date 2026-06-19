// Movie data access layer.
//
// Backed by local mock data (src/lib/mock-data.ts) so the app runs without a
// configured Firestore backend. The async signatures are kept so this module
// can be swapped for a real backend later without touching callers.

import { mockMovies, getMockMovieById, type Movie } from '@/lib/mock-data';

export type { Movie } from '@/lib/mock-data';

export interface MovieFilters {
  genre?: string;
  year?: number;
  minRating?: number;
  searchTerm?: string;
}

// Simulate network latency for nicer loading states.
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Get movies with optional filters (no real pagination for the mock backend).
export async function getMovies(
  filters: MovieFilters = {},
  pageSize = 20,
  _lastDoc: unknown = null
): Promise<{ movies: Movie[]; lastDoc: null }> {
  await delay(300);

  let movies = [...mockMovies];

  if (filters.genre) {
    movies = movies.filter((m) => m.genre.includes(filters.genre as string));
  }
  if (filters.year) {
    movies = movies.filter((m) => m.releaseYear === filters.year);
  }
  if (filters.minRating) {
    movies = movies.filter((m) => m.rating >= (filters.minRating as number));
  }
  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    movies = movies.filter((m) => m.title.toLowerCase().includes(term));
  }

  return { movies: movies.slice(0, pageSize), lastDoc: null };
}

// Get a single movie by ID.
export async function getMovieById(id: string): Promise<Movie | null> {
  await delay(200);
  return getMockMovieById(id) ?? null;
}

// Get trending movies (highest view counts first).
export async function getTrendingMovies(count = 10): Promise<Movie[]> {
  await delay(300);
  return [...mockMovies].sort((a, b) => b.views - a.views).slice(0, count);
}

// View counting is a no-op against mock data.
export async function incrementMovieViews(_id: string): Promise<void> {
  return;
}
