import React from 'react';
import { Field } from "redux-form";
import { connect } from "react-redux";

import Checkbox from 'components/Checkbox/Checkbox';
import ControlWrapper from "../ControlWrapper/ControlWrapper";

const CustomCheckbox = (
    {
        input,
        label,
        name,
        children,
        disabled,
        defaultChecked,
        onChange,
        ...meta
    }
) => {
    return (
        <ControlWrapper
            name={ input.name}
            label={label}
        >
            <Checkbox
	            { ...input }
                { ...meta }
                checked={
                    input?.value === '' ? defaultChecked : input?.value
                }
                disabled={disabled}
                defaultChecked={defaultChecked}
            >
                {children}
            </Checkbox>
        </ControlWrapper>)
};

const CheckboxField = ({
    name,
    label,
    children,
    disabled,
    defaultChecked,
    onChange
}) => {
    return (
        <Field
            component={CustomCheckbox}
            name={name}
            children={children}
            label={label}
            disabled={disabled}
            defaultChecked={defaultChecked}
            onChange={onChange}
        />
    )};

export default connect(
    ({ errors }) => ({ errors }),
    {}
)(CheckboxField)