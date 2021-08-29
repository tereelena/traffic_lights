import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// css

//create your first component
const Home = () => {
	const [color, setColor] = useState("circuloAmarillo");
	const [color2, setColor2] = useState("circuloRojo");
	const [color3, setColor3] = useState("circuloVerde");
	const [opened, setOpened] = useState(true);

	//console.log(color2);
	//console.log(color);

	return (
		<div className="container">
			<div className="rectangulo">
				<div
					className={color2}
					onClick={() => {
						setColor2("resplandored"),
							setColor("circuloAmarillo"),
							setColor3("circuloVerde");
					}}></div>

				<div
					className={color}
					onClick={() => {
						setColor("resplandorAmarillo"),
							setColor2("circuloRojo"),
							setColor3("circuloVerde");
					}}></div>
				<div
					className={color3}
					onClick={() => {
						setColor3("resplandorVerde"),
							setColor("circuloAmarillo"),
							setColor2("circuloRojo");
					}}></div>
			</div>
		</div>
	);
};
export default Home;
