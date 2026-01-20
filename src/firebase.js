import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

let app;
let db;
let analytics = null;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);

  // Analytics only works in browser environment and requires valid config
  if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
    try {
      analytics = getAnalytics(app);
    } catch (analyticsError) {
      console.warn('Firebase Analytics initialization failed:', analyticsError.message);
    }
  }
} catch (error) {
  console.error('Firebase initialization failed:', error.message);
  // Create a mock db object to prevent crashes
  db = null;
}

export { db, analytics };
