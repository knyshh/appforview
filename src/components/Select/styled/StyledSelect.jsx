import styled, {css} from 'styled-components'
import { Select } from 'antd';
import ArrowSelect from '../../../assets/img/Triangle.svg'

const StyledSelect = styled(Select)`
    && {
        border: ${({hasError, bordered}) => (hasError) ? '1px solid var(--red);' : (bordered) ? '1px solid var(--borderInput);' : 'none;'};
		background-color: var(--white);
		position: relative;
		padding: 4px 2px;
		color: var(--defaultColor);
		height: 48px;
        border-radius: 12px;
        font-family: var(--fontAvenirMedium);
		font-size: 16px;
		font-weight: 500;
		box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
		width: ${({size})  => (size) ?  size : '100%'}; 
        &[disabled]{
          color: var(--gray); 
        }
         &:hover {    
         	.ant-input {
         		border-color:  ${({hasError, bordered}) => (hasError) ? 'var(--red);' : (bordered) ? 'var(--borderInput);' : 'transparent'};

         	}
         	border-color:  ${({hasError, bordered}) => (hasError) ? 'var(--red);' : (bordered) ? 'var(--borderInput);' : 'transparent'};
       }
       	&:not(.ant-select-disabled):hover .ant-select-selector {
       		border-color: transparent;
       	}
       	&:not(.ant-select-disabled):focus .ant-select-selector {
       		border-color: transparent;
       	}
       	
       	&.ant-select-focused:not(.ant-select-disabled).ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
       		border-color: transparent;
       		border-right-width: 0 !important;
       		box-shadow: none;
       	}
       &:not(.ant-select-disabled):hover .ant-select-selector {
    		border-color: transparent;
    		border-right-width: 0 !important;
		}
       .ant-select-selector {
           border: 1px solid transparent;
           height: 40px;
           padding: 4px 18px;
           border-radius: 12px;
       }
       .ant-select-arrow {
            cursor: pointer;
       		background: url(${ArrowSelect}) center center no-repeat;
       		transition: all 0.1s ease-in;
       }
       &.ant-select-open .ant-select-arrow  {
       		transform: rotate(180deg);
       		cursor:pointer;
       		
       }
       
       .ant-select-arrow .anticon > svg {
       		display: none;
       }
       &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
		    height: 40px;
		    padding: 4px 0;
		    position: relative;
    		left: 5px;
		}
       
        ${({ mode }) => {
			if (mode && mode === 'multiple') {
				return css`
   						 padding: 0 2px;
   						 height: auto;
							&.ant-select-multiple.ant-select-lg .ant-select-selection-search {
								height: 48px;
								line-height: 48px;
							}
							.ant-select-selector {
								min-height: 46px;
								height: auto;
								padding: 0 2px;
							}
							
							&.ant-select-multiple .ant-select-selection-placeholder {
								height: 48px;
								line-height: 48px;
							}
							&.ant-select-focused:not(.ant-select-disabled).ant-select-multiple .ant-select-selector {
							    border-color: transparent;
							    border-right-width: 0 !important;
							    outline: 0;
							    box-shadow: none;
							}
							@media (max-width: 767px) {
								
							}`
			}
		}}

    }
`

export default StyledSelect;


