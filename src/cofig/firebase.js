import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	// apiKey: process.env.REACT_APP_API_KEY,
	// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	// projectId: process.env.REACT_APP_PROJECT_ID,
	// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	// appId: process.env.REACT_APP_APP_ID,
	apiKey: "AIzaSyBgPPSEdn5gpDmo8d0UXPLzxJJr0vKN0n0",
	authDomain: "test-bf3af.firebaseapp.com",
	projectId: "test-bf3af",
	storageBucket: "test-bf3af.appspot.com",
	messagingSenderId: "1050002024586",
	appId: "1:1050002024586:web:c5d9b77a12bbe64fdd6573",
};

const app = initializeApp(firebaseConfig);
export const authVariable = getAuth(app);
export const db = getFirestore(app);
