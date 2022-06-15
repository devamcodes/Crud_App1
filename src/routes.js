import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import BasicLayout from "./components/BasicLayout";
import DataView from "./components/DataView";
import Form from "./components/Form";
import { Login } from "./components/Login";
export const Router = () => {
	const element = useRoutes([
		{
			path: "/",
			element: <BasicLayout />,
			children: [
				{
					element: <Navigate to="/login" />,
				},
				{
					path: "/form",
					element: <Form />,
				},
				{
					path: "/view",
					element: <DataView />,
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
		},
	]);
	return element;
};
