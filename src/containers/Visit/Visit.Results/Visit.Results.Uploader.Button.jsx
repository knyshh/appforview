import React from "react";
import { Upload } from "antd";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import {uploadTestResultAction} from "services/testResults/testResults.action";
import {testResultsSelector} from "services/testResults/testResults.selector";
import Styled from "components/DocumentsUploader/styled/StyledEmptyUpload";
import StyledUploadButton from "components/DocumentsUploader/styled/StyledUploadButton";
import StyledUploadIcon from "components/DocumentsUploader/styled/StyledUploadIcon";
import StyledUploadFile from "containers/Visit/Visit.Results/styled/StyledUploadFile";

const VisitResultsUploaderButton = ({ testResults, uploadTestResult }) => {
    return (
        <>
            { !testResults.length ?
                <Styled.EmptyUpload>
                       <Upload
                           showUploadList={false}
                           customRequest={({ file }) => {
                               uploadTestResult({ file })
                           }}
                       >
                           <StyledUploadButton small><StyledUploadIcon/>Update Documents</StyledUploadButton>
                       </Upload>
                    <Styled.EmptyUploadTxt small>The maximum size is 2 MB. Only JPG, PNG, or PDF file.</Styled.EmptyUploadTxt>
                </Styled.EmptyUpload>:

                <>
                    <Upload
                        showUploadList={false}
                        customRequest={({ file }) => {
                            uploadTestResult({ file })
                        }}
                    >
                        <Styled.AddVisitDocument>
                            <StyledUploadFile>+ Add </StyledUploadFile>
                        </Styled.AddVisitDocument>

                    </Upload>
                </>
            }
        </>
    )
};

export default connect(
    createStructuredSelector({
        testResults: testResultsSelector
    }),
    {
        uploadTestResult: uploadTestResultAction
    }
)(VisitResultsUploaderButton)