import styled from 'styled-components'
import RemoveIcon from 'assets/img/removeicon.svg';


const StyledUploaderRemove = styled.div`
    position: absolute;
	width: 24px;
	height: 24px;
	right: -10px;
    bottom: -3px;
    border-radius: 50%;
	background: var(--red) url(${RemoveIcon}) center center no-repeat;
	cursor: pointer;
`
export default StyledUploaderRemove;


