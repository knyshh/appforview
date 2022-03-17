import React from 'react';
import { Skeleton } from 'antd';
import { connect } from "react-redux";

import {removeDocumentAction} from "services/documents/documents.action";
import Styled from './styled/StyledUploadList';
import StyledUploaderRemove from "./styled/StyledUploadRemove";

const DocumentsUploaderList = ({ documents, removeDocument }) => {
    return (
        <Styled.List>{
                documents.map(document => (
                        <Styled.Item key={document.id} >
                            <a href={document.url} target="_blank" rel="noopener noreferrer">
                                <Styled.ImgWrap>
                                    { document?.formats?.thumbnail?.url ?
                                        <img src={document.formats.thumbnail.url} alt=""/> :
                                        <Skeleton.Image/>
                                    }
                                </Styled.ImgWrap>
                            </a>
                            <StyledUploaderRemove onClick={removeDocument.bind(null, document.id)} />
                        </Styled.Item>
                ))
        }</Styled.List>
    )
};

export default connect(
    null,
    {
        removeDocument: removeDocumentAction
    }
)(DocumentsUploaderList)