import React, { Fragment, forwardRef, useEffect, useState } from "react";
import {
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
} from "@mui/material";

const MultiSelectionBlock = forwardRef((props, ref) => {
	const { parameters, configurations, number } = props;

	const { inputs } = parameters;
	const { information_text, max, helper_text, validations } = configurations;

	const [checkboxList, setcheckboxList] = useState([]);
	const [disableInputs, setdisableInputs] = useState([]);

	const seleccionados = checkboxList.filter((v) => v).length;
	const error = seleccionados !== max;

	const disableAllOn = (value, aux) => {
		const auxo = aux.filter((v) => v).length;
		if (auxo >= value) {
			const newDisableInputs = disableInputs.map((v, i) =>
				!aux[i] ? true : false,
			);
			setdisableInputs(newDisableInputs);
		} else {
			setdisableInputs(disableInputs.map(() => false));
		}
	};

	useEffect(() => {
		setdisableInputs(inputs.map(() => false));
	}, [inputs]);

	return (
		<FormControl
			ref={ref}
			required
			error={error}
			component="fieldset"
			sx={{ mt: 3, px: 3 }}
			variant="standard"
			fullWidth
		>
			{information_text && (
				<Divider textAlign="left">
					<FormLabel component="legend">{information_text}</FormLabel>
				</Divider>
			)}

			{inputs.map((input, index) => {
				const handleCheckbox = (event) => {
					setcheckboxList(() => {
						const { checked } = event.target;
						const newCheckboxList = [...checkboxList];
						newCheckboxList[index] = checked;

						if (validations !== void 0) {
							const { type, value } = validations[0];

							if (type === "disable_all_on") {
								disableAllOn(value, newCheckboxList);
							}
						}
						return newCheckboxList;
					});
				};

				return (
					<Fragment key={`multiselectionquestion_${number}_${index}`}>
						<FormControlLabel
							sx={{ py: 1 }}
							control={
								<Checkbox
									disabled={disableInputs[index]}
									name={input.name}
									onChange={handleCheckbox}
								/>
							}
							label={
								// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
								<span dangerouslySetInnerHTML={{ __html: input.text }} />
							}
						/>
						{inputs[index + 1] !== void 0 ? (
							<Divider variant='middle' />
						) : (
							helper_text && (
								<Divider textAlign="left">
									<FormHelperText>
										Seleccionados: {seleccionados} de {max}
									</FormHelperText>
								</Divider>
							)
						)}
					</Fragment>
				);
			})}
		</FormControl>
	);
});


export default MultiSelectionBlock;
