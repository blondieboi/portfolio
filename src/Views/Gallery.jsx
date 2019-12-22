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
			document.getElementById("modal").style.display = "block";
			document.getElementById("modalImage").src = image;
		}}
		className="gallery-image"
	/>
));

const Gallery = () => {
	return (
		<div className="gallery-wrapper" id="gallery">
			{imageGallery}
			<div id="modal" className="modal">
				<span
					className="close"
					onClick={() => {
						document.getElementById("modal").style.display = "none";
					}}
				>
					&times;
				</span>
				<img className="modal-content" id="modalImage" alt="modal-img" />
			</div>
		</div>
	);
};

export default Gallery;
