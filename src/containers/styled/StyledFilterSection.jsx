import styled from 'styled-components';

const StyledFilterSection = styled.div`
	 width: 100%;
	 display: flex;
	 justify-content: space-between;
	 background-color: #e9f1f4;
	 padding: 23px 50px  33px 40px;
	 align-items: center;
	 border-radius: 12px 12px 0 0;
	
	 @media (max-width: 1200px) {
	 	flex-direction: column;
	 	align-items: flex-start;
	 }	
	 
	 .ant-input {
	 	border: none;
	 } 
	  	
`;

export default StyledFilterSection
