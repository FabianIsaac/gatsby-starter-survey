import React, { forwardRef } from "react";
import { Container, Grid, Typography } from "@mui/material";
import WelcomeBlock from "./WelcomeBlock";
import AdvertisementBlock from "./AdvertisementBlock";

const Header = forwardRef((props, ref) => {
	const { header } = props;
	const { welcome, advertisement, custom_background, thanks } = header;
	return (
		<Container ref={ref}>
			{custom_background && (
				<Grid container mb={5}>
					<Grid item xs>
						<img
							src={custom_background.src.publicURL}
							alt="background"
							width="100%"
						/>
					</Grid>
				</Grid>
			)}

			{welcome && <WelcomeBlock welcome={welcome} />}
			{advertisement && <AdvertisementBlock advertisement={advertisement} />}

			{ thanks && <Typography textAlign={'center'} variant="h4">{thanks.text}</Typography>}
		</Container>
	);
});

export default Header;
