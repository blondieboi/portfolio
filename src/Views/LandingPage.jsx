import React from "react";
import "../Styles/LandingPage.css";
import $ from "jquery";

const LandingPage = () => {
	window.addEventListener(
		"scroll",
		function(e) {
			opacityScrolled();
		},
		true
	);

	function opacityScrolled() {
		var xPos = $(".view-wrapper").scrollTop();
		var lHeight = $(".landing-page").outerHeight();
		var scrollPercent = (lHeight - xPos) / lHeight;
		if (scrollPercent >= 0) {
			var alpha = 0.7 + (1 - scrollPercent) * 0.3;

			$(".overlay").css("background-color", "rgba(0,0,0," + alpha + ")");
		}
	}

	return (
		<div id="landing" className="landing-page parallax">
			<div className="overlay" id="overlay">
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
