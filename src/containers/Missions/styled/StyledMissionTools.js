import styled from "styled-components";

const Header = styled.div`
	width: 100%;
	display: flex;
	padding: 50px 0;
	position: relative;
	justify-content: space-between;
	@media (max-width: 1023px) {
		flex-direction: column;
		justify-content: center;
	}
	
	@media (min-width: 1024px) and (max-width: 1249px) {	
		padding-bottom: 120px;
	}
	
	
	
`;
const Col = styled.div`
	display: inline-block;
	width: 250px;
	&:first-of-type {
		margin-left: 0;
	}
	margin-left: 15px;
	
	@media (max-width: 1023px) {
		margin-bottom: 15px;
		width: 300px;
		margin-left: auto;
		margin-right: auto;
	}
	
	@media (min-width: 1250px)  and (max-width: 1439px) {
       width: 200px;
   	}
   	@media (min-width: 1440px)  and (max-width: 1750px) {
        width: 200px;
   	}

`;

export default {
	Header,
	Col
}