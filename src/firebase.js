import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.DB_PASSWORD,
  authDomain: "alex-restaurant-811d6.firebaseapp.com",
  projectId: "alex-restaurant-811d6",
  storageBucket: "alex-restaurant-811d6.appspot.com",
  messagingSenderId: "387040567438",
  appId: "1:387040567438:web:d6874bd27a4b732ae029df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export{db}