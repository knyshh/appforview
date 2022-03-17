import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import isEqual from 'lodash/isEqual';
import pullAt from 'lodash/pullAt';
import find from 'lodash/find';
import moment from 'moment';

import { specialitiesSelector } from "services/specialities/specialities.selector";
import AdminMissionDetailsForm from "./Missions.AdminMissionDetails.Form";
import { mergeItems } from "../../Missions.utils";
import Styled from 'containers/Missions/Modals/styled/StyledMissionModal'

const MissionsAdminMissionDetails = ({  mission, modals }) => {
    const [ newItems, setNewItem ] = useState([]);
    const [missionItems, setMissionItems] = useState([]);

    useEffect(() => {
        setMissionItems(mission.items);
    }, [mission.items]);

    useEffect(() => {
        setNewItem([]);
    }, [modals]);

    const onItemAdd = ( speciality ) => {
        setNewItem([...newItems, { speciality, doctor: null }])
    };

    const onItemRemove = ( index ) => {
        const items = mergeItems(missionItems, newItems).filter((item, i) => i != index );
        setMissionItems(items);
        setNewItem(items);
    };

    const onDoctorRemove = (index) => {
        const nItems = mergeItems(missionItems, newItems);
        nItems[index].doctor = null;
        setMissionItems(nItems);
        setNewItem(nItems);

    };

    const onDoctorSelect = (item, doctor) => {
        const immutItems = [...newItems];
        if ( find(newItems, item) ) {
            const index = immutItems.findIndex(newItem => isEqual(newItem, item));
            pullAt(immutItems, [index]);
            setNewItem([...immutItems, { ...item, ...(doctor && { doctor })  }]);
        } else {
            setNewItem([...newItems, { ...item, ...(doctor && { doctor }) }])
        }
    };
    const { endDate, startDate,  ...res } = mission;
    return (
        <Styled.AdminMissionDetails>
            <AdminMissionDetailsForm
                onItemAdd={onItemAdd}
                onItemRemove={onItemRemove}
                onDoctorSelect={onDoctorSelect}
                onDoctorRemove={onDoctorRemove}
                mission={mission}
                initialValues={{
                    endDate: moment(endDate).format("DD MMMM YYYY"),
                    startDate: moment(startDate).format("DD MMMM YYYY"),
                    ...res
                }}
                items={mergeItems(missionItems, newItems)}
                setNewItem={setNewItem}
            />
        </Styled.AdminMissionDetails>
    );
};

export default connect(
    createStructuredSelector({
        specialities: specialitiesSelector,
        modals: state => state.modals
    })
)(MissionsAdminMissionDetails);