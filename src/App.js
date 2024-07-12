import { useState } from "react";
import Barcode from "react-barcode";
import TextField from "@mui/material/TextField";
import "./app.css";
import { Typography } from "@mui/material";

function App() {
	const [value, setValue] = useState("");
	const [config, setCol] = useState({
		lineColor: "#000000",
		background: "#ffffff",
	});
	return (
		<div className="card">
			<Typography variant="h4" className="heading">Barcode Generator</Typography>
			<div
				style={{
					width: "100%",
					height: "auto",
					overflowX: "auto",
					display: "grid",
					placeItems: "center",
					outline: "1px solid black",
					borderRadius: ".5rem",
				}}
			>
				<Barcode value={value === "" ? "barcode" : value} {...config} className="code" />
			</div>
			<TextField
				label="Enter Barcode Value"
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
			<div className="inline">
				<TextField
					value={config.lineColor}
					type="color"
					label="Line Color"
					className="color"
					onChange={(e) => {
						setCol({ ...config, lineColor: e.target.value });
					}}
				/>
				<TextField
					value={config.background}
					type="color"
					label="Background Color"
					className="color"
					onChange={(e) => {
						setCol({ ...config, background: e.target.value });
					}}
				/>
			</div>
		</div>
	);
}

export default App;
