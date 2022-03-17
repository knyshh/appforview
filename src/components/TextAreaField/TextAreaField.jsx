import React, { useState, useEffect } from 'react';
import { Field } from "redux-form";
import { connect } from "react-redux";

import TextArea from "components/TextArea/TextArea";
import ControlWrapper from "components/ControlWrapper/ControlWrapper";

const CustomTextArea = ({
     input: { name },
     input,
     setTouched,
     placeholder,
     type,
     errors,
     label, height,
     customTouched,
     ...meta
}) => (
    <>
        <ControlWrapper
            label={label}
            name={name}
            customTouched={customTouched}
            error={meta.meta.error}
            touched={meta.meta.touched}
        >
            <TextArea
                height={height}
                { ...input }
                {...meta}
                hasError={meta.meta.error && meta.meta.touched}
                onFocus={setTouched.bind(true)}
                type={type}
                placeholder={placeholder}
            />
        </ControlWrapper>
    </>
);

const InputField = ({
    name,
    errors,
    placeholder,
    type,
    label,
    ...res
}) => {
    const [ customTouched, setTouched ] = useState(false);

    useEffect(() => {
        setTouched(false);
    }, [errors]);

    return (
        <Field
            component={CustomTextArea}
            name={name}
            placeholder={placeholder}
            type={type}
            label={label}
            customTouched={customTouched}
            setTouched={setTouched}
            errors={errors}
            {...res}
        />
    )};

export default connect(
    ({ errors }) => ({ errors }),
    {}
)(InputField);