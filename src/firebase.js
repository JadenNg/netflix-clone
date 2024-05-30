import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDpwL5ZI_LA_kfkoHFUase2snOipZs3vmM",
    authDomain: "netflix-clone-3ed79.firebaseapp.com",
    projectId: "netflix-clone-3ed79",
    storageBucket: "netflix-clone-3ed79.appspot.com",
    messagingSenderId: "734435624926",
    appId: "1:734435624926:web:9b74575f2f1f5ca8b6bf4f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user", {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        }));
    } catch(error){
        console.log(error);
        alert(error);
    }
}

const login = async()=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch(error) {
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};