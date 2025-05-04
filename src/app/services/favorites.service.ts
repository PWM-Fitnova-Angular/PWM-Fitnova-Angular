import { Injectable } from '@angular/core';
import { auth, db } from '../../firebase/firebase_config';
import { doc, setDoc, getDocs, collection } from 'firebase/firestore';

export interface Card {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
  description: string;
  // cualquier otra propiedad que uses
}

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  async save(card: Card): Promise<void> {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuario no autenticado');
    const ref = doc(db, 'Users', user.uid, 'saved', card.id);
    await setDoc(ref, card);
  }

  async loadAll(): Promise<Card[]> {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuario no autenticado');
    const col = collection(db, 'Users', user.uid, 'saved');
    const snap = await getDocs(col);
    return snap.docs.map(d => d.data() as Card);
  }
}
