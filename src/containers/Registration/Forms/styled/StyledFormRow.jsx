import styled from 'styled-components'
import { DEVICE } from '../../../../constants/media'

const StyledFormRow = styled.div`
	margin-top: 40px; 
	
  @media ${DEVICE.mobile} {
  	align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export default StyledFormRow