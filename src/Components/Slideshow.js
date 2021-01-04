import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = ({ slides }) => {
	// images / portfolio / cars.png;
	// const slideImages = ["/images/portfolio/hack1.jpg", "/images/portfolio/hack2.jpg","/images/portfolio/hack3.jpg", "/images/portfolio/hack2.jpg"];
	const [curr, setCurr] = useState(0);
	const [loaded, setLoad] = useState(false);
	const { length } = slides;

	const goToNext = () => {
		setCurr(curr === length - 1 ? 0 : curr + 1);
	};

	useEffect(() => {
		setTimeout(goToNext, 3500);
	});
	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	const ready = () => {
		setLoad(true);
	};
	return (
		<section className="slider">
			{slides.map((s, i) => (
				<div className={i === curr ? "slide active" : "slide"} key={s.title} aria-hidden={i !== curr}>
					{i === curr && <img className="image" src={s.image} />}
					{/* {loaded && ( */}
					{/* <div> */}
					{/* <div style={{ top: "85%", position: "absolute" }}> */}
					<h2>{s.title}</h2>
					<h3>{s.subtitle}</h3>
					{/* </div> */}
					{/* )} */}
				</div>
			))}
		</section>
	);
};
// }

export default Slideshow;
