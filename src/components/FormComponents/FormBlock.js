import React, { forwardRef } from "react";
// import { PropTypes } from "prop-types";

const FormBlock = forwardRef((props, ref) => {
	const { children } = props;


	return (
		<form ref={ref}>
            {children}
        </form>
	);
});

// FormBlock.propTypes = {
// 	children: PropTypes.node.isRequired
// };

export default FormBlock;
