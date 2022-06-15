import React, { useEffect, useState } from "react";
import { GetAll, GetUsers } from "../cofig/Utils";
const DataView = () => {
	const [users, setUsers] = useState([]);
	const getUsers = async () => {
		const { docs } = await GetAll();
		console.log("docs", docs);
		setUsers(docs.map((doc) => ({ ...doc.data })));
	};
	const EditHnadler = async (id) => {
		await GetUsers(id);
	};
	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div style={{ display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
			{users.map((user, index) => (
				<div key={index}>
					{user?.name} {user?.age}
					<button onClick={() => EditHnadler(user?.id)}>Edit</button>
					<button>delete</button>
				</div>
			))}
		</div>
	);
};

export default DataView;
