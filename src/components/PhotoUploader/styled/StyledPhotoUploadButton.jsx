import styled from 'styled-components';
import { Button } from "antd";
import { DEVICE } from 'constants/media';

const StyledPhotoUploadButton = styled(Button)`

	width: 169px;
	  height: 45px;
	  border-radius: 7px;
	  border: ${({hasError})  => (hasError) ? '1px solid var(--red);' : '1px solid var(--blue);'};
	  padding: 14px 20px 10px 22px;
	  
	  font-family: var(--fontAvenirMedium);
	  font-size: 17px;
	  font-weight: 500;
	  font-stretch: normal;
	  font-style: normal;
	  line-height: 1.15;
	  letter-spacing: 0.63px;
	  text-align: center;
	  color: var(--blue);
	  background: #fff;
	  position: relative;
	  display: inline-flex;
	  align-items: center;
	  margin-left: 36px;
	  
	   @media ${DEVICE.mobileS} {		
	   		width: 100%;
	   		margin-left: 0;
	   		justify-content: center;
	   }
	   @media ${DEVICE.mobile} {
	   		font-size: 16px;
	   }
	  

	  &:hover {
	   color: var(--blue);
	   border: solid 1px var(--blue);
	  }
	  &:focus {
	   color: var(--blue);
	   border: solid 1px var(--blue);
	  
	  }
`;

export default StyledPhotoUploadButton;
