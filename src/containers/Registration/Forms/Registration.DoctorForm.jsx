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
import { specialitiesSelector } from "services/specialities/specialities.selector";
import SelectField from "components/SelectField/SelectField";
import { registrationAction } from "services/registration/registration.action";
import StyledFormRow from "./styled/StyledFormRow";
import {requiredFieldsValidate} from "utils/validation";

const { Option } = Select;

const DoctorForm = ({ handleSubmit, fileUpload, specialities }) => {
    return (
        <form onSubmit={handleSubmit}>
            <PhotoUploader formName="doctor" onUpload={fileUpload} />
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
                placeholder="Enter Email"
            />
            <InputPhoneField
                name="mobile"
                label="Mobile *"
                placeholder="Enter Mobile Phone"
            />

            <SelectField
                bordered
                name="speciality"
                label="Speciality *"
                placeholder="Select Speciality"
                filterOption={(input, option) => {
                    return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                }}
                showSearch
                getPopupContainer={trigger => trigger.parentNode}
            >
                {
                    specialities.map(speciality =>
                        <Option
                            value={speciality.id}
                            key={speciality.id}
                        >
                                {speciality.name}
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
            specialities: specialitiesSelector,
        })
        , { fileUpload: fileUploadAction }),
    reduxForm({
        form: 'doctorForm',
        initialValues: {
            fullName: "",
            email: "",
            mobile: "",
            speciality: "",
            password: "",
            passwordConfirm: ""
        },
        validate: v => requiredFieldsValidate(v, null),
        onSubmit: (value, dispatch) => dispatch(registrationAction({ ...value , userType: 'doctor' }))
    })
)(DoctorForm)