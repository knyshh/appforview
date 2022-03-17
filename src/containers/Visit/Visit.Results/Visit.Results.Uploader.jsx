import React from 'react';

import DocumentsUploaderButton from './Visit.Results.Uploader.Button';
import DocumentsUploaderList from './Visit.Results.Uploader.List'
import StyledUploadWrapper from "containers/Visit/Visit.Results/styled/StyledUploadWrapper.js";
import StyledUploadSection from "components/DocumentsUploader/styled/StyledUploadSection";
import StyledUploadLabel from "components/DocumentsUploader/styled/StyledUploadLabel";


const VisitResultsUploader = () => {

    return (
        <StyledUploadSection>
            <StyledUploadLabel>Results files</StyledUploadLabel>

            <StyledUploadWrapper>
                <DocumentsUploaderButton />
                <DocumentsUploaderList />
            </StyledUploadWrapper>

        </StyledUploadSection>
    )
};

export default VisitResultsUploader