
// import { getAuth } from "firebase/auth";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

// // Initialize Firebase
// const app = initializeApp( firebaseConfig );
// const analytics = getAnalytics( app );
// const auth = getAuth( app );
// export default auth;
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtf23wuCPz9cdZasITHVMQyvYdHjcuKog",
    authDomain: "doctors-portal-aec58.firebaseapp.com",
    projectId: "doctors-portal-aec58",
    storageBucket: "doctors-portal-aec58.appspot.com",
    messagingSenderId: "115772270906",
    appId: "1:115772270906:web:9edab7025cfeb2eba20803",
    measurementId: "G-Z36CDRLR5B"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const analytics = getAnalytics( app );
const auth = getAuth( app );
export default auth;