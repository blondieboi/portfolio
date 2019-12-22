import React from "react";
import "./App.css";
import Header from "./Components/Header";
import LandingPage from "./Views/LandingPage";
import Gallery from "./Views/Gallery";
import Resume from "./Views/Resume";

function App() {
	return (
		<div className="App">
			<Header />
			<LandingPage />
			<Gallery />
			<Resume />
		</div>
	);
}

export default App;
