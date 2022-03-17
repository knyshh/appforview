import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {Skeleton} from "antd";

import { visitSelector } from 'services/visit/visit.selector'
import { formatVisitDate, formatVisitTime } from "services/visit/visit.utils";
import {setModalStatusAction} from "services/modals/modals.action";
import Button from "components/Button/Button";
import {MODALS_IDS} from "constants/common";
import VisitForm from "./Form/Visit.Form";
import VisitTests from './Visit.Tests';
import VisitModal from "./Visit.Modal";
import Styled  from './styled/StyledVisit.js';
import StyledContainer from "components/styled/StyledContainer";
import StyledAddIcon from "containers/Settings/styled/StyledAddIcon";

const Visit = ({ visit, setModalStatus }) => {

    const doctorPic = visit.doctor?.profilePic?.formats?.small?.url;
    const doctorName =  visit.doctor?.fullName;
    const patientName = visit.patient?.fullName;
    const fromTime = visit?.from;
    const toTime = visit?.to;
    const date = visit?.date;
    const diagnosis = visit?.diagnosis;
    const test_results = visit?.test_results;
    const { prescription } = visit;

    const preparedPrescription = prescription?.map(({ medication,  ...res }) => ({
        medication: medication?.id ? medication.id : (!medication?.id && !res.otherMedication ? null : "Other"),
        ...res
    }));

    return (
        <Styled.Page>
            <StyledContainer>
                <Styled.Header>
                    <Styled.Avatar>
                        {doctorPic ? <img width="100" alt="" src={doctorPic}/> : <Skeleton.Image/> }
                    </Styled.Avatar>
                    <Styled.Details>
                        <Styled.Names>
                            <Styled.Name>{doctorName}</Styled.Name> <Styled.Arrow/> <Styled.Name> {patientName}</Styled.Name>
                        </Styled.Names>
                        <Styled.VisitDate>
                            <Styled.VisitDateItem>{ formatVisitDate(date) }</Styled.VisitDateItem>
                            <Styled.VisitDateItem>{ formatVisitTime(fromTime) }</Styled.VisitDateItem> <span>{" - "}</span>
                            <Styled.VisitDateItem>{ formatVisitTime(toTime) }</Styled.VisitDateItem>
                        </Styled.VisitDate>
                    </Styled.Details>
                </Styled.Header>

                    <VisitForm
                        initialValues={{
                            ...visit,
                            prescription: preparedPrescription,
                            diagnosis: diagnosis?.id
                        }}
                       prescription={prescription}
                    />

                    <Styled.ResultCol>
                        { !!test_results?.length && <VisitTests test_results={test_results} />  }
                        <Button
                            uiType="uploadtest"
                            onClick={setModalStatus.bind(null, MODALS_IDS.TEST_RESULTS_MODAL)} >
                            <StyledAddIcon /> Upload Tests
                        </Button>
                    </Styled.ResultCol>

                <VisitModal/>
            </StyledContainer>
        </Styled.Page>
    )
};

export default connect(
    createStructuredSelector({
        visit: visitSelector
    }),
    {
        setModalStatus: setModalStatusAction
    }
)(Visit);