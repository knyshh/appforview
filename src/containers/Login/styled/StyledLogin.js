import styled from "styled-components";
import { DEVICE } from 'constants/media';
import LogoImage from 'assets/img/logo-upd@2x.png';
import { Link } from 'react-router-dom';

const LogoImg = styled.div`
  display: flex;
  width: 456px;
  height: 365px;
  background: url(${LogoImage}) center center no-repeat; 
  background-size: contain;
  
   @media ${DEVICE.mobile} {
   		margin-left: auto;
   		margin-right: auto;
   }
  @media (max-width: 767px) {
       width: 350px;
       height: 200px;
  }
  @media (min-width: 768px) and (max-width: 1239px) {
       width: 350px;
       height: 250px;
  }
  @media (min-width: 1240px) and (max-width: 1399px) {
  		width: 320px;
  		height: 300px;
        background: url(${LogoImage}) center center no-repeat; 
  		background-size: contain;
  }
  @media (min-width: 1400px) and (max-width: 1600px) {
  		width: 320px;
  		height: 280px;
        background: url(${LogoImage}) center center no-repeat; 
  		background-size: contain;
  		margin-top: 20px;
  }
  @media (min-width: 1240px) and (max-width: 1600px) and (max-height: 650px) {
	
  		margin-top: 100px;
  }
  
  background: url(${LogoImage}) center center no-repeat; 
  background-size: contain;
`;

const Section = styled.div`
   position: relative;
   width: 100%;
    display: flex;
    height: 100%;
	align-items: center;
	justify-content: center;
   
`;
const CenterSection = styled.div`
	width: 100%;
`;


const Logo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 50px;
   
  @media ${DEVICE.mobileTablet} {

  }
  @media ${DEVICE.desktopS} {
 
  }
  @media ${DEVICE.desktopM} {
        
  }   
`;

const FormSection = styled.div`
  max-width: 450px; 
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 35px;
  padding-bottom: 80px;
  
    @media ${DEVICE.mobileTablet} {
      	padding-top: 50px;
    }
    
   @media (min-width: 1240px) and (max-width: 1600px) and (max-height: 800px) {
  		padding-top: 30px;
  }
  
  @media (min-width: 1240px) and (max-width: 1600px) and (max-height: 650px) {
  		padding-top: 20px;
  }
    
    
  
`;

const RegisterCol = styled.div`
  padding-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media ${DEVICE.mobile} {
       flex-wrap: wrap;
       justify-content: center;
   }
  
`;

const RegisterTxt = styled.div`
  font-family: var(--fontAvenirBook);
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  position: relative;
  top: 4px;
  letter-spacing: 0.35px;
  text-align: left;
  color: rgba(77, 80, 88, 0.75);
  padding-left: 12px;
  
  @media ${DEVICE.mobile} {
       width: 100%;
       font-size: 15px;
       text-align: center;
       padding-bottom: 20px;
   }
`;

const LinkRegister = styled(Link)`
 	width: 150px;
	height: 41px;
	border-radius: 16px;
	border: solid 1px var(--blue);
	background: none;
	color: var(--blue);
	text-align: center;
	padding: 10px 0 7px 0;	
	 font-family: var(--fontAvenirHeavy);
	font-size: 16px;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.23; 
	transition: all 0.25s ease-in;
	&:hover {
		color: var(--blue);
		opacity: 0.95;    
	}
	 @media ${DEVICE.mobile} {
       width: 100%;
       height: 50px;
       padding: 15px 0 10px 0;
       text-align: center;
   }
`;



export default {
	LogoImg,
	Logo,
	FormSection,
	RegisterCol,
	RegisterTxt,
	CenterSection,
	LinkRegister,
	Section
};