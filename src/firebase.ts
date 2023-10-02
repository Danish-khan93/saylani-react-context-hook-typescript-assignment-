// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfJb_qxyro5x5Swnq83we9tzOh0hZgnZk",
  authDomain: "ecommerce-react-typscript.firebaseapp.com",
  projectId: "ecommerce-react-typscript",
  storageBucket: "ecommerce-react-typscript.appspot.com",
  messagingSenderId: "751004539197",
  appId: "1:751004539197:web:3aa3b492c83df10ff60d54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export default app