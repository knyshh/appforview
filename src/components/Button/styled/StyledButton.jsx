import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'antd';

import { DEVICE } from 'constants/media';

const StyledButton = styled(({ ...props }) => (
	<Button {...props} />
))`
   && {
          display: block;
          width: 200px;
          width: ${({width})  => (width) ?  width: '200px;'};
         
		  height: 48px;
		  
		  //border-radius: 16px;
		  border-radius: 26.5px;
		  background-image: var(--gradientBlue);
		  font-family: var(--fontAvenirHeavy);
		  font-size: 18px;
		  font-stretch: normal;
		  font-style: normal;
		  line-height: 1.23;
		  letter-spacing: normal;
		  color: var(--white);
		  border: none;
		  text-align: center;
		  transition: all 0.25s ease-in;
		  
		  @media (min-width: 1250px) and (max-width: 1600px) {
		  		font-size: 16px;
		  } 
		   @media (min-width: 1750px) {
		   	 height: 53px;
		   }
		   

		  &.ant-btn-sm {
		    border-radius: 16px;
		  }
		  
		   ${({ boxshadow }) => {
			if ( boxshadow ) {
				return css`
 				box-shadow: 0 0 10px 0 rgba(8, 107, 246, 0.5);
				 &:hover {
		     		box-shadow: 0 0 12px 0 rgba(8, 107, 246, 0.72);
		  		}
 			`}}}
   
    ${({ uiType }) => {
		if ( uiType && uiType ==='secondary') {
			return css`
						background-image: var(--gradientGreen); 
						box-shadow: 0 2px 10px 0 rgba(81, 160, 98, 0.5);
						&:hover {
							box-shadow: 0 2px 15px 0 rgba(81, 160, 98, 0.7);
						}
						@media (max-width: 767px) {
							margin-top: 25px; 
						}
                    `}
		
		if ( uiType && uiType ==='missionBtn') {
			return css`
					width: 200px;
					height: 36px;
					font-family: var(--fontAvenirMedium);
					font-size: 14px;
					margin-right: auto;
					margin-left: auto;
					box-shadow: 0 2px 8px 0 rgba(81, 160, 98, 0.5);
					&:hover {
						box-shadow: 0 2px 12px 0 rgba(81, 160, 98, 0.7);
					}
							background-image: var(--gradientGreen); 
							@media (max-width: 767px) {
								width: 100%;
		
							}
							@media (max-width: 480px) {
								width: 100px;
								font-size: 12px;
							}
							
	                    `}
	
		if ( uiType && uiType ==='removeDoctor') {
			return css`
						width: 200px;
						height: 36px;
						font-family: var(--fontAvenirMedium);
						font-size: 14px;
						margin-right: auto;
						margin-left: auto;
						 box-shadow: 0 0 6px 0 rgba(8, 107, 246, 0.5);
						 &:hover {
				            box-shadow: 0 0 9px 0 rgba(8, 107, 246, 0.72);
				         }
						
								@media (max-width: 767px) {
									width: 100%;
								}
								@media (max-width: 480px) {
									width: 100px;
									font-size: 12px;
								}	
		                    `}

		if ( uiType && uiType ==='removeSpeciality') {
				return css`
						width: 200px;
						height: 36px;
						margin-top: 10px;
						font-family: var(--fontAvenirMedium);
						background-image: linear-gradient(to left, #f26464, #e13434);
						font-size: 14px;
						margin-right: auto;
						margin-left: auto;
						@media (max-width: 767px) {
									width: 100%;
								}
								@media (max-width: 480px) {
									width: 100px;
									font-size: 12px;
								}	
		                    `}
		
	if ( uiType && uiType ==='login') {
			return css`
  					border-radius: 16px; 
						@media (max-width: 767px) {
							width: 100%;
							margin-top: 10px;
						}
                    `}
	else if ( uiType && uiType === 'save-patient') {
		return css`
					display: inline-flex;
					width: 224px;
					height: 45px;
					align-items: center;
					justify-content: center;
					padding-top: 0;
					padding-bottom: 0;
					   @media (max-width: 1023px) {
					   	display: ${({mobile}) => (mobile) ? 'none;' : 'inline-flex;'};
					   }
					margin-top: 28px;
					
						@media (max-width: 1329px) {
        					margin-top: 30px;
   						 }
                   `}
		else if ( uiType && uiType === 'save') {
			return css`
					display: inline-flex;
					width: 224px;
					height: 45px;
					align-items: center;
					justify-content: center;
					padding-top: 0;
					padding-bottom: 0;
			
	
					@media (max-width: 1329px) {
        					margin-top: 30px;
   						 }
   					@media  (min-width: 1201px) and (max-width: 1329px) {
						    width: 200px;
    						margin-left: 20px;
    						margin-top: 0;
					}
                   `}
		else if ( uiType && uiType === 'setting-add') {
			return css`
					display: inline-flex;
					width: 224px;
					height: 45px;
					align-items: center;
					justify-content: center;
					 @media (min-width: 1024px)  and (max-width: 1439px){
	  						font-size: 16px;
						}
				
                   `}
		else if ( uiType && uiType === 'small-border') {
			return css`
					  width: 220px;
					  height: 48px;
					  border-radius: 14px;
					  box-shadow: 0 2px 10px 0 rgba(8, 105, 246, 0.5);
					  background-image: linear-gradient(to left, #37a0f7, #3879bb);
					   &:hover {
		     				box-shadow: 0 0 12px 0 rgba(8, 107, 246, 0.72);
		  			   }
		  			   
					  @media (min-width: 1750px) {
		   	 			height: 53px;
		   			  }
                   `}
		else if ( uiType && uiType === 'add') {
			return css`
					display: inline-flex;
					width: 250px;
					height: 48px;
					@media (min-width: 1750px) {
		   	 			height: 53px;
		   	 			width: 300px;
		   			}
					align-items: center;
					justify-content: center;
					box-shadow: none;
					
						@media (max-width: 1023px) {
        					margin-top: 30px;
   						 }
   						 @media (min-width: 1100px)  and (max-width: 1439px){
	  						font-size: 17px;
						}
						@media (min-width: 1440px) {
	  						font-size: 18px;
						}
                   `}
			else if ( uiType && uiType === 'add-mission') {
				return css`
					display: inline-flex;
					width: 300px;
					height: 48px;
  					border-radius: 15px;
					align-items: center;
					justify-content: center;
					box-shadow: none;
					@media (max-width: 380px) {
						width: 280px;
					}
					
						@media (max-width: 1023px) {
        					margin:  30px auto;
   						 }
   						 
						@media (min-width: 1024px) and (max-width: 1250px) {
        					margin-right: 10px;
        					font-size: 17px;
   						 }
   						 
   						 @media (min-width: 1250px)  and (max-width: 1439px) {
        					width: 230px;
   						 }
   						 @media (min-width: 1440px)  and (max-width: 1759px) {
        					width: 250px;
   						 }
                   `}
		else if ( uiType && uiType === 'cancel') {
			return css`
					display: inline-flex;
					width: 220px;
					height: 48px;
					background-image: linear-gradient(to left, #f26464, #e13434);
					align-items: center;
					justify-content: center;
					margin-top: 0;
					box-shadow: none;
					@media (min-width: 1750px) {
		   	 			height: 53px;
		   			}
					
						@media (max-width: 767px) {
        					margin-top: 30px;
   						 }
                   `}
		else if ( uiType && uiType === 'uploadtest') {
			return css`
					display: inline-flex;
					width: 220px;
					height: 48px;
					@media (min-width: 1750px) {
		   	 			height: 53px;
		   			}
		   		
					align-items: center;
					justify-content: center;
					margin-top: 21px;
    				display: flex;
					margin-left: auto;
					margin-right: auto;
						@media (max-width: 1329px) {
        					//margin-top: 30px;
        					margin-left: 0;
   						}
   						
   					@media (max-width: 1023px) {
        				margin-left: 0;
						margin-right: auto;	
   					}
   					
                   `}
		else if ( uiType && uiType === 'save-patient-details') {
			return css`
					display: inline-flex;
					width: 224px;
					height: 48px;
					@media (min-width: 1750px) {
		   	 			height: 53px;
		   			}
					align-items: center;
					justify-content: center;
					margin-top: 0;
					position: absolute;
					top: -158px;
					right: 0;
						 @media (min-width: 1023px)  and (max-width: 1249px) {
        					margin-left: 84px;
   						 }
			
   						 @media (max-width: 1249px) {
        					position: static;
        					width: 230px;
   						 }
                   `}
		else if ( uiType && uiType === 'close') {
			return css`
					display: inline-flex;
					width: 150px;
					height: 48px;
					padding-bottom: 0;
					padding-top: 0;
					@media (min-width: 1750px) {
		   	 			height: 53px;
		   			}
					justify-content: center;
					align-items: center;
					margin-left: 30px;
					text-align: center;
					background: none;
					border-radius: 26px;
  					border: solid 1px var(--blue);
					color: var(--blue);
					box-shadow: none;
                   `}
	else if ( uiType && uiType === 'back') {
		return css`
					display: inline-flex;
					width: 224px !important;
					height: 48px;
					padding-bottom: 0;
					padding-top: 0;
					justify-content: center;
					align-items: center;
					margin-left: 0;
					text-align: center;
					background: none;
					border-radius: 26px;
  					border: solid 1px var(--blue);
					color: var(--blue);
					box-shadow: none;
					
		
					@media (min-width: 1750px) {
		   	 			height: 53px;
		   			}
		   	
		   			@media (max-width: 1200px) {
		   	 			margin-top: 30px;
		   	 			
		   			}
		   			@media (min-width: 1200px) {
		   	 			margin-left: 30px;
		   	 			width: 150px !important;
		   			}		
         `}
		else if ( uiType && uiType === 'view') {
			return css`
					display: inline-flex;
					width: 174px;
					height: 48px;
					background-image: none;
					@media (min-width: 1750px) {
		   	 			height: 53px;
		   			}
					justify-content: center;
					align-items: center;
					margin-left: 30px;
					text-align: center;
					background: none;
					border-radius: 14px;
  					border: solid 1px var(--blue);
					color: var(--blue);
					box-shadow: none;
					a {
						color: var(--blue);
						&:hover {
							color: var(--blue);
						}
					}
					@media (max-width: 767px) {
        					margin-top: 30px;
        					margin-left: 0;
        					width: 220px;
   						 }
                   `}
			}}	 
    }
    
`
export default StyledButton;
