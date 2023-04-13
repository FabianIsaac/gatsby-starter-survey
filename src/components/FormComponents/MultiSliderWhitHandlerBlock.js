import React, { forwardRef, useState, useEffect, Fragment } from "react";
import {
	Checkbox,
	Container,
	Divider,
	FormControlLabel,
	FormGroup,
	Grid,
	Slider,
	Typography,
} from "@mui/material";

const MultiSliderWhitHandlerBlock = forwardRef((props, ref) => {
	const { parameters, configurations, number } = props;

	const { min, max, step, defaultValue, labels } = configurations;
	const { inputs } = parameters;

	const [disableCheckbox, setdisableCheckbox] = useState([]);
	const [sliderValues, setsliderValues] = useState([]);
	const [inputsHidden, setInputsHidden] = useState([]);

	useEffect(() => {
		setInputsHidden(inputs.map(() => defaultValue));
	}, [inputs, defaultValue]);

	return (
		<Container ref={ref} key={number}>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				{inputs.map((input, index) => {
					//cada vez que se actualice el sliderValues, actualizaremos el inputsHidden
					const updateInputsHidden = (newValue) => {
						const newInputsHidden = [...inputsHidden];
						newInputsHidden[index] = newValue;
						setInputsHidden(newInputsHidden);
					};

					//crearemos un array para cada checkbox, este checkbox deshabilitara el slider
					const handleCheckbox = (event) => {
						const { checked } = event.target;
						const newDisableCheckbox = [...disableCheckbox];
						newDisableCheckbox[index] = checked;
						setdisableCheckbox(newDisableCheckbox);
						if (checked) {
							updateInputsHidden("NC/NU");
						} else {
							updateInputsHidden(sliderValues[index]);
						}
					};

					//crearemos un array para cada slider, este slider guardara el valor
					const handleSlider = (event, value) => {
						const newSliderValues = [...sliderValues];
						newSliderValues[index] = value;
						setsliderValues(newSliderValues);
						updateInputsHidden(value);
					};

					return (
						<Fragment key={`fragment_multisliderwhithandlequestion_${index}`}>
							{index !== 0 && (
								<Grid item xs={12}>
									<Divider />
								</Grid>
							)}
							<Grid
								xs={12}
								md={4}
								item
								textAlign={{ xs: "center", md: "left" }}
								marginY={2}
							>
								<Typography>
									{/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
									<span dangerouslySetInnerHTML={{ __html: input.text }} />
								</Typography>
							</Grid>
							<Grid
								item
								xs={12}
								md={3}
								display="flex"
								justifyContent="center"
								alignItems="center"
								marginY={2}
							>
								<FormGroup>
									<FormControlLabel
										control={<Checkbox onChange={handleCheckbox} />}
										label="NC/NU"
									/>
								</FormGroup>
							</Grid>
							<Grid item xs={12} md={5} marginY={2}>
								<Slider
									defaultValue={defaultValue}
									valueLabelDisplay="auto"
									step={step}
									min={min}
									max={max}
									marks={labels}
									onChange={handleSlider}
									disabled={disableCheckbox[index]}
								/>
								<input
									type="hidden"
									name={input.name}
									value={inputsHidden[index]}
								/>
							</Grid>
						</Fragment>
					);
				})}
			</Grid>
		</Container>
	);
});

export default MultiSliderWhitHandlerBlock;
