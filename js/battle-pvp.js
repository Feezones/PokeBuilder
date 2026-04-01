// ============================================
// PokéBuilder — PVP Opponent Finder
// ============================================
// Looks up other trainers' teams from Firestore for PVP battles.

import { db } from './firebase.js';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

// --- Find opponent by display name ---
export async function findOpponent(searchName) {
  const usersRef = collection(db, 'users');
  const snapshot = await getDocs(usersRef);

  const results = [];
  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    if (data.displayName && data.displayName.toLowerCase().includes(searchName.toLowerCase())) {
      results.push({
        uid: docSnap.id,
        displayName: data.displayName,
        teams: data.teams || [],
        activeTeamIndex: data.activeTeamIndex || 0,
      });
    }
  });

  return results;
}

// --- Get a specific user's team by uid ---
export async function getOpponentTeam(uid) {
  const docRef = doc(db, 'users', uid);
  const snap = await getDoc(docRef);

  if (!snap.exists()) return null;

  const data = snap.data();
  const teamIdx = data.activeTeamIndex || 0;
  const team = data.teams?.[teamIdx];

  return {
    displayName: data.displayName,
    teamName: team?.name || 'Team',
    slots: team?.slots || [],
  };
}
