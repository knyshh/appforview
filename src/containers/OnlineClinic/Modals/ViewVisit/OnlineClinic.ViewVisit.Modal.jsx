import React from 'react';

import ModalWrapper from "hoc/withModal";
import { MODALS_IDS } from "constants/common";
import ViewVisitContent from "./OnlineClinic.ViewVisit.Content";

const ViewVisitModal = ({ visit , availability }) => {

    return (
        <ModalWrapper
            size="small"
            title="View Appointment"
            modalId={MODALS_IDS.VIEW_VISIT_MODAL}
            component={ViewVisitContent}
            visit={visit}
            availability={availability}
        />
    )
};

export default ViewVisitModal;