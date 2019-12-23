import React from "react";
import "../Styles/Gallery.css";

function importAll(r) {
	return r.keys().map(r);
}
const images = importAll(
	require.context("../Assets/Gallery", false, /\.(png)$/)
);

const imageGallery = images.map(image => (
	<a key={image} href={image} className="image-link">
		<img alt={image} src={image} className="gallery-image" />
	</a>
));

const Gallery = () => {
	return (
		<div className="gallery-wrapper" id="gallery">
			<div className="gallery-description">Environment Concepts</div>
			{imageGallery}
		</div>
	);
};

export default Gallery;
