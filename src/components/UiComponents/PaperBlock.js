import React, { forwardRef } from "react";
import { Box, Paper } from "@mui/material";

const PaperBlock = forwardRef((props, ref) => {
	const { children } = props;
	return (
		<Paper ref={ref} elevation={3} component={Box} mb={7} mt={3} p={3} >
			{children}
		</Paper>
	);
});


export default PaperBlock;
