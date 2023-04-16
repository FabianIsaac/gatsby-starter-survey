import { Button, Grid } from "@mui/material";
import React, { forwardRef } from "react";
import SendIcon from "@mui/icons-material/Send";

const FormBlock = forwardRef((props, ref) => {
	const { children } = props;

	return (
		<form ref={ref}>
			{children}

			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				marginBottom={4}
			>
				<Grid item xs={12} sm={3} md={2}>
					<Button
						variant="contained"
						fullWidth
						color="primary"
						type="submit"
						endIcon={<SendIcon />}
					>
						Enviar
					</Button>
				</Grid>
			</Grid>
		</form>
	);
});

// FormBlock.propTypes = {
// 	children: PropTypes.node.isRequired
// };

export default FormBlock;
