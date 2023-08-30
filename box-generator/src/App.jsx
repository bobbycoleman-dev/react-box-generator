import Box from "./components/Box";
import Form from "./components/Form";
import { useState } from "react";

function App() {
	const [box, setBox] = useState([]);

	const sendBoxInfo = (newBox) => {
		setBox([...box, newBox]);
	};
	console.log(box);
	return (
		<div className="container mt-3">
			<Form receiveBoxInfo={sendBoxInfo} />
			<div className="w-75 d-flex flex-wrap justify-content-center mx-auto shadow rounded">
				{box.map((box) => (
					<Box boxColor={box.color} boxSize={box.size} />
				))}
			</div>
		</div>
	);
}

export default App;
