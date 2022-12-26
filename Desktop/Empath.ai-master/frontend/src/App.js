// import * as faceapi from 'face-api.js';
//import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Face from "./components/Face";
import HomeScreen from "./components/HomeScreen";
import Chatbot from "./components/Chatbot"

function App() {
	return (
		<div className="screen">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/face" element={<Face />} />
					<Route path="/chat" element={<Chatbot />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
