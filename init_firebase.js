import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth , GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

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
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...

    console.log(user)
    window.location.href = "sucess.html";

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
});