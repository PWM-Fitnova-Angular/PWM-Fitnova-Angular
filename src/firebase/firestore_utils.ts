import {getAllDocumentsFromCollection} from './firebaseAuthService';

export async function getWebData() {

  return getAllDocumentsFromCollection("Fitnova");


}
