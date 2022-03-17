import styled from 'styled-components';
import { Input } from "antd";

const StyledTextArea = styled(Input.TextArea)`
	  min-height: 150px;
	  border-radius: 12px;
	  background-color: #ffffff;
	  padding: 13px 20px 11px 20px;
	  resize: none;
	  font-family: var(--fontAvenirMedium);
      font-size: 18px;
	  font-weight: 500;
	  border: ${({hasError, bordered}) => (hasError) ? '1px solid var(--red);' : (bordered) ? '1px solid var(--borderInput);' : 'none;'};
	    &.ant-input { 
	        min-height: 150px;
	        height: ${({height}) => (height) ? height : '150px !important;'};
	    }
	  	&:hover {    
	         .ant-input {
	            border-color:  ${({hasError, bordered}) => (hasError) ? 'var(--red);' : (bordered) ? 'var(--borderInput);' : 'transparent'};
	         }
         	 border-color:  ${({hasError, bordered}) => (hasError) ? 'var(--red);' : (bordered) ? 'var(--borderInput);' : 'transparent'};
       
       	}
	 
`;

export default StyledTextArea;
