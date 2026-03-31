// ============================================
// PokéBuilder — Firebase Configuration
// ============================================

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMfhTH_bwb6iQ5BOMWclDyWqsTq2_B3rM",
  authDomain: "pokebuilder-18867.firebaseapp.com",
  projectId: "pokebuilder-18867",
  storageBucket: "pokebuilder-18867.firebasestorage.app",
  messagingSenderId: "15661104569",
  appId: "1:15661104569:web:835f7351da650769f34a68",
  measurementId: "G-T9ZGJFH8DB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
