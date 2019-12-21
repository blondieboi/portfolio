import React from "react";
import "../Styles/Gallery.css";
import image1 from "../Assets/Gallery/image1.png";
import image2 from "../Assets/Gallery/image2.png";
import image3 from "../Assets/Gallery/image3.png";
import image4 from "../Assets/Gallery/image4.png";
import image5 from "../Assets/Gallery/image5.png";
import image6 from "../Assets/Gallery/image6.png";

const Gallery = () => {
	return (
		<div className="gallery-wrapper" id="gallery">
			<img src={image1} alt="" />
			<img src={image2} alt="" />
			<img src={image3} alt="" />
			<img src={image4} alt="" />
			<img src={image5} alt="" />
			<img src={image6} alt="" />
		</div>
	);
};

export default Gallery;
