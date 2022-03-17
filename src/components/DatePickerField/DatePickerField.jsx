import React, { useState, useEffect } from 'react';
import { Field } from "redux-form";
import { connect } from "react-redux";
import moment from 'moment';

import DatePicker  from 'components/DatePicker/DatePicker';
import ControlWrapper from "../ControlWrapper/ControlWrapper";
import Input from "components/Input/Input";

const CustomDatePicker = ({
    input: { value, name, ...restInput },
    setTouched,
    disabledDate,
    customTouched,
    label,
    placeholder,
    ...meta
}) => {
    return <ControlWrapper
        label={label}
        name={name}
        error={meta.meta.error}
        touched={meta.meta.touched}
    >
        <DatePicker
            { ...restInput }
            {...meta}
            hasError={meta.meta.error && meta.meta.touched}
            onFocus={setTouched.bind(null, true)}
            format={"DD MMMM YYYY"}
            placeholder={placeholder}
            inputReadOnly
            selected={!!value ? moment(value, "DD MMMM YYYY") : null}
            value={!!value ? moment(value, "DD MMMM YYYY") : null}
            disabledDate={disabledDate}
        />

    </ControlWrapper>
};

const DatePickerField = ({
    name,
    errors,
    placeholder,
    label,
    disabledDate,
    defaultValue,
    ...props
}) => {
    const [ customTouched, setTouched ] = useState(false);

    useEffect(() => {
        setTouched(false)
    }, [errors]);
    return (
        <Field
            component={CustomDatePicker}
            name={name}
            placeholder={placeholder}
            label={label}
            defaultValue={defaultValue}
            disabledDate={disabledDate}
            customTouched={customTouched}
            setTouched={setTouched}
            { ...props }
        />
    )};

export default connect(
    ({ errors }) => ({ errors }),
    {}
)(DatePickerField);