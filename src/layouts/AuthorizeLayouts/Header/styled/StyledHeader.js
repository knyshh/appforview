import styled from 'styled-components'
import { DEVICE } from 'constants/media'

const Header = styled.div`
	height: 80px;
	display: flex;
	justify-content: space-between;
	box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.3);
  	background-color: var(--blue);
	  	  
`;

const Row = styled.div`
	display: flex;
	width: 100%;
	
	padding-top: 21px;
	@media (max-width: 560px) {
	  		padding-top: 12px;
	  	}
	justify-content: space-between;
	
`;

const LeftCol = styled.div`
	
	display: flex;
	align-items: center;
    position: relative;
	z-index: 2;
`;


const RightCol = styled.div`
	display: inline-block;
	position: relative;
	z-index: 2;
	    
	  @media ${DEVICE.mobile} {
	    
	  }
`;

const PageTitle = styled.div`
  position: absolute;
  font-family:var(--fontAvenirHeavy);
  font-size: 19px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: CENTER;
     
    @media (max-width: 768px) {
     	padding-left: 100px;
	    padding-top: 30px;
	    width: 100%;
	    height: auto;
	    left: 0;
     }
 
     @media (max-width: 560px) {
     	font-size: 14px;
    	padding-top: 31px;
     	padding-left: 100px;
     }
     
      @media (min-width: 768px) {
     	justify-content: center;
     	font-size: 20px;
     }
     
     @media (min-width: 1024px) {
     	justify-content: center;
     	font-size: 21px;
     }
    
    @media (min-width: 1250px) {
			font-size: 27px;
		}
    @media (min-width: 1440px) {
		
		}
	@media (min-width: 1550px) {
			font-size: 28px;
		}	
    @media (min-width: 1750px) {
			font-size: 30px;
		}
`;

export default {
	Header,
	LeftCol,
	PageTitle,
	RightCol,
	Row
}