import React from 'react';
import StyledControlWrapper from './styled/StyledControlWrapper'
import StyledLabel from './styled/StyledLabel'
import StyledError from "./styled/StyledError";

const ControlWrapper = ({ label, children, error, touched }) =>  (
    <StyledControlWrapper
        className="control-field"
    >
        { label && <StyledLabel>{label}</StyledLabel> }
        { children }
        {
            error && touched &&
                <StyledError key={error}>
                    { error }
                </StyledError>
        }
    </StyledControlWrapper>
);

export default ControlWrapper;