import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledRegisterTab = styled.div`
  width: 130px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  font-family: var(--fontAvenirMedium);
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: 0.56px;
  text-align: center;
  
   @media (min-width: 1250px) and (max-width: 1600px) {
		  		font-size: 16px;
	} 
 
   background-image: ${({isActive})  => (isActive) ? 'var(--gradientGreen);' : 'none'};
   border: ${({isActive})  => (isActive) ? '1px solid rgba(83, 153, 220, 0.25); ' : 'none;'};
   color: ${({isActive})  => (isActive) ? '#fff; ' : '#92959d;'};

  
  @media ${DEVICE.mobile} {
  		width: 100%;		
  }
  @media ${DEVICE.mobileTablet} {
  		
  }
  
   @media ${DEVICE.mobileTablet} {
        
   }
`;

export default StyledRegisterTab