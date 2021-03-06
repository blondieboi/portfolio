import React from "react";
import "../Styles/Gallery.css";

function importAll(r) {
	return r.keys().map(r);
}
const images = importAll(
	require.context("../Assets/Gallery", false, /\.(webp)$/)
);

const png = importAll(require.context("../Assets/Gallery", false, /\.(png)$/));

const imageGallery = images.map((image, i) => (
	<a key={image} href={png[i]} target="_blank" className="image-link">
		<img alt={image} src={image} className="gallery-image" />
	</a>
));

const Gallery = () => {
	return (
		<div className="gallery-wrapper" id="gallery">
			{imageGallery}
		</div>
	);
};

export default Gallery;
