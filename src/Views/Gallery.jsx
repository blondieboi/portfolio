import React from "react";
import "../Styles/Gallery.css";

function importAll(r) {
	return r.keys().map(r);
}
const images = importAll(
	require.context("../Assets/Gallery", false, /\.(png)$/)
);

const imageGallery = images.map(image => (
	<img
		key={image}
		alt={image}
		src={image}
		onClick={() => {
			document.getElementById("myModal").style.display = "block";
			document.getElementById("img01").src = image;
		}}
		className="gallery-image"
	/>
));

const Gallery = () => {
	return (
		<div className="gallery-wrapper" id="gallery">
			{imageGallery}
			<div id="myModal" className="modal">
				<span
					className="close"
					onClick={() => {
						document.getElementById("myModal").style.display = "none";
					}}
				>
					&times;
				</span>
				<img className="modal-content" id="img01" />
			</div>
		</div>
	);
};

export default Gallery;
