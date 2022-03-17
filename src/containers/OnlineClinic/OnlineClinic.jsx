import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {compose} from "redux";
import  moment from 'moment';

import OnlineClinicFilters from './OnlineClinic.Filters';
import WeeklyCalendar from "./WeeklyCalendar/WeeklyCalendar";
import { getDoctorAvailabilitiesAction } from "services/doctorAvailabilities/doctorAvailabilities.action";
import {setModalStatusAction} from "services/modals/modals.action";
import Button from "components/Button/Button";
import {MODALS_IDS, USER_ROLES} from 'constants/common';
import AvailabilityModal from "./Modals/AddAvailability/OnlineClinic.AvailabilityModal";
import {setFiltersAction} from "services/filters/filters.action";
import {getFilersSelector} from "services/filters/filters.selector";
import AddVisitModal from "./Modals/AddVisit/OnlineClinic.AddVisitModal";
import EditVisitModal from "./Modals/EditVisit/OnlineClinic.EditVisitModal";
import ViewVisitModal from "./Modals/ViewVisit/OnlineClinic.ViewVisit.Modal";
import Styled from './styled/StyledOnlineClinic'
import StyledContainer from "components/styled/StyledContainer";
import StyledAddIcon from "containers/Settings/styled/StyledAddIcon";
import withUserAccess from "hoc/withUserAccess";
import withPermissions from 'hoc/withPermissions';
import DoctorAvailabilityEditModal from './Modals/DoctorAvailabilityEdit/DoctorAvailabilityEdit.Modal';


const OnlineClinic = ({ getDoctorAvailabilities, setModalStatus, setFilters, filters, userType, isAdmin }) => {

    const isReqFiltersSet = (f) => !!f?.from_gte && !!f?.speciality || (!!f?.from_gte && !!f?.doctor) ;

    const [ availability , setAvailability ] = useState(null);
    const [ visit , setVisit ] = useState(null);

    const handleAvailabilityClick = (avail) => {
        setAvailability(avail);
        setModalStatus(MODALS_IDS.ADD_VISIT_MODAL);
    };

    const handleDoctorNameClick = (avail) => {
        if( userType === USER_ROLES.DOCTOR || isAdmin ){
            setAvailability(avail);
            setModalStatus(MODALS_IDS.DOCTOR_AVAILABILITY_EDIT)
        }
    };

    const handleVisitClick = (avail, v) => {
        setVisit(v);
        setAvailability(avail);
        setModalStatus(
            userType === USER_ROLES.DOCTOR ?
                MODALS_IDS.VIEW_VISIT_MODAL :
                MODALS_IDS.EDIT_VISIT_MODAL
        );
    };

    useEffect(() => {
        isReqFiltersSet(filters) &&
        getDoctorAvailabilities &&
        getDoctorAvailabilities(filters)
    }, [filters]);

    return (
        <Styled.Page>
            <StyledContainer>
                <Styled.Filter>
                    <Styled.LeftCol>
                        <OnlineClinicFilters
                            filters={filters}
                            setFilters={setFilters}
                        />

                    </Styled.LeftCol>
                    <Styled.RightCol>
                        <Button
                            uiType='add'
                            onClick={setModalStatus?.bind(null, MODALS_IDS.ADD_AVAILABILITY_MODAL)}
                        >
                            <StyledAddIcon/>
                            Add Dr. Availability
                        </Button>
                    </Styled.RightCol>

                </Styled.Filter>
                { isReqFiltersSet(filters) ?
                    <WeeklyCalendar
                        onAvailabilityClick={handleAvailabilityClick}
                        onDoctorNameClick={handleDoctorNameClick}
                        onVisitClick={handleVisitClick}
                        filters={filters}
                    /> :
                    <Styled.NoFilter>
                        Please set filters
                    </Styled.NoFilter> }
                <AvailabilityModal/>
                <AddVisitModal availability={availability} />
                <DoctorAvailabilityEditModal availability={availability} />
                <EditVisitModal availability={availability} visit={visit} />
                <ViewVisitModal availability={availability} visit={visit} />
            </StyledContainer>
        </Styled.Page>
    )
};

export default compose (
    withUserAccess(
        [
            USER_ROLES.SERVANT,
            USER_ROLES.ADMIN,
            USER_ROLES.DOCTOR
        ]
    ),
    withPermissions,
    connect(
        createStructuredSelector({
            filters: state => getFilersSelector(state, 'availability')
        }),
        {
            getDoctorAvailabilities: getDoctorAvailabilitiesAction,
            setModalStatus: setModalStatusAction,
            setFilters: setFiltersAction
        }
    ),
)(OnlineClinic);