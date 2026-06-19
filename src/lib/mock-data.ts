// Centralized mock data for CineVerse.
// Used in place of Firestore so the whole app works as a self-contained demo.

export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl: string;
  genre: string[];
  releaseYear: number;
  rating: number;
  duration: string;
  cast: string[];
  director: string;
  views: number;
}

const img = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;
const backdrop = (path: string) => `https://image.tmdb.org/t/p/original${path}`;

export const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Avengers: Endgame',
    description:
      'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos\' actions and restore balance to the universe.',
    posterUrl: img('/or06FN3Dka5tukK1e9sl16pB3iy.jpg'),
    backdropUrl: backdrop('/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/TcMBFSGVi1c',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    releaseYear: 2019,
    rating: 8.4,
    duration: '3h 1m',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Scarlett Johansson'],
    director: 'Anthony & Joe Russo',
    views: 3010000,
  },
  {
    id: '2',
    title: 'Spider-Man: No Way Home',
    description:
      'With Spider-Man\'s identity now revealed, Peter Parker asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.',
    posterUrl: img('/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'),
    backdropUrl: backdrop('/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/JfVOs4VSpmA',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    releaseYear: 2021,
    rating: 8.2,
    duration: '2h 28m',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch', 'Jamie Foxx'],
    director: 'Jon Watts',
    views: 2780000,
  },
  {
    id: '3',
    title: 'Oppenheimer',
    description:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.',
    posterUrl: img('/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'),
    backdropUrl: backdrop('/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/uYPbbksJxIg',
    genre: ['Drama', 'History', 'Thriller'],
    releaseYear: 2023,
    rating: 8.4,
    duration: '3h 0m',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
    director: 'Christopher Nolan',
    views: 1760000,
  },
  {
    id: '4',
    title: 'Interstellar',
    description:
      'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival as Earth faces an environmental collapse.',
    posterUrl: img('/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'),
    backdropUrl: backdrop('/xJHokMbljvjADYdit5fK5VQsXEG.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    releaseYear: 2014,
    rating: 8.6,
    duration: '2h 49m',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    director: 'Christopher Nolan',
    views: 2450000,
  },
  {
    id: '5',
    title: 'The Dark Knight',
    description:
      'When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterUrl: img('/qJ2tW6WMUDux911r6m7haRef0WH.jpg'),
    backdropUrl: backdrop('/dqK9Hag1054tghRQSqLSfrkvQnA.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    genre: ['Action', 'Crime', 'Drama'],
    releaseYear: 2008,
    rating: 9.0,
    duration: '2h 32m',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine'],
    director: 'Christopher Nolan',
    views: 3120000,
  },
  {
    id: '6',
    title: 'Dune: Part Two',
    description:
      'Paul Atreides unites with the Fremen while on a path of revenge against the conspirators who destroyed his family and enslaved his people.',
    posterUrl: img('/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg'),
    backdropUrl: backdrop('/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w',
    genre: ['Sci-Fi', 'Adventure', 'Drama'],
    releaseYear: 2024,
    rating: 8.5,
    duration: '2h 46m',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Javier Bardem'],
    director: 'Denis Villeneuve',
    views: 1980000,
  },
  {
    id: '7',
    title: 'John Wick: Chapter 4',
    description:
      'John Wick uncovers a path to defeating the High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.',
    posterUrl: img('/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg'),
    backdropUrl: backdrop('/sc6MBpxFW7HMr6gf0LLIKkKkGBT.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/qEVUtrk8_B4',
    genre: ['Action', 'Crime', 'Thriller'],
    releaseYear: 2023,
    rating: 7.8,
    duration: '2h 49m',
    cast: ['Keanu Reeves', 'Donnie Yen', 'Bill Skarsgård', 'Laurence Fishburne'],
    director: 'Chad Stahelski',
    views: 1650000,
  },
  {
    id: '8',
    title: 'Top Gun: Maverick',
    description:
      'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads a new generation of pilots on a dangerous mission.',
    posterUrl: img('/62HCnUTziyWcpDaBO2i1DX17ljH.jpg'),
    backdropUrl: backdrop('/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/giXco2jaZ_4',
    genre: ['Action', 'Drama'],
    releaseYear: 2022,
    rating: 8.3,
    duration: '2h 11m',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Jon Hamm'],
    director: 'Joseph Kosinski',
    views: 2340000,
  },
  {
    id: '9',
    title: 'Avatar: The Way of Water',
    description:
      'Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri to protect their home.',
    posterUrl: img('/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg'),
    backdropUrl: backdrop('/s16H6tpK2utvwDtzZ8Quy8iKTV6.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/a8Gx8wiNbs8',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    releaseYear: 2022,
    rating: 7.6,
    duration: '3h 12m',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Stephen Lang'],
    director: 'James Cameron',
    views: 2100000,
  },
  {
    id: '10',
    title: 'Joker',
    description:
      'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society, sending him on a downward spiral into crime and chaos.',
    posterUrl: img('/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'),
    backdropUrl: backdrop('/f5F4cRhQdUbyVbB5lTNCwXTD5QU.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/zAGVQLHvwOY',
    genre: ['Crime', 'Drama', 'Thriller'],
    releaseYear: 2019,
    rating: 8.4,
    duration: '2h 2m',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz', 'Frances Conroy'],
    director: 'Todd Phillips',
    views: 1890000,
  },
  {
    id: '11',
    title: 'The Matrix',
    description:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    posterUrl: img('/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'),
    backdropUrl: backdrop('/icmmSD4vTTDKOq2vvdulafOGw93.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    genre: ['Action', 'Sci-Fi'],
    releaseYear: 1999,
    rating: 8.7,
    duration: '2h 16m',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Hugo Weaving'],
    director: 'The Wachowskis',
    views: 2210000,
  },
  {
    id: '12',
    title: 'Inception',
    description:
      'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    posterUrl: img('/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'),
    backdropUrl: backdrop('/s3TBrRGB1iav7gFOCNx3H31MoES.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    releaseYear: 2010,
    rating: 8.8,
    duration: '2h 28m',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page', 'Tom Hardy'],
    director: 'Christopher Nolan',
    views: 2890000,
  },
  {
    id: '13',
    title: 'Black Panther',
    description:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    posterUrl: img('/uxzzxijgPIY7slzFvMotPv8wjKA.jpg'),
    backdropUrl: backdrop('/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/xjDjIWPwcPU',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    releaseYear: 2018,
    rating: 7.3,
    duration: '2h 14m',
    cast: ['Chadwick Boseman', 'Michael B. Jordan', "Lupita Nyong'o", 'Danai Gurira'],
    director: 'Ryan Coogler',
    views: 2560000,
  },
  {
    id: '14',
    title: 'Guardians of the Galaxy Vol. 3',
    description:
      'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and protect one of their own on a mission that could mean the end of the Guardians.',
    posterUrl: img('/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg'),
    backdropUrl: backdrop('/nHf61UzkfFno5X1ofIjWpbVhjYs.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/u3V5KDHRQvk',
    genre: ['Action', 'Adventure', 'Sci-Fi', 'Comedy'],
    releaseYear: 2023,
    rating: 8.0,
    duration: '2h 30m',
    cast: ['Chris Pratt', 'Zoe Saldana', 'Bradley Cooper', 'Vin Diesel'],
    director: 'James Gunn',
    views: 1870000,
  },
  {
    id: '15',
    title: 'Alien: Romulus',
    description:
      'A group of young space colonizers come face to face with the most terrifying life form in the universe while scavenging the deep ends of a derelict space station.',
    posterUrl: img('/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg'),
    backdropUrl: backdrop('/9SSEUrSqhljBMzRe4aBTh17LRET.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/x2nFMHHH72w',
    genre: ['Horror', 'Sci-Fi', 'Thriller'],
    releaseYear: 2024,
    rating: 7.3,
    duration: '1h 59m',
    cast: ['Cailee Spaeny', 'David Jonsson', 'Archie Renaux', 'Isabela Merced'],
    director: 'Fede Álvarez',
    views: 1190000,
  },
  {
    id: '16',
    title: 'Doctor Strange in the Multiverse of Madness',
    description:
      'Doctor Strange teams up with a mysterious teenager who can travel between multiverses to face a powerful enemy determined to harness the power of the Multiverse.',
    posterUrl: img('/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg'),
    backdropUrl: backdrop('/wcKFYIiVDvRURrzglV9bOoNjnDd.jpg'),
    trailerUrl: 'https://www.youtube.com/embed/aWzlQ2N6qqg',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    releaseYear: 2022,
    rating: 6.9,
    duration: '2h 6m',
    cast: ['Benedict Cumberbatch', 'Elizabeth Olsen', 'Chiwetel Ejiofor', 'Benedict Wong'],
    director: 'Sam Raimi',
    views: 1950000,
  },
];

export function getMockMovieById(id: string): Movie | undefined {
  return mockMovies.find((m) => m.id === id);
}

// ---- Dashboard mock data ----

export interface ContinueWatchingItem {
  movie: Movie;
  progress: number; // 0..1
  remaining: string;
}

export const continueWatching: ContinueWatchingItem[] = [
  { movie: mockMovies[0], progress: 0.62, remaining: '1h 8m left' },   // Avengers: Endgame
  { movie: mockMovies[5], progress: 0.28, remaining: '1h 59m left' },  // Dune: Part Two
  { movie: mockMovies[10], progress: 0.85, remaining: '20m left' },    // The Matrix
  { movie: mockMovies[2], progress: 0.1, remaining: '2h 42m left' },   // Oppenheimer
];

export const myList: Movie[] = [
  mockMovies[3],   // Interstellar
  mockMovies[4],   // The Dark Knight
  mockMovies[7],   // Top Gun: Maverick
  mockMovies[9],   // Joker
  mockMovies[11],  // Inception
];

export interface WatchHistoryItem {
  movie: Movie;
  watchedOn: string;
}

export const watchHistory: WatchHistoryItem[] = [
  { movie: mockMovies[4],  watchedOn: 'Jun 16, 2026' },  // The Dark Knight
  { movie: mockMovies[10], watchedOn: 'Jun 14, 2026' },  // The Matrix
  { movie: mockMovies[9],  watchedOn: 'Jun 11, 2026' },  // Joker
  { movie: mockMovies[0],  watchedOn: 'Jun 8, 2026' },   // Avengers: Endgame
];

export const recommended: Movie[] = [
  mockMovies[12],  // Superman: Legacy
  mockMovies[13],  // Guardians of the Galaxy Vol. 3
  mockMovies[14],  // Alien: Romulus
  mockMovies[15],  // Tenet
  mockMovies[1],   // Spider-Man: No Way Home
];

export const dashboardStats = {
  moviesWatched: 47,
  hoursWatched: 118,
  listCount: myList.length,
  avgRating: 8.7,
};