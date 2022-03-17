import styled from "styled-components";

const ForgotForm = styled.div`
	max-width: 700px;
	margin: 0 auto;
	padding: 15px 0 25px 0;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 45px;
	
	@media (max-width: 767px) {
		flex-direction: column;	 
		justify-content: center; 
	}
`;

export default {
	ForgotForm,
	Buttons
}