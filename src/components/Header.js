import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { authVariable } from "../cofig/firebase";

const Header = () => {
	const navigate = useNavigate();
	const logOut = async () => {
		try {
			await signOut(authVariable);
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<div>
			<div style={{ justifyContent: "space-between", display: "flex", width: "100vh" }}>
				<Link to="/form">Form</Link>
				<Link to="/view">View</Link>
				<button
					onClick={() => {
						logOut();
						localStorage.removeItem("token");
						navigate("/login");
					}}>
					LogOut
				</button>
			</div>
		</div>
	);
};

export default Header;
