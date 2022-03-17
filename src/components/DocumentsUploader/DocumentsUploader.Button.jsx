import React from "react";
import { Upload } from "antd";
import { connect } from "react-redux";

import Button from "components/Button/Button";
import { uploadDocumentAction } from "services/documents/documents.action";
import StyledUploadButton from "./styled/StyledUploadButton";
import StyledUploadIcon from "./styled/StyledUploadIcon";
import StyledUploadAdd from "./styled/StyledUploadAdd";
import Styled from "./styled/StyledEmptyUpload";


const DocumentsUploaderButton = ({ documents, uploadDocument }) => {
    return (
        <>
            { !documents.length ?
                <Styled.EmptyUpload>
                   <Upload
                       showUploadList={false}
                       customRequest={({ file }) => {
                           uploadDocument({ file })
                       }}
                   >
                        <StyledUploadButton><StyledUploadIcon/>Update Documents</StyledUploadButton>
                </Upload>

               <Styled.EmptyUploadTxt>The maximum size is 2 MB. Only JPG, PNG, or PDF file.</Styled.EmptyUploadTxt>
            </Styled.EmptyUpload> :
            <div>
                <Upload
                    showUploadList={false}
                    customRequest={({ file }) => {
                        uploadDocument({ file })
                    }}
                >
                    <StyledUploadAdd>+ Add </StyledUploadAdd>
                </Upload>
            </div>
            }
        </>
    )
};

export default connect(
    null,
    {
        uploadDocument: uploadDocumentAction
    }
)(DocumentsUploaderButton)