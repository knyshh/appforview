import styled from 'styled-components'
import { Alert } from 'antd';
import { DEVICE } from '../../../../constants/media'
import Icon from '../../../../assets/img/chevron-right.svg';

const StyledAlert = styled(Alert)`
	  padding: 20px  26px  10px 23px;
	  border-radius: 0 0 20px 20px;
	  background-image: var(--gradientRed);
	  width: 735px;
	  background-color: transparent;
    	border: none;
    	
      font-family: var(--fontAvenirMedium);
	  font-size: 24px;
	  font-stretch: normal;
	  font-style: normal;
	  color: #fff !important;
	  
	  &.ant-alert.ant-alert-no-icon {
	   	padding: 5px  26px  9px 23px;
	  }

	    position: absolute;
	    top: 80px;
	    
	     @media ${DEVICE.mobile} {
	     	width: 100%;
	     	left: 0;	
	     }
	     
	     @media (min-width: 768px)  and (max-width: 1023px){
			width: 500px;
			left: 50%;
	     	margin-left: -250px;
		}
		
		@media (min-width: 1024px)  and (max-width: 1439px){
			width: 500px;
			left: 50%;
	     	margin-left: -250px;
		}
	 @media (min-width: 1440px) {
			width: 500px;
			left: 50%;
	     	margin-left: -250px;
	}
	 @media (min-width: 1600px) {
	 	width: 730px;
	 	left: 50%;
	 	margin-left: -370px;
	    top: 80px;
  	}
    
	  &:after {
		  content: "";
		  position: absolute;
		  width: 18px;
		  height: 12px;
		  right: 23px;
		  top: 19px;
		  background: url(${Icon}) center center no-repeat;
		  background-size: contain;
		  
		   @media ${DEVICE.mobile} {
		   		  right: 19px;
		   }
	  }
	  
	  .ant-alert-message {
	      font-family: var(--fontAvenirBook);
		  font-size: 24px;
		  font-weight: 500;
		  font-stretch: normal;
		  font-style: normal;
		  color: #fff !important;
		  position:relative;
		  
		   @media ${DEVICE.mobile} {
		      font-size: 14px;
		  }
		  @media (min-width: 768px) and (max-width: 1439px){
		     font-size: 16px;
		 } 
		 
		  @media (min-width: 1440px) {
		      font-size: 19px;
		 }
		  @media (min-width: 1600px) {
		  	letter-spacing: 0.78px;
		    font-size: 20px;  }
	  }	 
`;

export default StyledAlert;