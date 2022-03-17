import React from 'react';

import PatientVisit from "./Patient.Visit";
import Styled from './styled/StyledPatientsVisit.js'


const PatientVisits = ({ visits = [], title }) => {
    return (
        <Styled.SectionVisits>
            <Styled.VisitList>

                <Styled.VisitTitle>{title}</Styled.VisitTitle>
                {

                    visits.map(visit => (
                        <PatientVisit key={visit.id} {...visit} />
                    ))
                }
            </Styled.VisitList>
        </Styled.SectionVisits>
    )
};

export default PatientVisits;