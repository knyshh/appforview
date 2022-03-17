import styled from "styled-components";


const Section = styled.div`
   position: relative;
   width: 100%;
    display: flex;
    width: 100%;
    height: 100%;
	align-items: center;
	justify-content: center;
   
`;

const ResetBlock = styled.div`
	padding: 45px 0;
	display: block;
	width: 480px;
	margin-left: auto;
	margin-right: auto;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	
	form {
	 	width: 100%;
	}
`;


const Title = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Buttons = styled.div`
	width: 100%;
	margin-top: 35px;
`;

export default {
	ResetBlock,
	Title,
	Buttons,
	Section
}