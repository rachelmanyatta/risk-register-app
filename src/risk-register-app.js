import React, { useContext, useEffect } from "react";
import "./sass/App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import View from "./pages/View";
import Contact from "./pages/Contact";
import DarkModeContext from "./context/DarkModeContext";
import { RiskProvider } from "./context/RiskContext";
import Login from '../src/pages/Login'; 
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/Forgotpassword";

function App() {
	const { darkMode } = useContext(DarkModeContext);

	// Change Body Dark Mode Background
	useEffect(() => {
		document.body.className = darkMode === "light" ? "lightBody" : "darkBody";
	}, [darkMode]);

	return (
			<RiskProvider>
				<Navbar />
				<Routes>
					<Route exact path="/risk-register-app" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/view" element={<View />} />
					<Route path="/Register" element={<Register />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Signup" element={<Signup />} />
					<Route path="/Forgotpassword" element={<ForgotPassword />} />
				</Routes>
			</RiskProvider>
	);
}

export default App;
