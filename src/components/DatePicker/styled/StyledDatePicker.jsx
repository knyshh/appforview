import styled from 'styled-components'
import { DatePicker } from 'antd';

const StyledDatePicker = styled(DatePicker)`
    && {
        border: ${({hasError, bordered}) => (hasError) ? '1px solid var(--red);' : (bordered) ? '1px solid var(--borderInput);' : 'none;'};
		background-color: var(--white);
		position: relative;
		padding: 13px 20px 11px 21px;
		color: var(--defaultColor);
		height: 48px;
		line-height: 48px;
        border-radius: 12px;
        font-family: var(--fontAvenirMedium);
		font-size: 18px;
		font-weight: 500;
		box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
        &[disabled] {
          color: var(--gray); 
        }
        .ant-picker-input > input {
	        font-family: var(--fontAvenirMedium);
			font-size: 16px;
        }
        
        &:hover {
 			border-color:  ${({hasError, bordered}) => (hasError) ? 'var(--red);' : (bordered) ? 'var(--borderInput);' : 'transparent'};
       }

    }
`

export default StyledDatePicker;


