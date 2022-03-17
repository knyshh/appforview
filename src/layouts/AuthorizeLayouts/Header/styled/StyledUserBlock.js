import styled from 'styled-components'
import { DEVICE } from '../../../../constants/media'
import DropDownIcon from '../../../../assets/img/chevron-down.svg'
import SettingIcon from '../../../../assets/img/settings.svg';

const Block = styled.div`
	display: flex;
  align-items: center;
  cursor: pointer;
  min-width: 220px;
  align-items: center;
  
  @media (max-width: 560px) {
  	min-width: auto;
  	position: relative;
    top: 9px;
  }
  .ant-dropdown-link {
	  position: relative;
	  top: 1px;
  }

  .ant-avatar {
    width: 30px;
    height: 30px;
    margin-right: 9px;
   
    @media (min-width: 768px) {
    	width: 40px;
         height: 40px;
         margin-right: 10px;
	}
  }
  
	.ant-avatar.ant-avatar-icon > .anticon {
	    margin-top: 9px;
	     @media (max-width: 767px) {
	      	margin-top: 4px;
	     }
	}
`;

const IconSettings = styled.div`
	width: 29px;
	display: inline-block;
	height: 32px;
	margin-right: 25px;
	position: relative;
	top: 2px;
	background: url(${SettingIcon}) center center no-repeat;
	
	@media (max-width: 560px) {
		   	display: none;             
		  }
`;

const IconDropdown = styled.div`
	width: 11px;
	display: inline-block;
	height: 6px;
	background: url(${DropDownIcon}) center center no-repeat;
	background-size: contain;
	margin-left: 15px;
	position: relative;
	top: -3px;
`;

const UserName = styled.span`
	font-family: var(--fontAvenirMedium);
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
   	color: #fff;
   	 a {
   	 		color: #fff;
   	 }
   	 &:hover {
   	 	color: #fff;
   	 }
    
    @media (max-width: 560px) {
  		font-size: 13px;
  	}
  	@media (min-width: 561px) {
  		font-size: 15px;
  	}
    @media (min-width: 1440px) {
    	font-size: 16px;
    }
    @media (min-width: 1600px) {
    	font-size: 18px;
    }
`;

export default {
	Block,
	UserName,
	IconSettings,
	IconDropdown
}