import React from 'react';

import ModalWrapper from "hoc/withModal";
import VisitModalForm from "./VisitModal.Form";
import moment from "moment";

const VisitModal = ({ doctor, date, modalId, visit, dailyStartTime, dailyEndTime }) => {
    return (
        <ModalWrapper
            date={date}
            doctor={doctor}
            modalId={modalId}
            component={VisitModalForm}
            visit={visit}
            patient={visit?.patient}
            dailyStartTime={dailyStartTime}
            dailyEndTime={dailyEndTime}
            title={visit?.id ? "Update visit": "Add visit"}
            initialValues={{
                id: visit?.id,
                from: visit?.from ? moment(visit?.from, 'YYYY-MM-DDTHH-mm-ssZ').format("HH:mm:ss") : "12:00:00",
                to: visit?.to ? moment(visit?.to, 'YYYY-MM-DDTHH-mm-ssZ').format("HH:mm:ss") : "16:00:00",
                patient: visit?.patient?.fullName || null,
                servantSummery: visit?.servantSummery ||  null,
                doctor
            }}
        />
    );
};

export default VisitModal;