import React from 'react';
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {removeTestResultAction} from "services/testResults/testResults.action";
import {testResultsSelector} from "services/testResults/testResults.selector";
import Styled from 'components/DocumentsUploader/styled/StyledUploadList';
import StyledDownloadIcon from "containers/Visit/Visit.Results/styled/StyledDownloadIcon";

const VisitResultsUploaderList = ({ testResults, removeTestResult }) => {
    return (
        <Styled.ListTxt>{
            testResults.map(testResult => (
                <Styled.ItemTxt>
                    <Styled.FileName>{ testResult.name }</Styled.FileName>
                        <StyledDownloadIcon onClick={removeTestResult.bind(null, testResult.id)} />
                </Styled.ItemTxt>
                ))
        }</Styled.ListTxt>
    )
};

export default connect(
    createStructuredSelector({
        testResults: testResultsSelector
    }),
    {
        removeTestResult: removeTestResultAction
    }
)(VisitResultsUploaderList)