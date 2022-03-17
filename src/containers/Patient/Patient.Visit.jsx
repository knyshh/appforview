import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import {urlLocations} from "routes/urlLocations";
import {specialityByIdSelector} from "services/specialities/specialities.selector";
import { formatVisitDate } from "services/visit/visit.utils";
import Styled from "./styled/StyledPatientsVisit";

const PatientVisit = ({ from, doctor, id }) => {
    return (
        <Styled.VisitBlock to={`${urlLocations.visit}/${id}`}>
                <Styled.Date>
                    { formatVisitDate(from) }{" "}
                </Styled.Date>
                <Styled.Name>
                    {doctor?.speciality?.name}{": "}{ doctor?.fullName }
                </Styled.Name>
                {/*<Styled.LinkDownload />*/}
                <Styled.LinkMore>
                    <Link to={`${urlLocations.visit}/${id}`} />
                </Styled.LinkMore>
        </Styled.VisitBlock>
    )
};

export default connect(
    createStructuredSelector({
        speciality: (state, { doctor }) => specialityByIdSelector(state, doctor?.id)
    })
)(PatientVisit)