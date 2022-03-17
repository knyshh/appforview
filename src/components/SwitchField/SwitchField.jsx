import React, {useEffect, useState} from 'react';
import { Field } from "redux-form";
import { connect } from "react-redux";

import Switch from 'components/Switch/Switch';
import ControlWrapper from "components/ControlWrapper/ControlWrapper";

const CustomSwitch = (
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
    const [checked, setChecked] = useState(false);


    useEffect(() => {
        setChecked(defaultChecked);
    }, [defaultChecked]);

    const handleClick = () => {
        setChecked(!checked)
    };



    return (
        <ControlWrapper
            name={ input.name}
            label={label}
        >
            <Switch
                { ...input }
                { ...meta }
                checked={
                    checked
                }
                onClick={handleClick}
                disabled={disabled}
                defaultChecked={defaultChecked}
            >
                {children}
            </Switch>
        </ControlWrapper>)
};

const SwitchField = ({
   name,
   label,
   children,
   disabled,
   defaultChecked,
   onChange,
    ...res
}) => {
    return (
        <Field
            component={CustomSwitch}
            name={name}
            children={children}
            label={label}
            disabled={disabled}
            defaultChecked={defaultChecked}
            onChange={onChange}
            {...res}
        />
    )};

export default connect(
    ({ errors }) => ({ errors }),
    {}
)(SwitchField)