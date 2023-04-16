import React, { forwardRef } from "react";
import { Container } from "@mui/material";
import GetBlock from "./GetBlock";
import FormBlock from "../FormComponents/FormBlock";

const GenerateBlocks = forwardRef((props, ref) => {
	const { blocks, assets } = props;
	return (
		<Container ref={ref}>
			<FormBlock>
				{blocks.map((block, index) => {
					return <GetBlock block={block} key={`block_${index}`} assets={assets} />;
				})}
			</FormBlock>
		</Container>
	);
});

export default GenerateBlocks;
