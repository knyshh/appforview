import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import { urlLocations } from "routes/urlLocations";
import Button from 'components/Button/Button';
import DoctorsTable from './Settings.Doctors.Table';
import DoctorsFilters from "./Settings.Doctors.Filters";
import Pagination from "components/Pagination/Pagination";
import { getDoctorsAction } from "services/doctors/doctors.action";
import {doctorsCountSelector} from "services/doctors/doctors.selector";
import StyledAddIcon from "../styled/StyledAddIcon";
import StyledFilterSection from 'containers/styled/StyledFilterSection'

const Doctors = ({ getDoctors, doctorsCount }) => {
    return (
        <>
            <StyledFilterSection>
                <DoctorsFilters/>
                <Link to={urlLocations.doctor} ><Button uiType='setting-add' ><StyledAddIcon />Add New Doctor</Button></Link>
            </StyledFilterSection>
            <DoctorsTable/>
            <Pagination request={getDoctors} name="doctors" total={doctorsCount} />
        </>
    )
};

export default connect(
    createStructuredSelector({
        doctorsCount: doctorsCountSelector
    })
    , {
    getDoctors: getDoctorsAction,
})(Doctors);