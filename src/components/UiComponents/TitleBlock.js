import React, { forwardRef } from "react";
import { Grid, Typography } from "@mui/material";
import { PropTypes } from "prop-types";

const TitleBlock = forwardRef((props, ref) => {
	const { children, configurations } = props;
	const { color, variant } = configurations;

	return (
		<Grid
			ref={ref}
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			spacing={0}
			marginTop={5}
			marginBottom={2}
		>
			<Grid item xs={12}>
				<Typography
					variant={variant || "h4"}
					sx={{ color: color || "primary.main" }}
				>
					{children}
				</Typography>
			</Grid>
		</Grid>
	);
});

TitleBlock.propTypes = {
	children: PropTypes.node.isRequired,
	configurations: PropTypes.any,
};

export default TitleBlock;
