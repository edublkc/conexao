import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCpOIdqPPbkMpCnGp9ftd7sJZIo_O3cvq4",
    authDomain: "conexao-fccd7.firebaseapp.com",
    projectId: "conexao-fccd7",
    storageBucket: "conexao-fccd7.appspot.com",
    messagingSenderId: "891296392240",
    appId: "1:891296392240:web:2eac88095c317f9aecf9f5"
};



const app = initializeApp(firebaseConfig);


export function createUser(email:string,password:string) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}