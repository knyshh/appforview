import styled, {css} from 'styled-components';
import React from "react";

const AvailabilityBlock = styled.div`
	max-width: 820px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	
	@media (max-width: 1023px) {
		max-width: 100%;
		padding: 20px;
	}
	@media (max-width: 767px) {
		padding: 0;
	}
`;


const AddVisitBlock = styled.div`
	max-width: 770px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-top: 40px;
	padding-bottom: 35px;
	
	
	@media (max-width: 1023px) {
		max-width: 100%;
		padding: 20px;
	}
	@media (max-width: 767px) {
		padding: 0;
	}
`;

const ColLeft = styled.div`
	width: 50%;
	max-width: 380px;
	margin-right: 34px;
	 
	   @media (max-width: 1023px) {
  			width: 100%;
  			margin-right: 0;
  			max-width: 100%;
  		}	 
`;

const Row = styled.div`
	display: flex;
	width: 100%;
	    @media (max-width: 1023px) {
  			flex-direction: column;
  			padding-left: 0;
  		}	
	 .control-field {
	 	margin-bottom: 25px;
	 	.ant-input,
	 	.form-control,
	 	.ant-select
	 	{
	 		box-shadow: none;
	 	}
	 }
`;
const ButtonsCol = styled.div`
	display: flex;
	margin-top: 40px;
	align-items: center;
	
	 ${({ aligment }) => {
		if (aligment && aligment === 'between') {
			return css`
					
					 @media (max-width: 767px) {
					 	flex-direction: column;
						align-items: flex-start;
					 }
					&>div {
							display: flex;
							  @media (max-width: 450px) {
							  
								.ant-btn {
									margin-bottom: 20px;
									&:last-child {
										margin-left: 9px;
									}
								}
							  }
						}
	                justify-content: space-between;
	                `
		}}}
`;
const ColRight = styled.div`
	width: 50%;
	max-width: 380px;
	 
	   @media (max-width: 1023px) {
  			width: 100%;
  			margin-right: 0;
  			max-width: 100%;
  		}	 
`;
const LabelSwitch = styled.div`
   font-size: 14px;
   color: #4d5058;
   padding-right: 20px;
`;

const SwitchBlock = styled.div`
  	display: flex;
  	margin-top: 46px;
  	padding-left: 20px;
  	@media (max-width: 1023px) {
  		margin-top: 0;
  	}
`;

const Col50 = styled.div`
	width: 50%;
	max-width: 222px;
	margin-left: 30px;
	
	&:first-of-type {
		margin-left: 0;
	}
	
	 @media (max-width: 767px) {
	 		width: 100%;
	 		max-width: 100%;
	 }
	 @media (max-width: 1023px) {
  			margin-left: 0;
  			width: 100%;
  			max-width: 100%;
  	 } 
`;
const Col100 = styled.div`
	width: 100%;
`;

const AppoitmentRow = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 25px;
	padding-left: 20px;
	
	@media (max-width: 700px) {
		flex-direction: column;
	}
`;
const AppoitmentCol = styled.div`
	width: 33%;
	max-width: 200px;
	display: flex;
	margin-left: 58px;
    font-size: 14px;
    align-items: flex-end;
	&:first-of-type {
		margin-left: 0;
	}
	
	@media (max-width: 701px) {
		width: 100%;
		max-width: 100%;
		margin-left: 0;
		margin-bottom: 10px;
	}
	span {
		  display: inline-block;
		  font-family: var(--fontAvenirHeavy);
		  font-size: 18px;
		  font-weight: 900;
		  font-stretch: normal;
		  font-style: normal;
		  line-height: 1.39;
		  letter-spacing: normal;
		  text-align: left;
		  color: #000000;
		  padding-left: 16px;
		  @media (max-width: 701px) {
		  	font-size: 16px;
		  }
	}
`;

const DetailsAppoitment = styled.div`
	padding-left: 70px;
	padding-top: 80px;
	padding-bottom: 60px;
	
	@media (max-width: 450px) {
		padding-left: 25px;
	}
	@media (max-width: 767px) {
		padding-left: 0;
	}
	
`;
const DetailsCol = styled.div`
 	width: 100%;
 	display: flex;
 	padding-bottom: 35px;
 	align-items: center;
 	@media (max-width: 450px) {
		flex-direction: column;
		margin-bottom: 10px;
	}
 	&> span {
 		  display: inline-block;
		  font-family: var(--fontAvenirMedium);
		  font-size: 18px;
		  font-stretch: normal;
		  font-style: normal;
		  line-height: 1.39;
		  letter-spacing: normal;
		  text-align: left;
		  color: #000000;
		  
		  @media (max-width: 450px) {
				width: 100%;
				display: inline-block;
			}	
		   @media (max-width: 767px) {
				 font-size: 17px;
			}
 	}
 	&> a {
 	      display: inline-block;
		  font-family: var(--fontAvenirHeavy);
		  font-size: 18px;
		  font-stretch: normal;
		  font-style: normal;
		  line-height: 1.39;
		  letter-spacing: normal;
		  text-align: left;
		  color: #008df7;
		  text-decoration: underline;
		   @media (max-width: 767px) {
				 font-size: 17px;
			}
		  &:hover {
		    color: #008df7;
		    text-decoration: none;
		  }
		  @media (max-width: 450px) {
				width: 100%;
				display: inline-block;
			}
 	}
`;
const DetailsTitle = styled.div`
 	width: 100px;
 	display: inline-block;
 	text-align: right;
 	padding-right: 20px;    
 	position: relative;
    top: 1px;
    
    @media (max-width: 450px) {
		width: 100%;
		margin-bottom: 15px;
		text-align: left;
		font-size: 15px;
	}
    
    @media (min-width: 451px) and (max-width: 767px) {
		width: 130px;
	}
 	
`;



export default {
	AvailabilityBlock,
	AddVisitBlock,
	ColLeft,
	ColRight,
	Row,
	ButtonsCol,
	Col50,
	Col100,
	LabelSwitch,
	AppoitmentRow,
	AppoitmentCol,
	DetailsAppoitment,
	DetailsCol,
	SwitchBlock,
	DetailsTitle
}
