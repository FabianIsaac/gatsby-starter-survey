import React, { forwardRef, useState } from "react";
import {
	Box,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import Slider from "@mui/material/Slider";

const SliderBlock = forwardRef((props, ref) => {
	const { parameters, configurations, number } = props;

	const { min, max, step, labels, defaultValue } = configurations;
	const { inputs } = parameters;

	const [inputHidden, setinputHidden] = useState(defaultValue);

	const handleChange = (event, newValue) => {
		typeof newValue === "object"
			? setinputHidden(event.target.value)
			: setinputHidden(newValue);
	};

	const options = [];
	for (let index = 0; index < max; index++) {
		const element = { label: index + 1, value: index + 1 };
		options.push(element);
	}

	return (
		<Grid container justifyContent={"center"} ref={ref}>
			<Grid item xs={10} marginTop={4}>
				<Box sx={{ display: { md: "block", xs: "none" } }}>
					<Slider
						aria-label="Marks"
						defaultValue={defaultValue}
						step={step}
						valueLabelDisplay="auto"
						min={min}
						max={max}
						size={"medium"}
						marks={labels}
						onChange={handleChange}
					/>
				</Box>

				<Box sx={{ display: { md: "none", xs: "block" } }}>
					<FormControl fullWidth>
						<InputLabel id={`responsive-label_${number}`}>
							Respuesta:
						</InputLabel>
						<Select
							labelId={`responsive-label_${number}`}
							id={`responsive_${number}`}
							label="Respuesta:"
							onChange={handleChange}
						>
							{options.map((option, index) => {
								return (
									<MenuItem key={`mi_${index}`} value={option.value}>
										{option.label}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Box>

				<input type="hidden" name={inputs[0].name} value={inputHidden} />
			</Grid>
		</Grid>
	);
});

export default SliderBlock;
