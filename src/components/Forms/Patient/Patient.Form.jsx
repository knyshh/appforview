import React from "react";
import { reduxForm } from 'redux-form';

import PatientFormGeneral from "./Patient.Form.General";
import PatientFormCommunication from "./Patient.Form.Communication";
import PatientFormAddress from "./Patient.Form.Address";
import PatientFormFamilyInfo from "./Patient.Form.FamilyInfo";
import PatientFormMedicalHistory from './Patient.Form.MedicalHistory';
import Button from 'components/Button/Button';
import { history } from "routes/urlLocations";
import {createPatientAction, savePatientAction} from "services/patients/patients.action";
import StyledPatientForm from "../styled/StyledPatientForm";
import StyledSaveIcon from "../../styled/StyledSaveIcon";
import {requiredFieldsValidate} from "utils/validation";
import Styled from "../styled/StyledForm";

const requiredFields = [ 'fullName', 'dateOfBirth', 'mobile', 'gender', 'addressStreet', 'maritalStatus' ];

const PatientForm = ({
    profilePic,
    fileUpload,
    spouseMobile,
    spouseWhatsapp,
    destination,
    handleSubmit,
    mobile,
    whatsapp,
    initialValues: { email } = {}
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <StyledPatientForm.Row>
                <StyledPatientForm.ColForm>
                    <PatientFormGeneral
                        profilePic={profilePic}
                        fileUpload={fileUpload}
                    />
                    <PatientFormCommunication
                        email={email}
                        whatsapp={whatsapp}
                        mobile={mobile}
                        destination={destination}
                    />
                    <PatientFormAddress  />
                    <PatientFormFamilyInfo
                        destination={destination}
                        spouseMobile={spouseMobile}
                        spouseWhatsapp={spouseWhatsapp}
                    />
                    <PatientFormMedicalHistory/>
                    <Styled.Row>
                        <Button boxshadow uiType="save" htmlType="submit" ><StyledSaveIcon/> Save Changes</Button>
                        <Button boxshadow uiType="back" onClick={() => history.goBack()}> Back </Button>
                    </Styled.Row>
                </StyledPatientForm.ColForm>

                <StyledPatientForm.ColOptions>
                    <Button boxshadow mobile uiType="save-patient" htmlType="submit" ><StyledSaveIcon/> Save Changes</Button>
                </StyledPatientForm.ColOptions>
            </StyledPatientForm.Row>

        </form>
    )
};

export default reduxForm({
    form: 'patientForm',
    enableReinitialize: true,
    validate: v => requiredFieldsValidate(v, requiredFields),
    onSubmit: (value, dispatch) => {
        value.id ?
            dispatch(savePatientAction(value)) :
            dispatch(createPatientAction(value))
    }
})(PatientForm);