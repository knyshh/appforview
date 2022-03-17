import styled from 'styled-components';

const List = styled.div`
	display: flex;	  	
`;
const ListTxt = styled.div`
	display: inline-flex;
	width: calc(100% - 120px);
	overflow-x: scroll;
	padding-left: 20px;
	flex-direction: column;
	height: 95px;
	@media (max-width: 1023px) {
		
	} 	
`;
const Item = styled.div`
	display: inline-flex;
	width: 100px;
	height: 100px;
	position: relative;
	border-radius: 12px;
	margin-left: 10px;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	//overflow: hidden;
	//margin-bottom: 20px;	
`;

const ItemTxt = styled.div`
	display: inline-flex;
	width: 100%;
	padding: 5px 10px;
`;


const FileName = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	display: inline-block;
	padding-left: 3px;
	font-size: 12px;
	text-align: center;
	white-space: pre-line;
`;
const Txt = styled.div`
	position: absolute;
	left: 0;
	top: 47%;
	margin-top: -25px;
	font-size: 12px;
	padding: 5px;
	width: 100%;
	overflow-wrap: break-word;
	text-overflow: ellipsis;
`;

const ImgWrap = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 12px;
	border: 1px solid var(--blue);
	background: #f2f2f2;

	img {
    	height: 100%;
		object-fit: contain;
		width: 100%;
	}
	.ant-skeleton {
		height: 100%;
    	width: 100%;
    	border-radius: 12px;
	}
	.ant-skeleton-image {
    	height: 99%;
    	width: 99%;
    	border-radius: 12px;
	}
	overflow: hidden;
`;


export default {
	List,
	FileName,
	Txt,
	ImgWrap,
	Item,
	ListTxt,
	ItemTxt
}
