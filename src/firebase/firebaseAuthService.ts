
import {collection, doc, getDoc, getDocs, setDoc, updateDoc  } from 'firebase/firestore';
import {auth, db} from './firebase_config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';



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


export async function changeUserPassword(oldPassword: string, newPassword: string): Promise<void> {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Usuario no autenticado.");
  }

  try {
    const credential = EmailAuthProvider.credential(
      user.email || '',
      oldPassword
    );
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
    const userRef = doc(db, "Users", user.uid);
    await updateDoc(userRef, {
      UserPassword: newPassword
    });

    console.log("Contraseña actualizada correctamente.");
  } catch (error) {
    console.error("Error al cambiar la contraseña:", error);
    throw error;
  }
}

export async function getAllDocumentsFromCollection(collectionName:string): Promise<any> {
  try {
    const colRef = collection(db, collectionName);
    const colSnap = await getDocs(colRef);

    const docs:any = [];
    colSnap.forEach(doc => {
      docs.push({id:doc.id, ...doc.data()});
    });
    return docs;
  }catch (error) {
    console.error("Error getAllDocumentsFromCollection:", error);
  }
}
