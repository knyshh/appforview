import React from 'react';
import StyledInput from './styled/StyledInput';

const Input = ({input,...props}) => (
	<StyledInput
		{...props}
		{...input}
	/>
);

export default Input;


