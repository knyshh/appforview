import React from 'react';

import ModalWrapper from "hoc/withModal";
import { MODALS_IDS } from "constants/common";
import DoctorMissionDetailsContent from "./DoctorMissionDetails.Content";

const DoctorMissionDetailsModal = ({ mission }) => {

    return (
        <ModalWrapper
            size='wide'
            title="Mission Details"
            modalId={MODALS_IDS.DOCTOR_MISSION_DETAILS}
            component={DoctorMissionDetailsContent}
            mission={mission}
        />
    )
};

export default DoctorMissionDetailsModal;