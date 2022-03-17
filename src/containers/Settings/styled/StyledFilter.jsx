import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	
	@media (max-width: 1099px) {
	 	flex-direction: column;
	 	width: 100%;
	 	max-width: 480px;
	}
	.ant-select {
		border: none !important;
	}
`;
const SearchCol = styled.div`
	width: 413px;
	@media (max-width: 1099px) {
		width: 100%;
		margin-bottom: 20px;
	}
	@media (min-width: 1100px) and (max-width: 1329px) {
		width: 200px;
	}
	margin-right: 18px;	
`;
const SelectCol = styled.div`
	width: 350px;
	@media (max-width: 1099px) {
		width: 100%;
		margin-bottom: 20px;
	}
	@media (min-width: 1100px) and (max-width: 1250px) {
		width: 300px;
	}
`;

const  GenderCol = styled.div`
	width: 170px;
	margin-left: 23px;
	@media (max-width: 1099px) {
		width: 100%;
		margin-bottom: 20px;
		margin-left: 0;
	}	
`;


export default {
	Wrapper,
	SearchCol,
	GenderCol,
	SelectCol
}