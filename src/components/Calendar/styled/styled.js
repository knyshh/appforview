import styled from "styled-components";

const Calendar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;
const CalendarMonth = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  padding: 20px;
  border: 1px solid;
`;

const DaysRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1;
`;
const DaysCol = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
`;

const DateRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: auto;
  flex-wrap: wrap;
  height: 600px;
`;

const DateCol = styled.div`
  display: flex;
  width: 14.2857%;
  padding: 15px;
  text-align: right;
  border: ${({ dayOfMonth }) => (dayOfMonth ? "1px solid" : "")};
`;

export default {
  Calendar,
  CalendarMonth,
  DaysRow,
  DaysCol,
  DateRow,
  DateCol
};
