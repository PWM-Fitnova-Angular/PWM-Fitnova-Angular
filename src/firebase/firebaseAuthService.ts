import {auth} from './firebase_config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";



export async function registerUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email, password);
  }catch(err) {}
}

export async function loginUser(email: string, password: string) {
  try {
    console.log('Login successful');
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

  } catch (error) {
  }
}









