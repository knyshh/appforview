import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ServantForm from "components/Forms/Servant/Servant.Form";
import DoctorForm from "components/Forms/Doctor/Doctor.Form";
import PatientForm from "components/Forms/Patient/Patient.Form";
import { getUserInfoSelector } from "services/user/user.selector";
import { PROFILE_NAME } from 'constants/common';
import StyledContainer from "components/styled/StyledContainer";
import StyledProfile from "./styled/StyledProfile";

const PROFILES = {
    doctor: ({ initialValues, profilePic, initialDocuments }) =>
        <DoctorForm
            initialValues={initialValues}
            profilePic={profilePic}
            initialDocuments={initialDocuments}
        />,
    servant: ({ initialValues, profilePic }) => (
        <ServantForm initialValues={initialValues} profilePic={profilePic} />
    ),
    patient: ({ initialValues, profilePic }) => (
        <PatientForm initialValues={initialValues} profilePic={profilePic} />
    ),
};

const Profile = ({ user }) => {
    return (
            <StyledContainer>
                <StyledProfile>
                {
                    user?.userType && PROFILES[user.userType](
                        {
                            initialValues: user?.[PROFILE_NAME[user.userType]],
                            profilePic: user?.[PROFILE_NAME[user.userType]]?.profilePic,
                            initialDocuments: user?.doctorProfile?.documents || []

                        }
                    )
                }
                </StyledProfile>
            </StyledContainer>

    )
};

export default connect(
    createStructuredSelector(
        {
            user: getUserInfoSelector
        }
    ),
    {}
)(Profile)