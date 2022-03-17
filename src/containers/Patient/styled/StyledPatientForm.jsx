import styled from 'styled-components'
import Icon from "assets/img/printwhite.svg";
import {Button as AntButton} from "antd";


const Page = styled.div`
  padding-top: 90px;
  padding-bottom: 100px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between; 
  padding-top: 90px;
`
const ColForm = styled.div`
	display: inline-block;
	width: 100%;
	@media (min-width: 1024px) {
		width: 944px;
	}
`

const ColOptions = styled.div`
  display: inline-block;
  width: calc(100% - 944px);
  
`
const VisitsCol = styled.div`
  position: absolute;
  width: 410px;
  right: 20px;
  top: 323px;
  
   @media (min-width: 1330px) {
    	width: 330px;
   }
  
   @media (min-width: 1400px) {
    	width: 400px;
   }
   
   @media (min-width: 1440px) {
    	width: 410px;
   }
  
   @media (min-width: 1500px) {
    	width: 480px;
   }
   @media (min-width: 1600px) {
    	width: 490px;
   }
   
   @media (min-width: 1650px) {
    	width: 540px;
   }
   
  @media (max-width: 1329px) {
  	width: 100%;
  	max-width: 540px;
  	position: static;
  	margin-top: 30px;
  }
  
  @media (min-width: 1023px) and (max-width: 1329px) {
	    padding-left: 84px;
	    position: static;
  }
`

const PrintIdCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
`;

const ZoomBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
`;

const StyledPrintIcon = styled.i`
  display: inline-block;
  width: 20px;
  height: 20px;
  top: 1px;
  position: relative;
  background: url(${Icon}) center center no-repeat;
  background-size: contain;
  margin-right: 14px;
`;


const PrintIdCardButton = styled(AntButton)`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 48px;
	border-radius: 26.5px;
	background-image: var(--gradientBlue);
	font-family: var(--fontAvenirHeavy);
	font-size: 18px;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	color: var(--white);
	border: none;
	text-align: center;
	padding: 0 !important;
	transition: all 0.3s ease-in;
	&:hover {
		background-image: var(--gradientBlue);
		color: var(--white);
		box-shadow: 0 0 8px 0 rgba(8, 107, 246, 0.72);
	}

	@media (min-width: 1250px) and (max-width: 1600px) {
		font-size: 16px;
	} 
 	@media (min-width: 1750px) {
		height: 53px;
 	}
`;
export default {
	Row,
	Page,
	ColForm,
	ColOptions,
	VisitsCol,
	PrintIdCard,
	StyledPrintIcon,
	PrintIdCardButton,
	ZoomBlock
}


