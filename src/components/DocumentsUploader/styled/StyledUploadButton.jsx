import styled, {css} from 'styled-components';
import { Button } from "antd";
import { DEVICE } from 'constants/media';

const StyledUploadButton = styled(Button)`

	width: 270px;
	  height: 45px;
	  border-radius: 7px;
	  border: solid 1px var(--blue);
	  padding: 15px 20px 10px 25px;
	  
	  font-family: var(--fontAvenirMedium);
	  font-size: 18px;
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
	   		font-size: 18px;
	   }
	  
	   ${({small}) => {
		if (small) {
			return css`
					width: 222px;
					height: 36px;
					margin-left: 0;
	                font-size: 14px !important;
	                padding: 10px 15px 10px 15px;
	            `
			}
		}}

	  &:hover {
	   color: var(--blue);
	   border: solid 1px var(--blue);
	  }
	  &:focus {
	   color: var(--blue);
	   border: solid 1px var(--blue);
	  
	  }
`;

export default StyledUploadButton;
