import React from 'react';
import { Field } from "redux-form";

import Input from "components/Input/Input";
import ControlWrapper from "components/ControlWrapper/ControlWrapper";

const CustomInput = ({
    input: { name },
    input,
    setTouched,
    placeholder,
    type,
    label,
    customTouched,
    customValue,
    ...meta
}) => (
    <>
        <ControlWrapper
            label={label}
            name={name}
            error={meta.meta.error}
            touched={meta.meta.touched}
        >
            <Input
                hasError={meta.meta.error && meta.meta.touched}
                { ...input }
                {...meta}
                type={type}
                placeholder={placeholder}
                value={customValue}
            />
        </ControlWrapper>
    </>
);

const InputField = ({
    name,
    placeholder,
    type,
    label,
    value,
    ...res
}) => {
    return (
    <Field
        component={CustomInput}
        name={name}
        placeholder={placeholder}
        type={type}
        label={label}
        customValue={value}
        {...res}
    />
)};

export default InputField;