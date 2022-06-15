import { db, authVariable } from "./firebase";
import { collection, addDoc, getDocs, updateDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const userdocRef = collection(db, "users");

export const Create = async (data) => {
	try {
		await addDoc(userdocRef, data);
	} catch (error) {
		console.log("error", error.message);
	}
};

export const GetAll = async () => {
	try {
		const response = await getDocs(userdocRef);
		return response;
	} catch (error) {
		console.log("error", error.message);
	}
};

export const GetUsers = async (id) => {
	try {
		console.log("id", id);
		const response = await updateDoc(userdocRef, id);
		console.log("response1", response);
	} catch (error) {}
};

export const signInWithGoogle = async () => {
	const googleProvider = new GoogleAuthProvider();
	try {
		const res = await signInWithPopup(authVariable, googleProvider);
		console.log("res", res.user.accessToken);
		localStorage.setItem("token", res?.user?.accessToken);
		/* const user = res.user;
		const q = query(collection(db, "users"), where("uid", "==", user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, "users"), {
				uid: user.uid,
				name: user.displayName,
				authProvider: "google",
				email: user.email,
			});
		} */
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
export const logIn = async (email, password) => {
	try {
		const data = await signInWithEmailAndPassword(authVariable, email, password);
		localStorage.setItem("token", data._tokenResponse.idToken);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
