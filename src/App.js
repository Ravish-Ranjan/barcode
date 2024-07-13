import { useRef, useState } from "react";
import { Typography, Button, TextField } from "@mui/material";
import Barcode from "react-barcode";
import "./app.css";
import Download from "./Download";
import html2canvas from "html2canvas";
import download from "downloadjs";

function App() {
	const [value, setValue] = useState("");
	const barcodeRef = useRef(null);
	const [config, setCol] = useState({
		lineColor: "#000000",
		background: "#ffffff",
	});

	const handleDownload = () => {
		html2canvas(barcodeRef.current).then((canvas) => {
			const dataUrl = canvas.toDataURL();
			download(dataUrl, `barcode_${value.replace(" ", "_")}.png`);
		});
	};

	return (
		<div className="card">
			<Typography variant="h4" className="heading">
				Barcode Generator
			</Typography>
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
				ref={barcodeRef}
			>
				<Barcode
					value={value === "" ? "barcode" : value}
					{...config}
					className="code"
				/>
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
			<Button
				disabled={value === ""}
				variant="contained"
				endIcon={<Download />}
				onClick={handleDownload}
			>
				Download
			</Button>
		</div>
	);
}

export default App;
