import React from "react";
import "../Styles/Gallery.css";

function importAll(r) {
	return r.keys().map(r);
}
const images = importAll(
	require.context("../Assets/Gallery", false, /\.(png)$/)
);

const imageGallery = images.map(image => (
	<img key={image} alt={image} src={image} />
));

const Gallery = () => {
	return (
		<div className="gallery-wrapper" id="gallery">
			{imageGallery}
		</div>
	);
};

export default Gallery;
