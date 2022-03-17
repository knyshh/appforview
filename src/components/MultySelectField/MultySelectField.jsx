import React, {useEffect, useState} from 'react';
import Select from "../Select/Select";
import { Field } from "redux-form";
import { connect } from "react-redux";
import isArray from "lodash/isArray";

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
  ...meta
}) => {
    const [ selectedValue, setSelectedValue ] = useState([]);

    const handleChange = value => {
        setSelectedValue( isArray(value) ? value: selectedValue )
    };

    return <ControlWrapper
        label={label}
        name={name}
        customTouched={customTouched}
    >
        <Select
            mode="multiple"
            size="large"
            defaultValue={defaultValue}
            onChange={handleChange}
            value={selectedValue}
            {...meta}
            {...restInput}
            getPopupContainer={trigger => trigger.parentNode}
            onFocus={setTouched.bind(null, true)}
            onSelect={onSelect}
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
     errors,
     placeholder,
     label,
     defaultValue,
     onSelect
}) => {
    const [ customTouched, setTouched ] = useState(false);
    useEffect(() => {
        setTouched(false)
    }, [errors]);
    return (
        <Field
            name={name}
            component={CustomSelect}
            customTouched={customTouched}
            setTouched={setTouched}
            label={label}
            defaultValue={defaultValue}
            onSelect={onSelect}
            placeholder={placeholder}
            children={children}
        />
    )};

export default connect(
    ({ errors }) => ({ errors }),
    {}
)(SelectField);