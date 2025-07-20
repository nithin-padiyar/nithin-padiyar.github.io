import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider,signInWithPopup} from "firebase/auth";

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgGKuLkXyjyzPNv_JSDq9XpLCOAkPfNvk",
  authDomain: "login-test-2d23d.firebaseapp.com",
  projectId: "login-test-2d23d",
  storageBucket: "login-test-2d23d.firebasestorage.app",
  messagingSenderId: "900612594294",
  appId: "1:900612594294:web:97b4e723f44d4d9c099d57",
  measurementId: "G-0QJJYQ39E3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode ='en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-button")
googleLogin.addEventListener("click",function(){
  alert(5)
});