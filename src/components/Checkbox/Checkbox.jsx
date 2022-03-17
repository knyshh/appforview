import React from 'react';
import StyledCheckbox from "./styled/StyledCheckbox";

const Checkbox = ({children, input, ...props}) => {
	return (
	<StyledCheckbox {...input} {...props}>
		{children}
	</StyledCheckbox>
)};

export default Checkbox;


