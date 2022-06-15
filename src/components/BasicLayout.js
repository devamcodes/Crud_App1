import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";

const BasicLayout = () => {
	const isLoggedIn = localStorage.getItem("token");
	return (
		<div>
			<Header />
			{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
		</div>
	);
};

export default BasicLayout;
