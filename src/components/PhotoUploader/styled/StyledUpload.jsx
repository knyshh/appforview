import styled from 'styled-components';
import { Upload } from "antd";
import { DEVICE } from 'constants/media';

const StyledUpload = styled(Upload)`
	 
	    @media ${DEVICE.mobileS} {
  			width: 100%;
  			
  			.ant-upload.ant-upload-select {
  				width: 100%;
  			}
  		}	
	 
`;

export default StyledUpload;
