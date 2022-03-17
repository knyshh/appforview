import styled, {css} from 'styled-components';

const EmptyUpload = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 134px;
`;

const DownloadBlock = styled.div`

`;

const AddVisitDocument = styled.div`
	width: 100px;
	display: inline-flex;
	align-items: center;
	padding-top: 25px;
	//height: 134px;
`;

const EmptyUploadTxt = styled.div`
  font-size: 15px;
  width: 100%;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: center;
  margin-top: 19px;
  color: rgba(0, 0, 0, 0.25);
  
  @media (min-width: 1750px) {
  	font-size: 17px;
  }
  
  ${({small}) => {
	if (small) {
		return css`
 				font-size: 14px;
 				@media (min-width: 1750px) {
  						font-size: 14px;
  				}
 			`
	}
}}
`;

export default {
	EmptyUpload,
	AddVisitDocument,
	DownloadBlock,
	EmptyUploadTxt
}
