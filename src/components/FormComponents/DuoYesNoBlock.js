import React, { Fragment, forwardRef, useState } from "react";
import {
	Container,
	Divider,
	Grid,
	Stack,
	Switch,
	Typography,
	Box,
} from "@mui/material";

const DuoYesNoBlock = forwardRef((props, ref) => {
	const { parameters, number, assets } = props;
	const { headers, cols, inputs } = parameters;

	const [checkboxA, setcheckboxA] = useState([]);

	const getResource = (resource_id) => {
		const resource = assets.find((asset) => asset.id === resource_id);
		return (
			<Box
				sx={{
					width: { xs: "200px", md: "50%" },
					marginX: { xs: "auto", md: "0" },
				}}
			>
				<img
					src={resource.src.publicURL}
					width="100%"
					alt={resource.alt}
					style={{ display: "block" }}
				/>
			</Box>
		);
	};

	return (
		<Container sx={{ paddingTop: 2, paddingX: 1 }} ref={ref}>
			<Box sx={{ display: { md: "block", xs: "none" } }}>
				<Grid container>
					<Grid item xs={12} md={4}>
						&nbsp;
					</Grid>
					{headers.map((header, index) => {
						return (
							<Grid
								key={`header_${number}_${index}`}
								item
								xs={12}
								md={4}
								textAlign={"center"}
							>
								<Typography variant="body1">
									{/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
									<span dangerouslySetInnerHTML={{ __html: header }} />
								</Typography>
							</Grid>
						);
					})}
				</Grid>
			</Box>

			<Grid container alignItems={"center"}>
				{cols.map((row, index) => {
					const handleSwitch = (event) => {
						const { checked } = event.target;
						const newCheckboxList = [...checkboxA];

						newCheckboxList[index] = checked;
						setcheckboxA(newCheckboxList);
					};

					return (
						<Fragment key={`fragment_duoyesnoquestion_${number}_${index}`}>
							<Grid item xs={12}>
								<Divider />
							</Grid>

							<Grid
								item
								xs={12}
								md={4}
								marginY={2}
								textAlign={{ xs: "center", md: "left" }}
							>
								{row.resource && getResource(row.resource)}

								<Typography>
									{/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
									<span dangerouslySetInnerHTML={{ __html: row.text }} />
								</Typography>
							</Grid>

							<Grid item xs={12} md={4} marginY={1}>
								<Stack
									direction="row"
									spacing={1}
									justifyContent="center"
									alignItems="center"
								>
									<Typography textAlign={"center"}>
										{inputs[0].data_a[index].negative_text}
									</Typography>
									<Switch
										onChange={handleSwitch}
										name={inputs[0].data_a[index].name}
									/>
									<Typography>
										{inputs[0].data_a[index].positive_text}
									</Typography>
								</Stack>
							</Grid>

							<Grid item xs={12} md={4} marginY={1}>
								<Stack
									direction="row"
									spacing={1}
									justifyContent="center"
									alignItems="center"
								>
									<Typography textAlign={"center"}>
										{inputs[0].data_b[index].negative_text}
									</Typography>
									<Switch
										disabled={!checkboxA[index]}
										name={inputs[0].data_b[index].name}
									/>
									<Typography textAlign={"center"}>
										{inputs[0].data_b[index].positive_text}
									</Typography>
								</Stack>
							</Grid>
						</Fragment>
					);
				})}
			</Grid>
		</Container>
	);
});

export default DuoYesNoBlock;
