import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID ,
    appId: process.env.REACT_APP_ID 
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export async function createUser(email: string, password: string) {
    try {
        const createNewUser = await createUserWithEmailAndPassword(auth, email, password)
        const result = createNewUser.user

        return result
    } catch (error) {
        return JSON.stringify(error)
    }
}

export async function authenticateUser(email: string, password: string) {
    try {
        const authtenticate = await signInWithEmailAndPassword(auth, email, password)
        const result = authtenticate.user

        return result
    } catch (error) {
        return JSON.stringify(error)
    }
}

export async function logout(){
    const response = await signOut(auth)
    return response
}







