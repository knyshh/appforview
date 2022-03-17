import styled from "styled-components";

const BlockFilters = styled.div`
	width: 500px;
	max-width: 550px;
	display: flex;
	justify-content: flex-end;
	@media (max-width: 1023px) {
		width: 100%;
		max-width: 100%;
		flex-direction: column;
		justify-content: center;
	}
	.ant-select {
		border: none !important;
	}
`;
const ColFilters = styled.div`
	display: inline-block;
	width: 250px;
	margin-left: 15px;
	
	&:first-of-type {
	
		@media (min-width: 1024px) {
			margin-left: 0;
		}
	}
				
	@media (max-width: 1023px) {
		margin-bottom: 15px;
		width: 100%;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	@media (min-width: 1250px)  and (max-width: 1439px) {
        width: 220px;
   	}
	@media (max-width: 380px) {
		width: 280px;
	}
	
	
`;

export default {
	BlockFilters,
	ColFilters
}