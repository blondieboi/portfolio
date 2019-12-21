import React from "react";
import "./App.css";
import Header from "./Components/Header";
import LandingPage from "./Views/LandingPage";
import Gallery from "./Views/Gallery";

function App() {
	return (
		<div className="App">
			<Header />
			<LandingPage />
			<Gallery />
		</div>
	);
}

export default App;
