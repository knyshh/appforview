import styled from "styled-components";
import { DEVICE } from 'constants/media';

const LoginFormCol = styled.div`
	margin-top: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	@media ${DEVICE.mobile} {
       justify-content: center;
       flex-direction: column;
       &>div{
       		width: 100%;
       }
   }
   
    @media ${DEVICE.mobileTablet} {
       width: 100%;
       display: flex;
       margin-top: 20px;
   }
`;

export default LoginFormCol;