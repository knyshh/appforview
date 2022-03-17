import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  
     
    @media (max-width: 1023px) {
		flex-direction: column;
	}
  
`
const ColForm = styled.div`
	display: inline-block;
	width: 944px;
	
	@media (max-width: 1023px) {
		width: 100%;
	}
`

const ColOptions = styled.div`
  display: inline-flex;
  max-width: calc(100% - 944px);
  justify-content: flex-end;
   
  @media (max-width: 1023px) {
		width: 100%;	
    	max-width: 100%;
    	margin-bottom: 50px;
	}
`
const PatientID = styled.div`
    padding-left: 140px;
    position: relative;
    top: 10px;
    font-size: 14px;
`
export default {
	Row,
	ColForm,
	ColOptions,
	PatientID
}


