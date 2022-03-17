import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledRegisterBlock = styled.div`
  
 	display: flex;
 	justify-content: center;
 	flex-direction: column;
 	padding-bottom: 80px;
  
  @media ${DEVICE.mobile} {
  		
  }
  @media ${DEVICE.mobileTablet} {
  	padding-left: 15px;
  	padding-right: 15px;
  }
  
   @media ${DEVICE.mobileTablet} {
        
   }
`;

export default StyledRegisterBlock