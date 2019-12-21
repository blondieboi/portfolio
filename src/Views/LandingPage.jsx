import React from "react";
import "../Styles/LandingPage.css";
import $ from "jquery";

const scrollToEl = () => {
	document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
};

const LandingPage = () => {
	$(window).scroll(function() {
		$(".content-wrapper").css("opacity", 1 - $(window).scrollTop() / 150);
	});

	return (
		<div id="landing" className="landing-page">
			<div className="overlay">
				<div className="content-wrapper" id="mainContent">
					<div className="presentation-text">
						Working as the main 2d artistist of a production team creating
						everything from concepts to final ingame assets.
					</div>
					<div className="cta-button" onClick={scrollToEl}>
						Go to gallery
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
