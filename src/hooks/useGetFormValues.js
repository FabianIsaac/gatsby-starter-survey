const useGetFormValues = () => {
	const getYesNo = (value) => (value ? "si" : "no");

	const getFormValues = () => {
		const inputs = document.querySelectorAll("input, textarea, select");
		const values = {};

		for (let i = 0; i < inputs.length; i++) {
			const name = inputs[i].name;
			if (name === "") {
				continue;
			}
			const value =
				inputs[i].type !== "checkbox"
					? inputs[i].value
					: getYesNo(inputs[i].checked);
			values[name] = inputs[i].disabled ? "" : value;
		}

		return values;
	};

	return {
		getFormValues,
		getYesNo,
	};
};

export default useGetFormValues;
