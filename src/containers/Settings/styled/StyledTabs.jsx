import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledTabs = styled.div`
  display: flex;
  width: 276px;
  height: 56px;
  border-radius: 30px;
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin: 17px auto;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  
  @media ${DEVICE.mobile} {
  		width: 100%;
  		height: auto;
  }
  @media ${DEVICE.mobileTablet} {
  		height: auto;
  }
  
   @media ${DEVICE.mobileTablet} {
        //flex-wrap: wrap; 
   }
`;

export default StyledTabs