import React, { Fragment, forwardRef } from "react";

import SliderBlock from "../FormComponents/SliderBlock";
import MultiSliderWhitHandlerBlock from "../FormComponents/MultiSliderWhitHandlerBlock";
import MultiSliderBlock from "../FormComponents/MultiSliderBlock";
import ComplementaryYesNoBlock from "../FormComponents/ComplementaryYesNoBlock";
import DuoYesNoBlock from "../FormComponents/DuoYesNoBlock";
import SimpleTextBlock from "../FormComponents/SimpleTextBlock";
import MultiSelectionBlock from "../FormComponents/MultiSelectionBlock";
import DemographicBlock from "../FormComponents/DemographicBlock";
import TitleBlock from "./TitleBlock";
import ProminentMessageBlock from "./ProminentMessageBlock";
import PaperBlock from "./PaperBlock";
import { Typography } from "@mui/material";

const GetBlock = forwardRef((props, ref) => {
	const { block, assets } = props;
	const { parameters, configurations, text, number } = block;

	switch (block.type) {
		case "slider":
			return (
				<PaperBlock>
					<Typography variant='body1'>
						<Typography variant='bold'>{number}.-</Typography> {text}
					</Typography>
					<SliderBlock
						ref={ref}
						parameters={parameters}
						configurations={configurations}
						number={number}
					/>
				</PaperBlock>
			);

		case "multi_slider_whit_handler":
			return (
				<PaperBlock>
					<Typography variant='body1'>
						<Typography variant='bold'>{number}.-</Typography> {text}
					</Typography>
					<MultiSliderWhitHandlerBlock
						ref={ref}
						parameters={parameters}
						configurations={configurations}
						number={number}
					/>
				</PaperBlock>
			);

		case "multi_slider":
			return (
				<PaperBlock>
					<Typography variant='body1'>
						<Typography variant='bold'>{number}.-</Typography> {text}
					</Typography>
					<MultiSliderBlock
						ref={ref}
						parameters={parameters}
						configurations={configurations}
						number={number}
					/>
				</PaperBlock>
			);

		case "complementary_yes_no":
			return (
				<PaperBlock>
					<Typography variant='body1'>
						<Typography variant='bold'>{number}.-</Typography> {text}
					</Typography>
					<ComplementaryYesNoBlock
						ref={ref}
						parameters={parameters}
						number={number}
					/>
				</PaperBlock>
			);

		case "duo_yes_no":
			return (
				<PaperBlock>
					<Typography variant='body1'>
						<Typography variant='bold'>{number}.-</Typography> {text}
					</Typography>
					<DuoYesNoBlock ref={ref} parameters={parameters} number={number} assets={assets}/>
				</PaperBlock>
			);

		case "simple_text":
			return (
				<PaperBlock>
					<Typography variant='body1'>
						<Typography variant='bold'>{number}.-</Typography> {text}
					</Typography>
					<SimpleTextBlock ref={ref} parameters={parameters} number={number} />
				</PaperBlock>
			);

		case "multi_selection":
			return (
				<PaperBlock>
					<Typography variant='body1'>
						<Typography variant='bold'>{number}.-</Typography> {text}
					</Typography>
					<MultiSelectionBlock
						ref={ref}
						parameters={parameters}
						configurations={configurations}
						number={number}
					/>
				</PaperBlock>
			);

		case "demographic":
			return (
				<PaperBlock>
					<DemographicBlock parameters={parameters} number={number} />
				</PaperBlock>
			);

		case "title":
			return (
				<TitleBlock ref={ref} configurations={configurations}>
					{block.text}
				</TitleBlock>
			);

		case "prominent":
			return (
				<ProminentMessageBlock ref={ref} configurations={configurations}>
					{block.text}
				</ProminentMessageBlock>
			);
		default:
			return <Fragment>Default {block.type}</Fragment>;
	}
});

export default GetBlock;
