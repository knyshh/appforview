import React from 'react';
import { Link } from "react-router-dom";

import { formatVisitDate, formatVisitTime } from "services/visit/visit.utils";
import { urlLocations } from "routes/urlLocations";
import Styled from '../styled/StyledAppoitmentsModal'

const ViewVisitContent = ({ visit = {}, availability = {} }) => {

    const date = formatVisitDate(visit?.to);
    const timeFrom = formatVisitTime(visit?.from);
    const timeTo = formatVisitTime(visit?.to);
    const speciality = availability?.speciality?.name;
    const patientName = visit?.patient.fullName;
    const patientId = visit?.patient.id;
    const doctorName = availability?.doctor?.fullName;
    const visitId = visit?.id;

    return (
        <Styled.DetailsAppoitment>
                <Styled.DetailsCol>
                    <Styled.DetailsTitle>
                        Speciality:
                    </Styled.DetailsTitle>
                    <span>{ speciality }</span>
                </Styled.DetailsCol>

                <Styled.DetailsCol>  <Styled.DetailsTitle>Doctor:</Styled.DetailsTitle> <span>{ doctorName }</span></Styled.DetailsCol>
                <Styled.DetailsCol>  <Styled.DetailsTitle>Date:</Styled.DetailsTitle> <span>{ date} - { timeFrom } to { timeTo }</span></Styled.DetailsCol>
                <Styled.DetailsCol>  <Styled.DetailsTitle>Patient:</Styled.DetailsTitle> <Link to={`${urlLocations.patient}/${patientId}`} >{ patientName }</Link></Styled.DetailsCol>
                <Styled.DetailsCol>  <Styled.DetailsTitle> Visit Details:</Styled.DetailsTitle>
                    <Link to={`${urlLocations.visit}/${visitId}`}>
                        View Visit
                    </Link>
                </Styled.DetailsCol>
        </Styled.DetailsAppoitment>
    )
};


export default ViewVisitContent;