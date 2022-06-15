import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn, signInWithGoogle } from "../cofig/Utils";
import "./Login.css";

export const Login = () => {
	const naviagte = useNavigate();
	const [cred, setCred] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setCred((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await logIn(cred.email, cred.password);
		naviagte("/view");
	};
	const handleSiginWithGoogle = async (event) => {
		event.preventDefault();
		await signInWithGoogle();
		naviagte("/view");
	};

	return (
		<div className="Login">
			<form>
				<div className="forminput">
					<label>Email</label>
					<input autoFocus type="email" name="email" value={cred.email} onChange={(e) => handleChange(e)} />
				</div>
				<div className="forminput">
					<label>Password</label>
					<input type="password" name="password" value={cred.password} onChange={(e) => handleChange(e)} />
				</div>
				<button block="true" className="loginButton" type="submit" onClick={handleSubmit}>
					Login
				</button>
				<button block="true" type="submit" className="loginButton" onClick={handleSiginWithGoogle}>
					Sign In With Google
				</button>
			</form>
		</div>
	);
};
