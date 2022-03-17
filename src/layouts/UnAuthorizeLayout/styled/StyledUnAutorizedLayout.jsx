import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { DEVICE } from '../../../constants/media'
import LayoutBg from '../../../assets/img/login-bg@2x.png';

const Layout = styled.div`
   display: flex;
   min-height: 100vh;
   
   @media (min-width: 1250px) {
      height: 100vh;
    }
   
   @media ${DEVICE.mobileTablet} {
        flex-wrap: wrap;
   }
    @media (min-width: 1024px) {
        height: 100vh;
   }
`;

const ColLeft = styled.div`
  width: 50%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: url(${LayoutBg}) center center no-repeat;
  background-size: cover;
  padding: 20px;
  overflow-y: hidden;
  
  
   @media ${DEVICE.mobileTablet} {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 50px;
        padding-top: 50px;
        min-height: 400px;
   }
   @media (min-width: 1024px) {
        height: 100vh;
   }
`;

const Center = styled.div`
  max-width: 600px;
  
`;

const ColRight = styled.div`
 width: 50%;
 
 @media (min-width: 1250px) {
  min-height: 100vh;
  overflow-x: scroll;
 }
  @media ${DEVICE.mobileTablet} {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
  }
  @media (min-width: 1024px) and (max-width: 1250px) {
        padding-left: 20px;
        padding-right: 20px;
   }
  
   @media (min-width: 1024px) {
        overflow-x: scroll;
   }
   @media (min-width: 1250px) {
       
   }
 
`
const Logo = styled(Link)`

`
const LogoText = styled.p`
  
`

const Title = styled.h1`
  font-family: var(--fontAvenirBlack);
  font-size: 58px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  padding: 0;

  @media ${DEVICE.mobileTablet} {
     font-size: 35px;  
  }
  @media ${DEVICE.mobile} {
     font-size: 30px;  
  }

  @media ${DEVICE.tabletLaptop} {
      font-size: 48px;
  }
   @media ${DEVICE.tabletLaptopS} {
     font-size: 44px;
  }
  @media ${DEVICE.desktopS} {
      font-size: 50px;
  }
   @media ${DEVICE.desktopM} {
      font-size: 55px;
  }
`

const Text = styled.p`
  font-family: var(--fontAvenirBook);
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 0.5px;
  text-align: center;
  color: #ffffff;
`

const Copyright = styled.div`
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 12px;
  color: rgba(255,255,255, 0.45);
   @media ${DEVICE.mobile} {
     text-align:center;
     font-size: 11px; 
  }
  `;


export default {
    Layout,
    Title,
    Center,
    Logo,
    LogoText,
    Text,
    ColLeft,
    Copyright,
    ColRight
};