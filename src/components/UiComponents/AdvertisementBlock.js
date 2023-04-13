import React, { forwardRef } from "react";
import { Grid, Typography, Box } from "@mui/material";

const AdvertisementBlock = forwardRef((props, ref) => {
	const { advertisement } = props;

	return (
		<Grid container ref={ref}>
			<Grid item xs={12}>
				<Box sx={{ textAlign: "left" }} pt={5}>
					<Typography variant='h5'>
						<Typography variant="bold" sx={{ color: "#7db916" }}>
							{advertisement.head}
						</Typography>
					</Typography>
					<ul>
						{advertisement.points.map((point, index) => (
							<li key={`li_${index}`}>
								<Typography key={`tp_${index}`}>{point}</Typography>
							</li>
						))}
					</ul>
				</Box>
			</Grid>
		</Grid>
	);
});

export default AdvertisementBlock;
