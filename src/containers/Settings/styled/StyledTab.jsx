import styled, {css} from 'styled-components'
import { DEVICE } from '../../../constants/media'
import {Link} from "react-router-dom";

const StyledTab = styled(Link)`
  width: 123px;
  height: 40px;
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
  
  color: #92959d;
   @media (min-width: 1250px) and (max-width: 1600px) {
		  		font-size: 16px;
	} 
   &:hover {
   		color: #92959d;
   	}
      ${({ isActive }) => {
		if (isActive) {
			return css`
						background-image: var(--gradientGreen);
						border: 1px solid rgba(83, 153, 220, 0.25);
						color: #fff;
						&:hover {
	                            color: #fff;
	                        }
	                    `
			}}
		}
    
  @media ${DEVICE.mobile} {
  		width: 100%;		
  }
`;

export default StyledTab