import React from 'react';

import { MODALS_IDS } from "constants/common";
import ModalWrapper from "hoc/withModal";
import NewslettersForm from "./Newsletters.Form";

const NewslettersModal = ({ newsletterId, specialities, destinations }) => {
    return (
        <ModalWrapper
            size="large"
            title="Send Newsletter"
            newsletterId={newsletterId}
            modalId={MODALS_IDS.NEWSLETTERS_MODAL}
            component={NewslettersForm}
            specialities={specialities}
            destinations={destinations}
            // initialValues={{
            //     specialities: specialities.map(s => s?.id),
            //     destinations: destinations.map(d => d?.id)
            // }}
        />
    )
};

export default NewslettersModal;