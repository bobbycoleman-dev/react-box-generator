import { useState } from "react";

const Form = (props) => {
	const [color, setColor] = useState("");
	const [size, setSize] = useState(150);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.receiveBoxInfo({ color: color, size: parseInt(size) });
		setColor("");
		setSize(150);
	};

	return (
		<div className="mb-3">
			<form onSubmit={handleSubmit} className="form d-flex gap-3 align-items-center justify-content-center">
				<div className="mb-3">
					<div className="d-flex gap-2 align-items-center mb-3">
						<div className="w-25 text-end">Color</div>
						<div className="w-75">
							<input
								type="text"
								className="form-control"
								onChange={(e) => setColor(e.target.value)}
								value={color}
							/>
						</div>
					</div>
					<div className="d-flex gap-2 align-items-center">
						<div className="w-25 text-end">Size (px)</div>
						<div className="w-75">
							<input
								type="number"
								className="form-control"
								onChange={(e) => setSize(e.target.value)}
								value={size}
							/>
						</div>
					</div>
				</div>
				<div>
					<button type="submit" className="btn btn-success">
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
