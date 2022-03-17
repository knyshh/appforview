import styled from 'styled-components'
import { DEVICE } from '../../../../constants/media'

const StyledFooter = styled.div`
	margin-top: 40px; 
	padding-bottom: 90px;
	font-family: var(--fontAvenirRoman);
	  font-size: 20px;
	  font-weight: normal;
	  font-stretch: normal;
	  font-style: normal;
	  line-height: 1.1;
	  letter-spacing: 0.71px;
	  text-align: center;
	  color: #92959d;
	  
	  p {
	  	max-width: 1030px;
	  	margin-left: auto;
	  	margin-right: auto;
	  }
}
	
  @media ${DEVICE.mobile} {
  	
  }
`;

export default StyledFooter