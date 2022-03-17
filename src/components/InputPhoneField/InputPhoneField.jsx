import React from 'react';
import { Field } from "redux-form";

import ControlWrapper from "components/ControlWrapper/ControlWrapper";
import StyledInputPhoneField from './styled/StyledInputPhonePicker';

const CustomPhoneInput = ({
    input: { name },
    label,
    input,
    country,
    placeholder,
    customTouched,
    setTouched,
    destination,
    preferredCountries = '',
    ...meta
  }) => {
    return (<ControlWrapper
        label={label}
        name={name}
        error={meta.meta.error}
        touched={meta.meta.touched}
    >
        <StyledInputPhoneField
            { ...input }
            { ...meta }
            placeholder={placeholder}
            hasError={meta.meta.error && meta.meta.touched}
            inputClass={(meta.meta.error && meta.meta.touched) && 'error'}
            country={country || 'eg'}
            preferredCountries={[ ...preferredCountries, 'eg']}
        />
    </ControlWrapper>)
};

const InputPhoneField = ({
     name,
     type,
     label,
     placeholder,
     country
 }) => {

    return (
        <Field
            component={CustomPhoneInput}
            name={name}
            type={type}
            label={label}
            country={country}
            placeholder={placeholder}
            preferredCountries={['ae']}
        />
    )};

export default InputPhoneField;