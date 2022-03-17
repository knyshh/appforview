import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import DoctorForm from "components/Forms/Doctor/Doctor.Form";
import StyledPage from "components/styled/StyledPage";
import { requestedDoctorSelector } from "services/doctors/doctors.selector";


const Doctor = ({ doctor = {} }) => {
    const { speciality, profilePic, ...res } = doctor;
    return (
        <>
            <StyledPage>
                <DoctorForm
                    profilePic={profilePic}
                    initialValues={{ fullName: null, prescriptionTitle: null, email: null, mobile: null, profilePic, speciality: speciality?.id, ...res }}
                    initialDocuments={res?.documents || []}
                />
            </StyledPage>

        </>
    )
};

export default connect(
    createStructuredSelector({
        doctor: requestedDoctorSelector,
    })
)(Doctor);