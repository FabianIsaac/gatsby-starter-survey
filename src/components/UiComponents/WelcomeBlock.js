import React, { forwardRef } from "react";
import { Grid, Typography } from "@mui/material";

const WelcomeBlock = forwardRef((props, ref) => {
    const { welcome } = props;

	return (
		<Grid container ref={ref}>
			<Grid item xs={12}>
				<Typography variant='h4'>{welcome.head}</Typography>
			</Grid>

			<Grid item xs={12}>
				<Typography variant='sectionHeader'>{welcome.body}</Typography>
			</Grid>
		</Grid>
	);
});

export default WelcomeBlock;
