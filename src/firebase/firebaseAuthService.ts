import { doc, getDoc, setDoc, updateDoc  } from 'firebase/firestore';
import {auth, db} from './firebase_config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


async function createNewUser(uid: string, data: Object) {
  try {
    const userRef = doc(db, "Users", uid);
    await setDoc(userRef, data);
  }catch (error) {
    console.error("Error al crear un nuevo usuario en FireStore: ",error);
  }

}

export async function registerUser(email: string, password: string, data: Object): Promise<string> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await createNewUser(userCredential.user.uid, data)
    return userCredential.user.uid;
  } catch (err) {
    console.error("Error al registrar usuario:", err);
    throw err;
  }
}

export async function loginUser(email: string, password: string) {
  try {
    console.log('Login successful');
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

  } catch (error) {
  }
}

export const saveUserData = async (uid: string, data: Partial<Record<string, any>>) => {
  try {
    console.log(uid);
    console.log(data);
    const userRef = doc(db, "Users", uid);
    await updateDoc(userRef, data);
    console.log("Datos guardados correctamente.");
  } catch (error) {
    console.error("Error al guardar datos:", error);
  }
};
export async function getUserData(userUid: string): Promise<any> {
  const userRef = doc(db, "Users", userUid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data();
  }
  else{
    console.error("User data not found");
  }
}








