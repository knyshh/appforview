import styled from "styled-components";
import { DEVICE } from 'constants/media';

const StyledForgot = styled.div`
   font-family: var(--fontAvenirBook);
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: 0.56px;
  text-align: left;
  cursor: pointer;
  color: rgba(77, 80, 88, 0.75);
  text-decoration: underline;
  @media ${DEVICE.mobile} {
  	margin-top: 20px;
  	font-size: 15px;
  	text-align: center;
  }
`;

export default StyledForgot;