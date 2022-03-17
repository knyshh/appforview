import React from 'react';

import ModalWrapper from "hoc/withModal";
import { MODALS_IDS } from "constants/common";
import AdminMissionDetails from './Missions.AdminMissionDetails';


const AdminMissionDetailsModal = ({ mission }) => {

    return (
        <ModalWrapper
            size="wide"
            title="Mission Details"
            modalId={MODALS_IDS.ADMIN_MISSION_DETAILS}
            component={AdminMissionDetails}
            mission={mission}
        />
    )
};

export default AdminMissionDetailsModal;