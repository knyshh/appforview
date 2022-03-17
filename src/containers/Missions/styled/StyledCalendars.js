import styled from "styled-components";

const Block = styled.div`
	width: 100%;
	display: flex;
	//min-height: 770px;
`;
const List = styled.div`
	display: flex;
	width: 100%;
    flex-direction: row;
    margin-top: 22px;	
    margin-bottom: 70px;
    @media (max-width: 1023px) {
  		flex-direction: column;
  	};	
  	@media (min-width: 1023px) and (max-width: 1249px) {
  		flex-wrap: wrap;
  		justify-content: space-around;
  	}
	
`;
const Item = styled.div`	
  width: 33.3%;
  min-width: 300px;
  margin-left: 20px;
  min-height: 670px;
  &:first-of-type {
  	margin-left: 0;
  }
 
	 @media (max-width: 1023px) {
			width: 100%;
	 }
	
	@media (min-width: 1250px)  and (max-width: 1439px) {
		margin-left: 3px;
		max-width: 400px;
	}
	@media (min-width: 1440px)  and (max-width: 1559px) {
		margin-left: 10px;
		max-width: 480px;
	}
	@media (min-width: 1600px) {
		max-width: 570px;
	}
	@media (min-width: 1750px)  {
		max-width: 570px;
	}
  	@media (min-width: 1023px) and (max-width: 1249px) {
  		max-width: 500px;
  	}
  @media (max-width: 767px) {
  		width: 340px;
  }
  @media (max-width: 1249px) {
	    width: 100%;
	    min-width: 300px;
  		margin-left: 2px;
  	}
  
  @media (max-width: 340px) {
  	width: 280px;
  }
  
`;

const Calendar = styled.div`
	@media (max-width: 1023px) {
	    margin-bottom: 50px;
	 }	
	 @media (min-width: 1023px)  and (max-width: 11249px) {
		 margin-bottom: 30px;
	}
	  
	height: 770px !important;
	//height: auto !important;

  .rbc-calendar {
  	  background-color: #ffffff;
  }
  .rbc-header {
  	padding: 24px 0;
  	font-family: var(--fontMonstseratRegular);
  	font-size: 10px;
	line-height: 1.3;
	letter-spacing: 0.21px;
	text-align: center;
	color: #d9dfe4;
	text-transform: uppercase;
  }
  .rbc-date-cell > a {
  	font-family: var(--fontMonstseratRegular);
  	font-size: 14px;
  	color: #a8a5a8;
  }
  .rbc-date-cell {
  	padding-top: 7px;
  	padding-bottom: 7px;
  }
  .rbc-header + .rbc-header {
     border-left: none;
  }
  .rbc-month-row + .rbc-month-row {
  	border-bottom: 1px solid #efefef;
  }
  .rbc-off-range-bg {
    background: #fafafa;
  }
  .rbc-header  {
   	border-bottom: 1px solid #efefef;
  }  
     
  .rbc-day-bg + .rbc-day-bg {
  	border-left: 1px solid #efefef;
  }
  .rbc-month-view {
  	border: 1px solid #f4f3f3;
  }
  .rbc-row-segment {
  	font-family: var(--fontMonstseratRegular);
  	font-size: 12px;
  }
  .rbc-show-more {
  	display: none;
  }
  .rbc-event {
		background: none !important;
		padding: 0;
		height: 100%;
		min-height: 28px;
	}
	.rbc-show-more {
		color: var(--gray);
	    text-decoration: underline;
	    opacity: 0.8;
	    padding-top: 3px;
	    padding-left: 10px;
	}
	.rbc-event-content {
		height: 100%;
	}
`;

const CalendarMission = styled.div`
	 position: relative;
	 padding-left: 8px;
	 padding-top: 0;
	 height: 100%;
	 border-top-right-radius: 4px;
     border-bottom-right-radius: 4px;
	 border-left: 5px solid ${({color}) => (color) ? `${color};` : 'var(--blue);'};	
	
	&:before {
     content: '';
     position: absolute;
     left: 0;
     width: 100%;
     height: 100%;
     opacity: 0.3;
     border-radius: 0 4px 4px 0;
     background: ${({color}) => (color) ? `${color};` : 'var(--blue);'};
  }
	
`;

const CalendarTxt = styled.div`
	position: absolute;
    left: 0;
    width: 100%;
    top: 6px;
	opacity: 1;
	padding-left: 5px;
	padding-right: 5px;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: var(--fontMonstseratBold);
  	font-size: 10px;
    color: ${({color}) => (color) ? `${color};` : 'var(--blue);'};	
`;

const FullMarker = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  right: 4px;
  top: 4px;
  background: ${({isFull})  => (isFull) ?  '#58cb7d' : '#c43b3b'};
`;

export default {
	Block,
	List,
	CalendarTxt,
	Calendar,
	Item,
	FullMarker,
	CalendarMission
}