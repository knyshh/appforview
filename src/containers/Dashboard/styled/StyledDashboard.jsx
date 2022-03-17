import styled from 'styled-components'

import { DEVICE } from 'constants/media'
import DashIcon1 from 'assets/img/dashboard1@2x.png'
import DashIcon2 from 'assets/img/dashboard2@2x.png'
import DashIcon3 from 'assets/img/dashboard3@2x.png'
import DashIcon4 from 'assets/img/dashboard4@2x.png'

const List = styled.div`
	display: flex;
 	margin-bottom: 130px;
	  @media ${DEVICE.mobileS} {
	    margin-top: 150px;
	    justify-content: center;
	   
	  }
	  @media ${DEVICE.mobileS} {
    	justify-content: center;  
  	}
	  @media ${DEVICE.mobileTablet} {
    	margin-top: 150px;
    	margin-bottom: 80px; 
  	}
  	
  	@media ${DEVICE.mobileTabletDevices} {
    	margin-top: 150px;
	    margin-bottom: 80px; 
  	}
  	@media ${DEVICE.desktopS} {
  		margin-top: 150px;   
  	}
  	@media ${DEVICE.desktopM} {
		margin-top: 200px;
		margin-bottom: 150px;
	}
	 @media (max-width: 375px) {
  	 	justify-content: center;
  	 }
  	 
	 @media (max-width: 1249px) {
  	 	justify-content: space-evenly;
  	 	flex-wrap: wrap;
  	 	
  	 }
  	 @media (min-width: 1024px) and (max-width: 1200px) {
  	 	 margin-left: 50px;
  	 	 margin-right: 50px;
  	 	 
  	 }
  	  @media (min-width: 1200px) and (max-width: 1249px) {
  	 	 margin-left: 130px;
  	 	 margin-right: 130px; 	 
  	 }
  	
  	 @media (max-width: 1399px) and (min-width: 1250px) {
			justify-content: space-between;
	}
  	 
  	 @media (min-width: 1400px) {
  	 	justify-content: space-evenly;
  	 }	  
`;

const ListItem = styled.div`
	display: flex;
	 width: 395px;
	 height: 316px;
	 position: relative;
	 border-radius: 25px;
	 cursor: pointer;
	 box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.3);
	 transition: all 0.2s ease-in;
	 &>a {
	 	display: block;
	 	width: 100%;
	 	height: 100%;
	 }
	 
	 &:nth-child(1) {
	 	background: url(${DashIcon1}) center center no-repeat;
	 	background-size:     cover;
	 }
	 &:nth-child(2) {
		background: url(${DashIcon2}) center center no-repeat;
		background-size:     cover;
	}
	&:nth-child(3) {
		background: url(${DashIcon3}) center center no-repeat;
		background-size:     cover;
	}
	&:nth-child(4) {
		background: url(${DashIcon4}) center center no-repeat;
	}
	
	@media (min-width: 1100px) and (max-width: 1399px) { 
		margin-left: 20px;
		&:nth-child(1) {
			margin-left: 0;
		}
		
	}
	
	  @media ${DEVICE.mobileS} {
	   		width: 250px;
	   		height: 200px;
	   		margin-bottom: 50px;
	  }
	  @media ${DEVICE.mobileTablet} {
		width: 280px;
    	height: 250px;
		margin-bottom: 50px;
	}
	@media (max-width: 1024px) {
  	 	margin-left: 5px;
  	 	margin-right: 5px;
  	 }
		@media ${DEVICE.tabletLaptopS} {
			width: 300px;
			height: 240px;
			margin-bottom: 50px;
		}
		@media (max-width: 1399px) and (min-width: 1250px) {
			width: 350px;
			height: 280px;
			margin-bottom: 50px;
		}
		@media (max-width: 1599px) and (min-width: 1400px) { 
			width: 280px;
			height: 260px;
		}
		
		@media ${DEVICE.desktopS} {
			width: 280px;
    		height: 260px
		}
		
		@media (min-width: 1601px) {
			width: 355px;
			height: 310px;
		}
		@media (min-width: 1800px) {
			width: 395px;
			height: 316px;
		}
		
		&:hover {
				box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.9);
		}
		
	  
`;

const Copyright = styled.div`
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0;
  font-size: 12px;
  color: #92959d;
  opacity: 0.8;
  letter-spacing: 0;
   @media ${DEVICE.mobile} {
     text-align:center;
     font-size: 11px; 
  }
  `;



const ItemTitle = styled.div`
	position: absolute;
	height: 93px;
	bottom: 0;
	left: 0;
	
 	font-family: var(--fontAvenirHeavy);
  font-size: 32px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background-color: rgba(34,34,34,0.3);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 25px 25px;
	
	  @media ${DEVICE.mobile} {
	   font-size: 20px;
	   height: 70px;
	  }
	  
	  @media ${DEVICE.mobileTablet} {
	    font-size: 20px;
	    height: 70px;
	}
	@media ${DEVICE.tabletLaptop} {
		font-size: 25px;
		height: 93px;
	}
	@media ${DEVICE.desktopS} {
		font-size: 27px;
	}
	@media ${DEVICE.desktopM} {
		font-size: 32px;
	}
	  
	  
`;

const Footer = styled.div`
	margin-top: 30px; 
	padding-bottom: 90px;
	position: relative;
	font-family: var(--fontAvenirBook);
	  font-size: 17px;
	  font-weight: normal;
	  font-stretch: normal;
	  font-style: normal;
	  line-height: 1.3;
	  letter-spacing: 0.71px;
	  text-align: center;
	  color: #92959d;
	  
	  p {
	  	max-width: 1030px;
	  	margin-left: auto;
	  	margin-right: auto;
	  }
`;

export default {
	ListItem,
	List,
	Copyright,
	Footer,
	ItemTitle
}