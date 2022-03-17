import styled from 'styled-components'

const StyledContainer = styled.div`
		
	width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;
     ${({relative})  => (relative) ? 'position:relative;' : ''};
     
    @media (min-width: 576px) {
        max-width: 540px;
	}
	
	@media (min-width: 667px) {
    	 max-width: 640px;
    }
    
    @media (min-width: 768px) {
        max-width: 720px;
	}
	
	@media (min-width: 900px) {
        max-width: 870px;
	}

	 @media (min-width: 1100px) {
        max-width: 1024px;
	}
	
	@media (min-width: 1240px) {
        max-width: 1210px;
    }
    
    @media (min-width: 1330px) {
        max-width: 1300px;
    }
    
    @media (min-width: 1400px) {
        max-width: 1410px;
    }
    
     @media (min-width: 1600px) {
        max-width: 1570px;
    }
    
      @media (min-width: 1600px) {
        max-width: 1570px;
    }
    
    @media (min-width: 1760px) {
        max-width: 1730px;
    }
`;

export default StyledContainer