import styled from "styled-components";

const TabContent = styled.div`
  margin: 0 auto;
  height: 48px;
  border-radius: 30px;
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 767px) {
   	   width: 100%;
   	   max-width: 320px;
   	   height: auto;
  }
  @media (max-width: 1023px) {
   	   width: 100%;
   	   max-width: 600px;
   	   height: auto;
   	   flex-wrap: wrap; 
   	   margin-bottom: 30px;
  }
  @media (min-width: 1024px) and (max-width: 1249px) {
  		width: 100%;
  		max-width: 520px;
  		position: absolute;
  		left: 50%;
  		padding: 5px;
  		margin-left: -260px;
  		bottom: 25px;
  }
  @media (min-width: 1250px) and (max-width: 1439px) {
   
       padding: 5px;
       margin-left: 10px;
   }
   
   @media (min-width: 1440px) and (max-width: 1759px) {
   		position: relative;
   		top: -3px;
        padding: 5px;
        height: 55px;
   }
   
    @media (min-width: 1760px) {
       width: 640px;
       height: 60px;
       position: relative;
       right: -90px;
       top: -6px;
   }
`;

const Tab = styled.div`
  width: 130px;
  height: 38px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  font-family: var(--fontAvenirMedium);
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: 0.56px;
  text-align: center;
  cursor: pointer;
  
  @media (min-width: 1024px) and (max-width: 1249px) {
  	     font-size: 15px;
		 width: 115px;
  }
   @media (min-width: 1250px) and (max-width: 1439px) {
		  font-size: 15px;
		  width: 100px
   }
  
   @media (min-width: 1440px) and (max-width: 1759px) {
		  font-size: 16px;
		  width: 115px;
		  height: 45px;
	}
	@media (min-width: 1760px) {
		 width: 140px;
		 height: 50px;
		 margin: 0 8px;
	}  
 
   background-image: ${({isActive})  => (isActive ) ? 'var(--gradientGreen);' : 'none'};
   color: ${({isActive})  => (isActive) ? '#fff; ' : '#92959d;'};

  
  @media (max-width: 767px) {
  		width: 100%;		
  }
`;


export default {
	TabContent,
	Tab
}