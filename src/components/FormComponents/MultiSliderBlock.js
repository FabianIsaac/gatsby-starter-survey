import React, { Fragment, forwardRef, useEffect, useState } from "react";
import { Divider, Grid, Slider, Container, Typography } from "@mui/material";

const MultiSliderBlock = forwardRef((props, ref) => {
	const { parameters, configurations, number } = props;

	const { min, max, step, defaultValue, labels } = configurations;
	const { inputs } = parameters;

	const [inputsHidden, setInputsHidden] = useState([]);

	useEffect(() => {
		setInputsHidden(inputs.map(() => defaultValue));
	}, [inputs, defaultValue]);

	return (
		<Container ref={ref}>
			<Grid
				marginTop={2}
				spacing={2}
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				{inputs.map((input, index) => {
					const handleChanges = (event, value) => {
						const newInputsHidden = [...inputsHidden];
						newInputsHidden[index] = value;
						setInputsHidden(newInputsHidden);
					};

					return (
						<Fragment key={`fragment_multisliderquestion_${number}_${index}`}>
							<Grid key={`item_4_${input.name}`} item xs={12} md={5}>
								<Typography>
									{/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
									<span dangerouslySetInnerHTML={{ __html: input.text }} />
								</Typography>
							</Grid>

							<Grid item key={`item_8_${input.name}`} xs={12} md={7}>
								<Slider
									defaultValue={defaultValue}
									valueLabelDisplay="auto"
									step={step}
									min={min}
									max={max}
									marks={labels}
									onChange={handleChanges}
								/>
								<input
									type="hidden"
									name={input.name}
									value={inputsHidden[index]}
								/>
							</Grid>
							{index !== inputs.length - 1 && (
								<Grid item xs={12}>
									<Divider />
								</Grid>
							)}
						</Fragment>
					);
				})}
			</Grid>
		</Container>
	);
});

export default MultiSliderBlock;
