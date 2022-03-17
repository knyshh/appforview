import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import StyledModal from "./styled/StyledModal";
import Close from '../assets/img/close.svg'

import { isModalVisibleSelector } from 'services/modals/modals.selectors';
import { setModalStatusAction } from 'services/modals/modals.action';


const ModalWrapper = ({
    setModalStatus,
    component: Component,
    isModalVisible ,
    title,
    footer = null,
    ...props
}) => (
    <StyledModal
        title={title? title : ' '}
        visible={isModalVisible}
        footer={footer}
        destroyOnClose
        onCancel={setModalStatus.bind(null, null)}
        {...props}
        zIndex={10}
        closeIcon={<img src={Close} alt="" />}
    >
        <Component
            {...props}
            setPopupStatus={setModalStatus}
        />
    </StyledModal>
);

ModalWrapper.propTypes = {
    modalId: PropTypes.string.isRequired,
    component: PropTypes.elementType.isRequired
};

export default connect(
    createStructuredSelector({
        isModalVisible: (state, { modalId }) => isModalVisibleSelector(state, modalId)
    }),
    {
        setModalStatus: setModalStatusAction,
    })(ModalWrapper);