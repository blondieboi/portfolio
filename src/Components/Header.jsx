import React, { useState } from "react";
import "../Styles/Header.css";

const Header = () => {
	const [activeNav, setActiveNav] = useState(true);

	function toggleNav() {
		setActiveNav(!activeNav);
		if (activeNav) {
			document.getElementById("sideNav").style.visibility = "visible";
			document.getElementById("mainContent").style.visibility = "hidden";
		} else {
			document.getElementById("sideNav").style.visibility = "hidden";
			document.getElementById("mainContent").style.visibility = "visible";
		}
	}

	return (
		<div className="header-wrapper">
			<div className="title-wrapper">
				<h2
					onClick={() => {
						document
							.getElementById("landing")
							.scrollIntoView({ behavior: "smooth" });
					}}
				>
					JW
				</h2>
			</div>
			<div className="links-wrapper">
				<a
					onClick={() => {
						document
							.getElementById("gallery")
							.scrollIntoView({ behavior: "smooth" });
					}}
				>
					Gallery
				</a>
				<a>Resume</a>
				<a>Contact Me</a>
			</div>
			<div
				className={`hamburger-wrapper ${!activeNav ? "change" : ""}`}
				onClick={toggleNav}
			>
				<div className={"bar1"}></div>
				<div className={"bar2"}></div>
				<div className={"bar3"}></div>
			</div>
			<div id="sideNav" className="sidenav">
				<p
					onClick={() => {
						document
							.getElementById("gallery")
							.scrollIntoView({ behavior: "smooth" });
						toggleNav();
					}}
				>
					Gallery
				</p>
				<p>Resume</p>
				<p>Contact Me</p>
			</div>
		</div>
	);
};

export default Header;
