import React, { forwardRef } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

const ProminentMessageBlock = forwardRef((props, ref) => {
	const { children, configurations } = props;

	const { backgroundColor, color, variant } = configurations;

	return (
		<Grid
			ref={ref}
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			marginY={5}
		>
			<Grid item xs={12}>
				<Paper
					elevation={10}
					component={Box}
					padding={3}
					sx={{ backgroundColor: backgroundColor, color: color }}
				>
					<Typography variant={variant}>{children}</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
});

ProminentMessageBlock.propTypes = {
	children: PropTypes.node.isRequired,
	configurations: PropTypes.any.isRequired,
};

export default ProminentMessageBlock;
