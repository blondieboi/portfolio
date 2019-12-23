import React, { useState } from "react";
import "../Styles/Header.css";
import $ from "jquery";

const Header = () => {
	const [activeNav, setActiveNav] = useState(true);
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = 70;

	window.addEventListener(
		"scroll",
		function(e) {
			hasScrolled();
		},
		true
	);

	function hasScrolled() {
		var st = $(".view-wrapper").scrollTop();
		if (Math.abs(lastScrollTop - st) <= delta) return;
		if (st > lastScrollTop && st > navbarHeight && lastScrollTop !== 0) {
			$("header")
				.removeClass("nav-down")
				.addClass("nav-up");
		} else {
			if (st - lastScrollTop < 0) {
				$("header")
					.removeClass("nav-up")
					.addClass("nav-down");
			}
		}
		lastScrollTop = st;
	}

	function toggleNav() {
		setActiveNav(!activeNav);
		if (activeNav) {
			document.getElementById("sideNav").style.visibility = "visible";
			document.getElementById("mainContent").style.visibility = "hidden";
			document.getElementById("resumeContent").style.visibility = "hidden";
		} else {
			document.getElementById("sideNav").style.visibility = "hidden";
			document.getElementById("mainContent").style.visibility = "visible";
			document.getElementById("resumeContent").style.visibility = "visible";
		}
	}

	return (
		<header className="header-wrapper nav-down">
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
				<p
					onClick={() => {
						document
							.getElementById("gallery")
							.scrollIntoView({ behavior: "smooth" });
					}}
				>
					Gallery
				</p>
				<p
					onClick={() => {
						document
							.getElementById("resume")
							.scrollIntoView({ behavior: "smooth" });
					}}
				>
					Resume
				</p>
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
				<p
					onClick={() => {
						document
							.getElementById("resume")
							.scrollIntoView({ behavior: "smooth" });
						toggleNav();
					}}
				>
					Resume
				</p>
			</div>
		</header>
	);
};

export default Header;
