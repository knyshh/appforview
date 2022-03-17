import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import DocumentsUploaderButton from './DocumentsUploader.Button';
import DocumentsUploaderList from './DocumentsUploader.List'
import { documentsSelector } from "services/documents/documents.selector";
import { setDocumentsAction } from "services/documents/documents.action";
import StyledUploadWrapper from "./styled/StyledUploadWrapper";
import StyledUploadLabel from "./styled/StyledUploadLabel";
import StyledUploadSection from './styled/StyledUploadSection';

const DocumentsUploader = ({ initialDocuments, setDocuments, documents }) => {

    useEffect(() => {
        setDocuments(initialDocuments);
    }, [initialDocuments]);
    return (
        <StyledUploadSection>
            <StyledUploadLabel>Documents and Certificates</StyledUploadLabel>

            <StyledUploadWrapper>
                <DocumentsUploaderButton documents={documents} />
                <DocumentsUploaderList documents={documents} />
            </StyledUploadWrapper>
        </StyledUploadSection>
    )
};

export default connect(
    createStructuredSelector({
        documents: documentsSelector
    }),
    {
        setDocuments: setDocumentsAction
    }
)(DocumentsUploader);