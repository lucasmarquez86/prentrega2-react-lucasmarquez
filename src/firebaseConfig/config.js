import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
//import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// base de datos de produccion
const firebaseConfig = {
  apiKey: "AIzaSyBbkZU36XR5ALXbYrR4gLyjL2fzQ5cUeAc",
  authDomain: "e-commerce-react-cedb2.firebaseapp.com",
  projectId: "e-commerce-react-cedb2",
  storageBucket: "e-commerce-react-cedb2.appspot.com",
  messagingSenderId: "813503129201",
  appId: "1:813503129201:web:5743224089b0d913949dd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
//export const auth = getAuth(app)
export const storage = getStorage(app)
