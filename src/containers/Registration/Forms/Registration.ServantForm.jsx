import React from 'react';
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Select } from "antd";

import { fileUploadAction } from "services/file/file.action";
import InputField from "components/InputField/InputField";
import Button from "components/Button/Button";
import InputPhoneField from 'components/InputPhoneField/InputPhoneField'
import PhotoUploader from "components/PhotoUploader/PhotoUploader";
import { destinationsSelector } from "services/destinations/destinations.selector";
import SelectField from "components/SelectField/SelectField";
import { registrationAction } from "services/registration/registration.action";
import StyledFormRow from "./styled/StyledFormRow";
import {requiredFieldsValidate} from "utils/validation";

const { Option } = Select;

const ServantForm = ({ handleSubmit, fileUpload, destinations }) => {
    return (
        <form onSubmit={handleSubmit}>
            <PhotoUploader formName="servant" onUpload={fileUpload} />
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
            <br/>
            <SelectField
                bordered
                name="destination"
                label="Destination *"
                showSearch
                placeholder="Select Destination"
                filterOption={(input, option) => {
                    return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                }}
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
                type="password"
                placeholder="Confirm password"
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
        form: 'servantForm',
        initialValues: {
            fullName: "",
            email: "",
            mobile: "",
            destination: "",
            password: "",
            passwordConfirm: ""
        },
        validate: v => requiredFieldsValidate(v, null),
        onSubmit: (value, dispatch) => dispatch(registrationAction({ ...value , userType: 'servant' }))
    })
)(ServantForm)