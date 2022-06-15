import React, { useState } from "react";
import { Create } from "../cofig/Utils";

const Form = () => {
	const [user, setUser] = useState({
		name: "",
		age: "16",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = async () => {
		try {
			Create(user);
		} catch (error) {
			console.log("error", error);
		}
	};
	return (
		<div>
			<h1>Add Data:</h1>
			<div>
				<label>Name:</label>
				<input placeholder="Name" name="name" type="text" onChange={handleChange} />
			</div>
			<div>
				<label>Age:</label>
				<input placeholder="Age" name="age" type="text" onChange={handleChange} />
			</div>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default Form;
