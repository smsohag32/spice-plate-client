// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO3HVS55yZnih3O8bhCxmrcXn3GgDqpvk",
  authDomain: "spice-palate.firebaseapp.com",
  projectId: "spice-palate",
  storageBucket: "spice-palate.appspot.com",
  messagingSenderId: "936918928577",
  appId: "1:936918928577:web:fe8a08424f1a0965015840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;