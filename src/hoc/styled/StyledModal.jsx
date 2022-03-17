import styled, {css} from 'styled-components';
import React from 'react';
import { Modal } from 'antd';


const StyledModal = styled(
	({ ...props }) => <Modal {...props} />
)`
	&& {
		    width: 688px !important;
		    top: 60px;
		    border-radius: 14px;
		     
			 ${({ size }) => {
				if (size === 'small') {
					return css`
										 width: 570px !important;
										 @media (min-width: 1240px) {
												width: 570px !important;	
											}	
										 `
				}
				if (size === 'large') {
					return css`
							 width: 800px !important;
							 @media (min-width: 1240px) {
									width: 800px !important;	
								}	
							@media (min-width: 1750px) {
									width: 900px !important;
							} `
				}
				else if (size === 'wide') {
					return css`
										 width: 940px !important;
										 @media (min-width: 1240px) {
												width:940px !important;	
											}	
										@media (min-width: 1750px) {
												width: 940px !important;
										} `
				}
				
				else if (size === 'small') {
					return css`
										 width: 550px !important;
										 @media (min-width: 1240px) {
												width: 550px !important;	
											}	
										@media (min-width: 1750px) {
												width: 550px !important;
										} `
				}
			}}}
			 
			@media (max-width: 767px) {
			     top: 40px;
			     width: 80% !important;
				 max-width: 98% !important;
			}
			
			@media (max-width: 450px) {
				 width: 100% !important;
				 max-width: 99%;
				 top: 40px;
			}
			
        margin-bottom: 80px;
		background-color: #ebeef6;
		min-height: 200px;
		padding-bottom: 0;
		
		.ant-modal-content {
			border-radius: 14px;
			min-width: 100%;
			min-height: 200px;
			padding:  0;
			background-color: #ebeef6;
		}
		
		.ant-modal-close-x {
		    width: 19px;
		    height: 19px;
		    position: absolute;
		    z-index: 120;
		    top: 22px;
		    right: 20px;
		    line-height: 1;
		    
		    img {
			    width: 100%;
		    }
		}
		
		.ant-modal-body {
			padding: 20px;
			
			 @media (max-width: 767px) {
			 	padding-left: 15px;
			 	padding-right: 15px;
			 }
		}
		
		.ant-modal-header {
		    border-radius: 14px 14px 0 0;
		    height: 80px;
  			background-color: var(--blue);
  			padding: 0 10px 0 40px;
  			display: flex;
  			align-items: center;
  			
		}
		.ant-modal-title {
		  font-size:  22px;
		  font-family: var(--fontAvenirBlack);
		  font-stretch: normal;
		  font-style: normal;
		  line-height: 1.17;
		  letter-spacing: normal;
		  text-align: left;
		  color: #ffffff;
		  
		 
		  @media (max-width: 1239px) {
		  		font-size:  22px;
		  }
		  @media (max-width: 767px) {
		  		font-size:  20px;
		  }
		  
		   @media (min-width: 1600px) {
		  		font-size:  24px;
		  }
		  
		}
	
	}
`
export default StyledModal;