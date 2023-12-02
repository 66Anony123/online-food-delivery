import {getApp, getApps, initializeApp} from 'firebase/app'
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_ID,
    appId:process.env.REACT_APP_FIREBASE_APP_ID
  
  };

  const app = getApps.length > 0 ? getApp():initializeApp(firebaseConfig);
const storage = getStorage(app);
export {app,storage}; 

//This code checks if there are any existing Firebase apps initialized using getApps().length.
// If there are existing apps, it retrieves the first one using getApp().
//If there are no existing apps, it initializes a new Firebase app using initializeApp(firebaseConfig).
// This pattern is useful if you want to ensure that your Firebase app is only initialized once in your application.