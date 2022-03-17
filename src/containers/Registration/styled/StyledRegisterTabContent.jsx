import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledRegisterTabContent = styled.div`
  
  width: 481px;
  margin: 0 auto;
  
  @media ${DEVICE.mobile} {
  		width: 100%;

  }
  @media ${DEVICE.mobileTablet} {
  		width: 100%;
  		max-width: 481px;
  }
  @media (min-width: 1024px) and (max-width: 1250px) {
      max-width: 460px;
   }
`;

export default StyledRegisterTabContent