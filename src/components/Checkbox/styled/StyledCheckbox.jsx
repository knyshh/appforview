import styled from 'styled-components';
import { Checkbox } from 'antd';

import { DEVICE } from 'constants/media';
import Arrow from 'assets/img/checkbox1.svg';
import ArrowCheck from 'assets/img/checheck.svg';

export default styled(Checkbox)`
    &&& {

			  font-size: 20px;
			  font-weight: normal;
			  font-stretch: normal;
			  font-style: normal;
			  line-height: 1.75;
			  letter-spacing: normal;
			  text-align: left;
			  color: #6d7278;
			padding-left: 12px;
			display: flex;
			align-items: center;
			
			@media (max-width: 1199px) {
                font-size: 18px;
            }
			@media (max-width: 1023px) {
                font-size: 16px;
            }
            
            input[type='checkbox'] {
                width: 19px;
		        height: 19px;
            }
            
            &.ant-checkbox-wrapper.ant-checkbox-wrapper-checked.ant-checkbox-wrapper-disabled {
                //color: var(--lightGrey);
            }
            
            &.ant-checkbox-wrapper.ant-checkbox-wrapper-checked {
                border-color: transparent;
                box-shadow: none;
  
      
            }
		
		&:hover {
		   border-color: transparent;
		   .ant-checkbox-inner {
		        border-color: transparent;
		        box-shadow: none;
		        
		   }
		}
		&:focus {
		   border-color: transparent;
		   .ant-checkbox-inner {
		        border-color: transparent;
		        box-shadow: none;
		   }
		}
		 	
        .ant-checkbox {
		    width: 19px;
		    height: 19px;
		    margin-right: 5px;
		    background: url(${Arrow}) center center no-repeat;
		    border-color: transparent;
		
		    
		    &.ant-checkbox-checked {
			    &:after {
				    border-color: transparent;
			        box-shadow: none;
			    }
		    }

		     &.ant-checkbox-checked .ant-checkbox-inner::after {
	            opacity: 1;
		        width: 19px;
                height: 15px;
                left: 3px;
                top: 1px;
                transform: none;
                border: none;
	            background: url(${ArrowCheck}) center center no-repeat;
	            
             }
             
             &.ant-checkbox-checked.ant-checkbox-disabled .ant-checkbox-inner::after { 
         		
                opacity: 0.5;
             }
             
             &.ant-checkbox-checked .ant-checkbox-inner {
	             border: none;
	             border-color: transparent;
		        box-shadow: none;
             }

             & + span {
                width: 100%;
                display: inline-block;
             }
        }
        
      .ant-checkbox-inner {
	        width: 24px;
	        height: 24px;
	        background: transparent;
	        border: none;
	        position: relative;
	        border-radius: 0;
	        transition: none;
	        border-color: transparent;
	  }  
	  .ant-checkbox-checked.ant-checkbox-inner {
	  	border-color: transparent;
	  }
	  .ant-checkbox-checked.ant-checkbox-disabled {
	        
	  }
    }
`
