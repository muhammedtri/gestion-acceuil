// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0V4oH7okMJ50qrpMSA-MtgXRKC3ZW5Yk",
  authDomain: "gestionassure.firebaseapp.com",
  projectId: "gestionassure",
  storageBucket: "gestionassure.appspot.com",
  messagingSenderId: "52217901747",
  appId: "1:52217901747:web:2c24bd58e48361abe2b6c6",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
