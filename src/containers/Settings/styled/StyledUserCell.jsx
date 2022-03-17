import styled from 'styled-components';

const UserCell = styled.div`
	  display: flex;
	  align-items: center;
	  cursor: pointer;  	
`;

const UserPic = styled.div`
	width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 35px;
  img {
	  width: 50px;
	  height: 50px;
	  border-radius: 50%;
	  object-fit: cover;
  }
  .ant-skeleton,
  .ant-skeleton-image {
  	width: 50px;
	  height: 50px;
	  border-radius: 50%;
	  overflow: hidden;
  }
  .ant-skeleton-image-svg {
   	 width: 20px;
  
  }
`;

const Txt = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #000000;
   @media (max-width: 1249px) {
	 			font-size: 14px;
	 		}
	 		
		  @media (min-width: 1250px) and (max-width: 1600px) {
	 			font-size: 15px;
	 		}
  a {
  	color: #000000;
  	&:hover {
    	color: #000000;
  	}
  }
  
`;

export default {
	UserCell,
	UserPic,
	Txt

}
