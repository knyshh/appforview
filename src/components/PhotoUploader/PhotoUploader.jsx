import React from 'react';
import { Skeleton } from "antd";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectFile } from 'services/file/file.selector';
import StyledPhotoUploader from "./styled/StyledPhotoUploader";
import StyledPhotoUploadButton from './styled/StyledPhotoUploadButton'
import StyledUploadIcon from "./styled/StyledUploadIcon";
import StyledUploadImg from "./styled/StyledUploadImg.jsx";
import StyledUpload from "./styled/StyledUpload";
import {photoValidation} from "./PhotoUploader.utils";

const PhotoUploader = ({ onUpload, formName, file, initialPic }) => {
    return (
        <StyledPhotoUploader>

            <StyledUploadImg>
                { (initialPic || file) ?
                    <img src={file?.url || initialPic?.url} width={100} alt=""/> :
                    <Skeleton.Image/>
                }
            </StyledUploadImg>

            <StyledUpload
                showUploadList={false}
                customRequest={({ file }) => {
                    onUpload({ file, formName })
                }}
                beforeUpload={photoValidation}
            >
               <StyledPhotoUploadButton><StyledUploadIcon/>Upload</StyledPhotoUploadButton>
            </StyledUpload>
        </StyledPhotoUploader>
    )
};

export default connect(
    createStructuredSelector({
        file: (state, { formName }) => selectFile(state, formName)
    }
), {})(PhotoUploader);