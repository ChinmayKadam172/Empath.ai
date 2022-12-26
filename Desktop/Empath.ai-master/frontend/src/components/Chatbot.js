import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Chatbot() {
	const [response, setResponse] = useState();
	const [id, setId] = useState();
	useEffect(() => {
		axios
			.get("http://127.0.0.1:5000/api", id)
			.then((res) => {
				console.log(res);
				setResponse(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	return (
		<>
			<div className="chatbot">
				<h1>{response}</h1>
				<input
					type="text"
					label="input"
					style={{
						color: "black",
						width: "90vh",

						margin: "50px",
					}}
				/>
				<button
					onClick={(e) => setId(e.target.value)}
					style={{
						margin: "50px",
					}}>
					Click
				</button>
			</div>
		</>
	);
}
