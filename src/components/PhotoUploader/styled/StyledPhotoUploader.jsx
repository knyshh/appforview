import styled from 'styled-components';
import { DEVICE } from 'constants/media';

const StyledPhotoUploader = styled.div`
	margin-bottom: 30px;
	display: flex;
	align-items: center;
	position: relative;
	
	 @media ${DEVICE.mobileS} {
		flex-direction: column;
		width: 100%;	
	}
`;

export default StyledPhotoUploader;
