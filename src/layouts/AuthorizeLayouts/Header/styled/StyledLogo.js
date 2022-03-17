import styled from 'styled-components'
import { Link } from 'react-router-dom';
import LogoIcon from '../../../../assets/img/logopage.svg'

const Img = styled.div`
	width: 44px;
	display: inline-block;
	height: 41px;
	position: relative;
	top: -1px;
	background: url(${LogoIcon}) center center no-repeat;
	background-size: contain;
	
	@media (max-width: 560px) {
	    width: 60px;
	    height: 60px;
	    position: relative;
		top: -5px;
	    background: url(${LogoIcon}) center center no-repeat;
	    background-size: contain;
	 }
`;

const Logo = styled(Link)`
	display: flex;
	align-items: center;
`;

const Txt = styled.p`
	  display: inline-block;
	  font-family: var(--fontAvenirMedium);
	  font-size: 18px;
	  font-weight: 500;
	  font-stretch: normal;
	  font-style: normal;
	  line-height: 1;
	  letter-spacing: normal;
	  text-align: left;
	  color: #ffffff;
	  margin-left: 10px;
	  position: relative;
	  top: 2px;
	  
	  @media (max-width: 767px) {
	    display: none;
	  }
	   @media (min-width: 768px) and (max-width: 1023px) {
	    	font-size: 14px;  	
	  }
	  @media (min-width: 1300px) {
	    font-size: 20px;
	  }
	  @media (min-width: 1600px) {
	    font-size: 22px;
	  }
	  @media (min-width: 1800px) {
	    font-size: 24px;
	  }
`;
export default {
	Img,
	Logo,
	Txt
}