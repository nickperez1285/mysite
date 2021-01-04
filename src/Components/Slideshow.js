import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Slideshow = ({ slides }) => {
	const [curr, setCurr] = useState(0);
	const [loaded, setLoad] = useState(false);
	const { length } = slides;

	const goToNext = () => {
		setCurr(curr === length - 1 ? 0 : curr + 1);
	};

	useEffect(() => {
		setTimeout(goToNext, 2500);
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
					{/* <img className="image" src={s.image} onLoad={() => ready()} /> */}
					<img className="image" src={s.image} />
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
// };const Slideshow = ({ images = [], interval = 3000 }) => {
// 	const [thumbnails, setThumnails] = useState([]);
// 	const [currentSlide, setCurrentSlide] = useState(0);
//     const [currentSlideStyle, setCurrentSlideStyle] = useState({});
//     useEffect(() => {
// 			setThumnails(images);
// 			setCurrentSlideStyle({
// 				backgroundImage: "url('" + images[currentSlide] + "')",
// 			});
// 		}, [images, currentSlide]);

// 	return (
// 		<section className="slideshow">
// 			<div className="slide-holder">
// 				<section className="slide previous-slide">
// 					<div className="slide-thumbnail"></div>
// 				</section>
// 				<section className="slide current-slide">
// 					<div style={currentSlideStyle} className="slide-thumbnail"></div>
// 				</section>
// 				<section className="slide next-slide">
// 					<div className="slide-thumbnail"></div>
// 				</section>
// 			</div>

// 			<div className="slideshow-controller">
// 				<span>Previous</span>
// 				<span>Next</span>
// 			</div>
// 		</section>
// 	);
// };

export default Slideshow;
