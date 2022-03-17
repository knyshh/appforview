import styled from 'styled-components';
import React from "react";

const Row = styled.div`
	display: flex;
	padding-left: 84px;
	max-width: 944px;
	 
	    @media (max-width: 1024px) {
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

const ColLeft = styled.div`
	width: 50%;
	max-width: 480px;
	margin-right: 34px;
	 
	   @media (max-width: 1023px) {
  			width: 100%;
  			margin-right: 0;
  			max-width: 100%;
  		}	 
`;

const RowInside = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	 .control-field {
	 	margin-bottom: 21px;
	 }
	 
	 @media (max-width: 767px) {
	 	flex-direction: column;
	 }
`;
const ColRight = styled.div`
	width: 50%;
	max-width: 480px;
	 
	   @media (max-width: 1023px) {
  			width: 100%;
  			max-width: 100%;
  		}		 
`;
const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 436px;
	margin-top: 45px;
	
	@media (max-width: 767px) {
		flex-direction: column;	 
		justify-content: center; 
	}
`;

const Col12 = styled.div`
	width: 100%;
	max-width: 944px;	 
`;

const Col33 = styled.div`
	width: 33%;
	max-width: 136px;
	margin-left: 15px;
	&:first-of-type {
		margin-left: 0;
	}
	 @media (max-width: 767px) {
  			width: 100%;
  			margin-left: 0;
  			max-width: 100%;
  		} 
  		 @media  (min-width: 768px)  and (max-width: 1023px) {
  			max-width: 212px;
  		} 
	@media (max-width: 1250px)  and (max-width: 1439px) {
  		
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
  			margin-left: 0;
  			max-width: 100%;
  		} 
  		 @media  (min-width: 768px)  and (max-width: 1023px) {
  			max-width: 340px;
  		} 
	 @media (max-width: 1023px) {
  			margin-left: 0px;
  		} 
`;
const Col100 = styled.div`
	width: 100%;
`;

const Col2 = styled.div`
	width: 132px;
	margin-right: 34px;	 
	
	   @media (max-width: 1023px) {
  			width: 100%;
  			margin-right: 0;
  		}
`;

const Col4 = styled.div`
	width: 260px;
	margin-right: 34px;	 
	
	   @media (max-width: 1023px) {
  			width: 100%;
  			margin-right: 0;
  		}
`;

const Col8 = styled.div`
	width: calc(100% - 260px); 
	
	   @media (max-width: 1023px) {
  			width: 100%;
  		}
`;

const Col10 = styled.div`
	width: calc(100% - 132px); 
	
	   @media (max-width: 1023px) {
  			width: 100%;
  			margin-right: 0;
  		}
`;

const ColKids1 = styled.div`
	width: 79px;
	margin-right: 34px;	 
	
	   @media (max-width: 1023px) {
  			width: 100%;
  			margin-right: 0;
  		}
`;
const ColKids2 = styled.div`
	width: 146px;
	margin-right: 34px;	 
	
	   @media (max-width: 1023px) {
  			width: 100%;
  			margin-right: 0;
  		}
`;

const ColKids3 = styled.div`
	width: calc(100% - 225px);
	   @media (max-width: 1023px) {
  			width: 100%;
  		}
`;

const Gender = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-end;
	
	   @media (max-width: 1023px) {
  			//flex-direction: ;
  		}
`;

const GenderCheck = styled.div`
	position: relative;
	top: -2px;
	left: 10px;
`;



export default {
	Row,
	ColLeft,
	Buttons,
	Col2,
	Col10,
	Col12,
	Col4,Col8,
	ColRight,
	Gender,
	GenderCheck,
	ColKids1,
	ColKids2,
	ColKids3,
	Col33,
	Col50,
	Col100,
	RowInside
}
