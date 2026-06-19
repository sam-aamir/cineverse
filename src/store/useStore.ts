import { create } from 'zustand';

interface StoreState {
  // Example: user preferences
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  // Example: movie data caching
  trendingMovies: any[];
  setTrendingMovies: (movies: any[]) => void;
  // Add more state as needed
}

const useStore = create<StoreState>((set) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
  trendingMovies: [],
  setTrendingMovies: (movies) => set({ trendingMovies: movies }),
}));

export default useStore;
