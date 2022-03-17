import styled from 'styled-components'
import { DEVICE } from '../../../constants/media';

const StyledPageTitle = styled.div`
   position: relative;
   width: 100%;
   margin-top: 20px;
   margin-bottom: 25px;
   
    @media ${DEVICE.mobile} {
		margin-bottom: 20px;
	} 
	  
  &:after {
    content: '';
    position:absolute;
    right: 0;
    top: 14px;
    width: 100%;
    height: 1px;
    background: #d0d7e8;
  }
  
`
export default StyledPageTitle;


