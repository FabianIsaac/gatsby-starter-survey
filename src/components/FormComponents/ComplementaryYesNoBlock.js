import React, { forwardRef, useState } from "react";
import {
	Box,
	Grid,
	Stack,
	Switch,
	Typography,
	Container,
	TextField,
} from "@mui/material";

const ComplementaryYesNoBlock = forwardRef((props, ref) => {
	const { parameters, number } = props;

	const { inputs, complementCondition, complementInput } = parameters;
	const complement = inputs.find((input) => input.name === complementInput);

	const handleSwitch = () => setdisableTextArea(!disableTextArea);

	const [disableTextArea, setdisableTextArea] = useState(complementCondition);

	return (
		<Container ref={ref} key={number}>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				marginTop={2}
			>
				<Grid item xs={12} md={4}>
					<Stack
						direction="row"
						spacing={1}
						justifyContent="center"
						alignItems="center"
					>
						<Typography>No</Typography>
						<Switch onChange={handleSwitch} name={inputs[0].name} />
						<Typography>Sí</Typography>
					</Stack>
				</Grid>

				<Grid item xs={12} md={8}>
					<Box
						sx={{
							minWidth: "100%",
							display: {
								xs: disableTextArea ? "none" : "block",
								md: "block",
							},
						}}
					>
						<TextField
							fullWidth
							disabled={disableTextArea}
							id={complement.name}
							label={complement.text}
							name={complement.name}
							multiline
							rows={4}
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
});


export default ComplementaryYesNoBlock;
