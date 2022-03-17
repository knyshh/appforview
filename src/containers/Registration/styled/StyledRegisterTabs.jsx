import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledRegisterTabs = styled.div`
  display: flex;

  width: 481px;
  height: 60px;
  border-radius: 30px;
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
 	margin-bottom: 50px;
  
  &.active {
  	
  }
  
  @media ${DEVICE.mobile} {
  		width: 100%;
  		max-width: 320px;
  		height: auto;
  }
  @media ${DEVICE.mobileTablet} {
  		max-width: 480px;
  		margin-top: 50px;
  		margin-bottom: 50px;
  		height: auto;
  }
  
   @media ${DEVICE.mobileTablet} {
        flex-wrap: wrap; 
   }
`;

export default StyledRegisterTabs