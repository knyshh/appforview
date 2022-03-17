import React from 'react';
import StyledSwitch from "components/Switch/styled/StyledSwitch";

const Switch = ({children, input, ...props}) => {
    return (
        <StyledSwitch {...input} {...props}>
            {children}
        </StyledSwitch>
    )};

export default Switch;