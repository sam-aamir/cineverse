import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';

// Read Firebase configuration from environment variables.
// These are NEXT_PUBLIC_* so they are inlined into the client bundle at build time.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || undefined,
};

// Warn early (dev only) if the config still contains the template placeholders.
if (
  process.env.NODE_ENV !== 'production' &&
  (!firebaseConfig.apiKey || firebaseConfig.apiKey.includes('your_'))
) {
  // eslint-disable-next-line no-console
  console.warn(
    '[firebase] Missing/placeholder config. Fill in NEXT_PUBLIC_FIREBASE_* in .env.local (and your host) with your real Firebase web app credentials.'
  );
}

// Reuse the existing app during Fast Refresh / multiple imports instead of re-initializing.
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);

// Analytics only works in a supported browser environment with a real config.
// Initialize it lazily and guarded so it never crashes during SSR, in unsupported
// runtimes, or when the config is still a placeholder.
const hasRealConfig = Boolean(firebaseConfig.apiKey && !firebaseConfig.apiKey.includes('your_'));

export let analytics: Analytics | undefined;
if (typeof window !== 'undefined' && hasRealConfig && firebaseConfig.measurementId) {
  isSupported()
    .then((ok) => {
      if (ok) {
        analytics = getAnalytics(app);
      }
    })
    .catch(() => {
      /* analytics unavailable — ignore */
    });
}

export default app;
