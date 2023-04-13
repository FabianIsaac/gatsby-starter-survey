import React, { forwardRef } from "react";
import { Container, Grid, TextField } from "@mui/material";

const SimpleTextBlock = forwardRef((props, ref) => {
	const { parameters, number } = props;

	const { name, placeholder } = parameters;

	return (
		<Container ref={ref}>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				marginTop={2}
			>
				<Grid item xs>
					<TextField
						fullWidth
						id={number + name}
						multiline
						rows={4}
						placeholder={placeholder}
						name={name}
					/>
				</Grid>
			</Grid>
		</Container>
	);
});

export default SimpleTextBlock;
