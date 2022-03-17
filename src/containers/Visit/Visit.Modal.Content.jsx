import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { createStructuredSelector } from "reselect";
import {reset} from 'redux-form';

import {  testResultsSelector } from "services/testResults/testResults.selector";
import {visitSelector} from "services/visit/visit.selector";
import InputField from "components/InputField/InputField";
import VisitResultsUploader from "./Visit.Results/Visit.Results.Uploader";
import Button from "components/Button/Button";
import { saveTestResultsAction } from "services/testResults/testResults.action";
import StyledModal from './styled/StyledVisitModal'

const ModalContent = ({ handleSubmit }) => {
    return (
        <StyledModal.Block>
            <form onSubmit={handleSubmit} >
                <InputField
                    name="title"
                    label="Test Name"
                    placeholder="Test Name"
                />
                <VisitResultsUploader/>

                <StyledModal.Buttons>
                    <Button uiType="uploadtest" htmlType="submit" >Upload Now</Button>
                </StyledModal.Buttons>

            </form>
        </StyledModal.Block>
    )
};

export default compose(
    connect(
        createStructuredSelector({
            testResults: testResultsSelector,
            visit: visitSelector
        }),
    ),
    reduxForm({
        form: 'testResultsForm',
        destroyOnUnmount: true,
        onSubmit: ({ title }, dispatch, { visit, testResults }) =>
        {
            dispatch(reset('testResultsForm'));
            dispatch(saveTestResultsAction({
                title,
                patient: visit.patient.id,
                visit: visit.id,
                results: testResults
            }))
        }
    })
)(ModalContent);