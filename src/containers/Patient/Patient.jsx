import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { requestedPatientSelector } from "services/patients/patients.selector";
import PatientForm from "components/Forms/Patient/Patient.Form";
import PatientVisits from "./Patient.Visits";
import { getPastVisits, getFutureVisits } from "services/patients/patients.utils";
import { fileUploadAction } from "services/file/file.action";
import Styled from './styled/StyledPatientForm';
import StyledContainer from "components/styled/StyledContainer";
import Button from 'components/Button/Button';
import {API_PATH} from "constants/common";
import ZoomList from "components/ZoomList/ZoomList";


const Patient = ({ patient = {}, fileUpload }) => {

    const { destination, profilePic, ...res } = patient;

    return (
        <Styled.Page>
            <StyledContainer>

                <PatientForm
                    fileUpload={fileUpload}
                    profilePic={profilePic}
                    destination={destination}
                    mobile={res?.mobile}
                    whatsapp={res?.whatsapp}
                    spouseMobile={res?.spouseMobile}
                    spouseWhatsapp={res?.spouseWhatsapp}
                    initialValues={{
                        fullName: null,
                        email: null,
                        mobile: null,
                        dateOfBirth: null,
                        addressStreet: null,
                        gender: null,
                        maritalStatus: null,
                        profilePic,
                        destination: destination?.id,
                        ...res
                    }}
                    initialDocuments={res?.documents || []}
                />
                <Styled.VisitsCol>
                    { !!getFutureVisits(res.visits).length &&
                        <PatientVisits
                            title="Upcoming Visit"
                            visits={getFutureVisits(res.visits)}
                        />
                    }
                    { !!getPastVisits(res.visits).length &&
                        <PatientVisits
                            title="Visit History"
                            visits={getPastVisits(res.visits)}
                        />
                    }

                    <Styled.PrintIdCard>
                        <Styled.PrintIdCardButton href={`#`} target="_blank">
                            <Styled.StyledPrintIcon/>
                            Print Id Card
                        </Styled.PrintIdCardButton>
                    </Styled.PrintIdCard>

                    <Styled.ZoomBlock>
                        <ZoomList />
                    </Styled.ZoomBlock>

                </Styled.VisitsCol>
            </StyledContainer>
        </Styled.Page>
    )
};

export default connect(
    createStructuredSelector({
        patient: requestedPatientSelector,
    }),
    {
        fileUpload: fileUploadAction
    }
)(Patient);