import React from "react";
import "../Styles/Resume.css";
import pic from "../Assets/profile.jpeg";
import instagram from "../Assets/Social/instagram.png";
import linkedin from "../Assets/Social/linkedin.png";
import artstation from "../Assets/Social/artstation.png";

const Resume = () => {
	return (
		<div id="resume" className="resume-wrapper">
			<div className="resume-header">
				<div className="pic-wrapper">
					<img src={pic} alt="" />
				</div>
				<div className="resume-text">
					<h1>Jonatan Wallén</h1>
					<h4>2D artist @ Quickspin</h4>
					<div className="social-links-container">
						<img src={instagram} alt="" />
						<img src={linkedin} alt="" />
						<img src={artstation} alt="" />
					</div>
					<p>E: wallenjonatan@gmail.com</p>
					<p>T: +46 (0) 70 184 4484</p>
				</div>
			</div>
			<div className="resume-description">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</p>
			</div>
			<div className="cv-wrapper">
				<div className="cv-item">
					<h3>2D artist</h3>
					<h4>Quickspin</h4>
					<p>Mar 2019 - Present</p>
					<p className="cv-item-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className="cv-item">
					<h3>Illustrator</h3>
					<h4>Self-employed</h4>
					<p>2016 - Present</p>
					<p className="cv-item-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<div className="cv-item">
					<h3>Concept Artist</h3>
					<h4>Fall Damage</h4>
					<p>Nov 2018 - Mar 2019</p>
					<p className="cv-item-description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Resume;
