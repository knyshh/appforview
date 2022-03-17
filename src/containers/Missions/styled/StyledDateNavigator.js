import styled from "styled-components";
import Next from 'assets/img/mission-arrow.svg';

const Block = styled.div`
	width: 100%;
	display: flex;
	height: 57px;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	font-size: 16px;
    background-color: #ffffff;
    font-family: var(--fontMonstseratBold);
    
     @media (max-width: 500px) {
     	  font-size: 14px;
     }
      @media (max-width: 380px) {
     	  font-size: 12px;
     }
     &>div {
     	display: inline-block;
     }
     span {
     	&:last-child{
     		&:after {
				content: '  ';
			}
     	}
     }
`;
const IconNext = styled.div`
	display: inline-block;
	cursor: pointer;
	width: 10px;
	height: 16px;
	margin-left: 30px;
    background: url(${Next}) center center no-repeat;
    
    @media (max-width: 480px) {
		margin-left: 10px;
	}
`;
const Month = styled.span`
	display: inline-block;
	padding-left: 5px;
	&:after {
		content: ',  ';
	}
`;
const IconPrev = styled.div`
	display: inline-block;
	cursor: pointer;
	width: 10px;
	height: 16px;
	margin-right: 30px;
	transform: rotate(180deg);
    background: url(${Next}) center center no-repeat;
    
    @media (max-width: 480px) {
		margin-right: 15px;
	}
	
`;

export default {
	Block,
	Month,
	IconNext,
	IconPrev
}