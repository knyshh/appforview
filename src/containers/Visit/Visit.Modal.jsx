import React from 'react';

import ModalWrapper from "hoc/withModal";
import {MODALS_IDS} from "constants/common";
import ModalContent from "./Visit.Modal.Content";

const VisitModal = () => {
    return (
        <ModalWrapper
            title="Upload Test Result"
            size='small'
            modalId={MODALS_IDS.TEST_RESULTS_MODAL}
            component={ModalContent}
        />
    )
};

export default VisitModal;