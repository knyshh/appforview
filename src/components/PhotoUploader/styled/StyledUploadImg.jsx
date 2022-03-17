import styled from 'styled-components';
import { DEVICE } from 'constants/media'

const StyledUploadImg = styled.div`
	  width: 100px;
	  height: 100px;
	  border-radius: 50%;
	  display: inline-block;
	  
	    @media ${DEVICE.mobileS} {
	  		margin-left: auto;
	  		margin-right: auto;
	  		margin-bottom: 30px;
  		}	
	  
	  .ant-skeleton-image,
	   img {
	  	  width: 100px;
		  height: 100px;
		  border-radius: 50%;
		  border: solid 2px var(--blue);
		  object-fit: cover;
	  }
`;

export default StyledUploadImg;
