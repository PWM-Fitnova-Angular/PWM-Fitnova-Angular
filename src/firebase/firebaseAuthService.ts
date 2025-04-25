import { doc } from 'firebase/firestore';
import {auth, db} from './firebase_config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { updateDoc } from 'firebase/firestore/lite';


export async function registerUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email, password);
    sessionStorage.setItem("userUid", userCredential.user.uid);
  }catch(err) {}
}

export async function loginUser(email: string, password: string) {
  try {
    console.log('Login successful');
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

  } catch (error) {
  }
}

export const saveUserData = async (uid: string , data: Partial<Record<string, any>>) => {
  try {
    const userRef = doc(db, "Users", uid);
    await updateDoc(userRef, data);
    console.log("Datos actualizados correctamente.");
  } catch (error) {
    console.error("Error al guardar datos:", error);
  }
};









