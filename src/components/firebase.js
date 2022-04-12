import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFl5JtOErd9caDgzlFscDq6olfHSnIEb8",
    authDomain: "clone-801fc.firebaseapp.com",
    projectId: "clone-801fc",
    storageBucket: "clone-801fc.appspot.com",
    messagingSenderId: "192045838549",
    appId: "1:192045838549:web:ec8602b4b991e71809b25c",
    measurementId: "G-VK3HL3QH3C"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
















// import firebase from 'firebase/compat/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyCFl5JtOErd9caDgzlFscDq6olfHSnIEb8",
//     authDomain: "clone-801fc.firebaseapp.com",
//     projectId: "clone-801fc",
//     storageBucket: "clone-801fc.appspot.com",
//     messagingSenderId: "192045838549",
//     appId: "1:192045838549:web:ec8602b4b991e71809b25c",
//     measurementId: "G-VK3HL3QH3C"
// };


// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

// export { auth };