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

	//console.log(color2);
	//console.log(color);

	return (
		<div className="container">
			<div className="rectangulo">
				<div
					className={color2}
					onClick={() => setColor2("resplandored")}></div>

				<div
					className={color}
					onClick={() => setColor("resplandorAmarillo")}></div>
				<div
					className={color3}
					onClick={
						() => setColor3("resplandorVerde")
						//alert ("hola")
					}></div>
			</div>
		</div>
	);
};
export default Home;
