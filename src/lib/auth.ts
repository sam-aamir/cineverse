'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useRequireAuth() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  return { user, loading };
}

// Maps Firebase auth error codes to user-friendly messages.
export function getAuthErrorMessage(err: unknown): string {
  const code =
    typeof err === 'object' && err !== null && 'code' in err
      ? String((err as { code: unknown }).code)
      : '';

  switch (code) {
    case 'auth/invalid-email':
      return 'That email address is not valid.';
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/user-not-found':
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
      return 'Incorrect email or password.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/popup-closed-by-user':
      return 'Google sign-in was cancelled.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Please try again later.';
    case 'auth/api-key-not-valid':
    case 'auth/invalid-api-key':
      return 'Authentication is not configured. Set your Firebase credentials in the environment.';
    case 'auth/network-request-failed':
      return 'Network error. Check your connection and try again.';
    default:
      if (err instanceof Error && err.message) return err.message;
      return 'Something went wrong. Please try again.';
  }
}

export function useRequireAdmin() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.push('/login');
      return;
    }
    // In a real app, check Firestore for role
    // For now, we'll assume any logged-in user can access admin for demo
    // if (user?.role !== 'admin') {
    //   router.push('/');
    // }
  }, [user, loading, router]);

  return { user, loading };
}
