import React from 'react';

import ModalWrapper from "hoc/withModal";
import { MODALS_IDS } from "constants/common";
import AddNewMissionForm
    from "./Missions.AddNewMission.Form";

const AddNewMissionModal = () => {

    return (
        <ModalWrapper
            size="wide"
            title="Add New Mission"
            modalId={MODALS_IDS.ADD_NEW_MISSION}
            component={AddNewMissionForm}
        />
    )
};

export default AddNewMissionModal;