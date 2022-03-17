import React from 'react';
import { Field } from "redux-form";

import Select from "components/Select/Select";
import ControlWrapper from "components/ControlWrapper/ControlWrapper";

const CustomSelect = ({
    input: { value, onBlur, name, ...restInput },
    label,
    onSelect,
    children,
    defaultValue,
    customTouched,
    placeholder,
    setTouched,
    onSearch,
    size,
    ...meta
}) => {
    return <ControlWrapper
        label={label}
        name={name}
        customTouched={customTouched}
        error={meta.meta.error}
        touched={meta.meta.touched}
    >
        <Select
            hasError={meta.meta.error && meta.meta.touched}
            size={size}
            defaultValue={defaultValue}
            {...meta}
            {...restInput}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder={placeholder}
            { ...(value && { value })  }

        >
            {
                children
            }
        </Select>

    </ControlWrapper>
};

const SelectField = ({
     name,
     children,
     placeholder,
     label,
     defaultValue,
     onSelect,
     onSearch,
    ...res
}) => {
    return (
        <Field
            name={name}
            component={CustomSelect}
            label={label}
            defaultValue={defaultValue}
            onSelect={onSelect}
            placeholder={placeholder}
            children={children}
            onSearch={onSearch}
            {...res}
        />
    )};

export default SelectField;