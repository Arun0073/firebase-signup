
import { initializeApp } from "firebase/app";
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCKgkFYHFWHjKPubKyzFMiiXHfBwi2GWdY",
  authDomain: "signup-55d23.firebaseapp.com",
  projectId: "signup-55d23",
  storageBucket: "signup-55d23.appspot.com",
  messagingSenderId: "485903513634",
  appId: "1:485903513634:web:3d9acdc93dd6056b58727b",
  measurementId: "G-8F1BYP3PCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;