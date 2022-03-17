import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { createStructuredSelector } from "reselect";
import { Select } from "antd";

import PhotoUploader from "components/PhotoUploader/PhotoUploader";
import { fileUploadAction } from "services/file/file.action";
import InputField from "components/InputField/InputField";
import TextAreaField from "components/TextAreaField/TextAreaField";
import InputPhoneField from "components/InputPhoneField/InputPhoneField";
import SelectField from "components/SelectField/SelectField";
import { specialitiesSelector } from "services/specialities/specialities.selector";
import Button from 'components/Button/Button';
import {createDoctorAction, saveDoctorAction, verifyDoctorAction} from "services/doctors/doctors.action";
import DocumentsUploader from 'components/DocumentsUploader/DocumentsUploader'
import Styled from "../styled/StyledForm"
import UpdatePassword from '../styled/StyledUpdatePassword';
import {getUserInfoSelector} from "services/user/user.selector";
import {MODALS_IDS} from "constants/common";
import {setModalStatusAction} from "services/modals/modals.action";
import UpdatePasswordModal from 'components/UpdatePassword/UpdatePassword';
import withPermissions from 'hoc/withPermissions';
import {requiredFieldsValidate} from "utils/validation";
import PrescriptionFieldWrap from "../styled/StyledPrescriptionField";

const { Option } = Select;

const requiredFields = [
    'fullName',
    'dateOfBirth',
    'email',
    'mobile',
    'gender',
    'speciality',
    'prescriptionTitle',
];

const DoctorForm = ({
    profilePic,
    setModalStatus,
    fileUpload,
    specialities,
    handleSubmit,
    initialDocuments,
    initialValues,
    verifyDoctor,
    user,
    isAdmin
}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Styled.Row>
                    <PhotoUploader initialPic={profilePic} onUpload={fileUpload} formName="doctor" />
                </Styled.Row>
                <Styled.Row>
                    <Styled.ColLeft>
                        <InputField bordered name="fullName" placeholder="Name" label="Name" />
                        <InputPhoneField bordered name="mobile" placeholder="Mobile" label="Mobile" />
                        <InputField bordered name="email"  autoComplete="new-email" placeholder="Email" label="Email"  disabled={!!initialValues.email} />
                        <InputField bordered name="prescriptionTitle" placeholder="Prescription title" label="Prescription title"/>
                        <TextAreaField bordered name="biography" placeholder="Biography" label="Biography" />
                        <InputField bordered name="fatherOfConfession" placeholder="Father of confession" label="Father of confession" />
                    </Styled.ColLeft>

                    <Styled.ColRight>
                        <UpdatePassword.Section>
                            <InputField
                                bordered
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="•••••••••"
                                disabled={!!initialValues?.id}
                                autoComplete="new-password"
                            />
                            {   (!!initialValues?.id && !isAdmin) &&
                                <UpdatePassword.UpdateLink onClick={setModalStatus.bind(null, MODALS_IDS.UPDATE_PASSWORD)} >
                                    Update
                                </UpdatePassword.UpdateLink>
                            }
                        </UpdatePassword.Section>

                        <InputPhoneField bordered name="whatsapp" placeholder="Whatsapp" label="Whatsapp"  />
                        <SelectField
                            bordered
                            name="speciality"
                            label="Speciality"
                            placeholder="Speciality"
                            filterOption={(input, option) => {
                                return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                            }}
                            showSearch
                        >{
                            specialities.map(speciality => (
                                <Option value={speciality.id} key={speciality.id} >{ speciality.name }</Option>
                            ))
                        }</SelectField>
                        <InputField bordered name="localLicenseNumber" placeholder="Licence No." label="Local Licence Number"/>
                        <InputField
                            bordered
                            name="graduationYear"
                            placeholder="Graduation year"
                            label="Graduation year"
                        />
                        <InputField
                            bordered
                            name="placeOfWork"
                            placeholder="Place of work"
                            label="Place of work"
                        />
                        <InputField
                            bordered
                            name="diocese"
                            placeholder="Diocese"
                            label="Diocese"
                        />
                    </Styled.ColRight>
                </Styled.Row>
                <Styled.Row>
                    <DocumentsUploader initialDocuments={initialDocuments} />
                </Styled.Row>

                <Styled.Row>
                    <Styled.Buttons>
                        <Button boxshadow="true" htmlType="submit" >Save changes</Button>
                        { !!initialValues?.id && !initialValues?.verified && isAdmin &&
                        <Button   boxshadow uiType="secondary"  onClick={verifyDoctor.bind(null, initialValues?.id)} >
                            Verify now
                        </Button>
                        }
                    </Styled.Buttons>
                </Styled.Row>
            </form>
            <UpdatePasswordModal />
        </>
    )
};

export default compose(
    connect(
        createStructuredSelector({
            specialities: specialitiesSelector,
            user: getUserInfoSelector
        }),
        {
            fileUpload: fileUploadAction,
            verifyDoctor: verifyDoctorAction,
            setModalStatus: setModalStatusAction
        }
    ),
    withPermissions,
    reduxForm({
        form: "doctorForm",
        enableReinitialize: true,
        validate: v => requiredFieldsValidate(v, requiredFields),
        onSubmit: (value, dispatch) => {
            value.id ?
                dispatch(saveDoctorAction(value)) :
                dispatch(createDoctorAction(value))
        }
    })
)(DoctorForm)
