import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import PatientsTable from './Patients.Table';
import Button from 'components/Button/Button';
import { urlLocations } from "routes/urlLocations";
import PatientFilters from "./Patients.Filters";
import Pagination from "components/Pagination/Pagination";
import {patientsCountSelector} from "services/patients/patients.selector";
import {getPatientsAction} from "services/patients/patients.action";
import StyledContainer from "../../components/styled/StyledContainer";
import StyledFilterSection from "../styled/StyledFilterSection";
import Styled from "./styled/StyledPatients";
import StyledAddIcon from "../Settings/styled/StyledAddIcon";

const Patients = ({ patientsCount, getPatients }) => {
    return (
        <Styled.PatientsPage>

            <StyledContainer>
                <StyledFilterSection>
                    <PatientFilters/>
                    <Link to={urlLocations.patient} >
                        <Button uiType='save'><StyledAddIcon />Add new patient</Button>
                    </Link>
                </StyledFilterSection>

                <PatientsTable/>
                <Pagination name="patients" total={patientsCount} request={getPatients} />
            </StyledContainer>
        </Styled.PatientsPage>
    )
};

export default connect(
    createStructuredSelector({
        patientsCount: patientsCountSelector
    })
    , {
        getPatients: getPatientsAction,
    })(Patients);