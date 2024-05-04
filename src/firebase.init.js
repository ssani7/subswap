// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBW4mW5oce3vFa8H2mtmKud5sLmFh7j4nc',
	authDomain: 'subswap-24017.firebaseapp.com',
	projectId: 'subswap-24017',
	storageBucket: 'subswap-24017.appspot.com',
	messagingSenderId: '945153497316',
	appId: '1:945153497316:web:b41694f781c87e8d19f4f1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
