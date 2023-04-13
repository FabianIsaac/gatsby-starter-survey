import React, { Fragment, forwardRef } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const DemographicBlock = forwardRef((props, ref) => {
	const { parameters, number } = props;
	const { inputs } = parameters;

	return (
		<Fragment ref={ref}>
			{inputs.map((input, index) => {
				return (
					<FormControl
						key={`fc_${number}_${index}`}
						fullWidth
						component={Box}
						sx={{ marginTop: 3 }}
					>
						<InputLabel id="demo-simple-select-label">{input.text}</InputLabel>
						<Select
							name={input.parameters.name}
							labelId={`label_${index}`}
							id={`id_${index}`}
							label={input.text}
						>
							{input.parameters.options.map((option, index) => (
								<MenuItem key={`mi_${number}_${index}`} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				);
			})}
		</Fragment>
	);
});

export default DemographicBlock;
