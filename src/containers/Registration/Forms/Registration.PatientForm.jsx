import React from 'react';
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Select } from "antd";

import { fileUploadAction } from "../../../services/file/file.action";
import InputField from "../../../components/InputField/InputField";
import Button from "../../../components/Button/Button";
import InputPhoneField from '../../../components/InputPhoneField/InputPhoneField'
import PhotoUploader from "../../../components/PhotoUploader/PhotoUploader";
import { destinationsSelector } from "../../../services/destinations/destinations.selector";
import SelectField from "../../../components/SelectField/SelectField";
import { registrationAction } from "../../../services/registration/registration.action";
import StyledFormRow from "./styled/StyledFormRow";
import {requiredFieldsValidate} from "utils/validation";

const { Option } = Select;

const PatientForm = ({ handleSubmit, fileUpload, destinations }) => {
    return (
        <form onSubmit={handleSubmit}>
            <PhotoUploader formName="patient" onUpload={fileUpload} />
            <InputField
                bordered
                name="fullName"
                label="Full name *"
                placeholder="Enter Full name"
            />
            <InputField
                bordered
                name="email"
                label="Email *"
                type="email"
                placeholder="Enter Email"
            />
            <InputPhoneField
                bordered
                name="mobile"
                label="Mobile *"
                placeholder="Enter Mobile Phone"
            />

            <SelectField
                bordered
                filterOption={(input, option) => {
                    return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                }}
                name="destination"
                label="Destination *"
                placeholder="Select Destination"
                showSearch
                getPopupContainer={trigger => trigger.parentNode}

            >
                {
                    destinations.map(destination =>
                        <Option
                            value={destination.id}
                            key={destination.id}
                        >
                            {destination.name}
                        </Option>
                    )
                }
            </SelectField>

            <InputField
                bordered
                name="password"
                label="Password *"
                type="password"
                placeholder="Enter Password"
            />
            <InputField
                bordered
                name="passwordConfirm"
                label="Confirm password *"
                placeholder="Confirm password"
                type="password"
            />
            <StyledFormRow>
                <Button boxshadow htmlType="submit" >Register</Button>
            </StyledFormRow>

        </form>
    )
};

export default compose(
    connect(
        createStructuredSelector({
            destinations: destinationsSelector,
        })
        , { fileUpload: fileUploadAction }),
    reduxForm({
        form: 'patientForm',
        initialValues: {
            fullName: "",
            email: "",
            mobile: "",
            destination: "",
            password: "",
            passwordConfirm: ""
        },
        validate: v => requiredFieldsValidate(v, null),
        onSubmit: (value, dispatch) => dispatch(registrationAction({ ...value , userType: 'patient' }))
    })
)(PatientForm)