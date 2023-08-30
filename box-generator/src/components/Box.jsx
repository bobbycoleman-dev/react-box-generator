const Box = (props) => {
	return (
		<div
			className="m-3 shadow rounded"
			style={{ height: props.boxSize, width: props.boxSize, backgroundColor: `${props.boxColor}` }}></div>
	);
};

export default Box;
