import React from "react";
import "../Styles/LandingPage.css";

const LandingPage = () => {
	return (
		<div id="landing" className="landing-page parallax">
			<div className="overlay">
				<div className="content-wrapper" id="mainContent">
					<div className="presentation-text">
						Working as the main 2d artistist of a production team creating
						everything from concepts to final ingame assets.
					</div>
					<div
						className="cta-button"
						onClick={() => {
							document
								.getElementById("gallery")
								.scrollIntoView({ behavior: "smooth" });
						}}
					>
						Go to gallery
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
