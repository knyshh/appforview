import styled from 'styled-components';

const UpdateLink = styled.span`
	position: absolute;
	right: 23px;
	bottom: 12px;
	cursor: pointer;
	font-family: var(--fontAvenirHeavy);
	  font-size: 16px;
	  font-weight: 900;
	  font-stretch: normal;
	  font-style: normal;
	  line-height: 1.56;
	  letter-spacing: normal;
	  text-align: center;
	  color: var(--blue);
	   @media (max-width: 767px) {
	   		font-size: 16px;
	   }
	   &:hover {
	   		color: var(--blue);
	   }
`;

const Section = styled.div`
	position: relative;
`;

export default {
	UpdateLink,
	Section
}
