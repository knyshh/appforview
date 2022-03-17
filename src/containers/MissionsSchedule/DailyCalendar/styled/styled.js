import styled from "styled-components";
import { hourCellHeight } from "constants/weeklyCalendar";

const Calendar = styled.div`
  margin-bottom: 50px;
`;

const DaysOfWeekRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding-left: 90px;
  border-bottom: 1px solid #e9f1f4;
`;

const DaysOfWeekCol = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  min-height: ${hourCellHeight}px;
  border-right: 1px solid #e9f1f4;
  align-items: center;
  border-top: 1px solid #e9f1f4;
  &:first-child {
    border-left: 1px solid #e9f1f4;
  }
`;

const DailyContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DailyContentWrapOverflow = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 1 auto;
  align-items: stretch;
  min-height: 1440px;
`;

const DailyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  align-items: stretch;
`;

const DailyColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top: solid 1px #e9f1f4;
  flex: 1;
  background-color: #ffffff;
`;

const DailyTimeColumn = styled.div`
  display: flex;
  width: 90px;
  flex-direction: column;
  border-left: none;
`;

const DailyTimeCell = styled.div`
  display: flex;
  height: ${hourCellHeight}px;
  border-bottom: none;
  border-right: none;
  justify-content: center;
  font-family: var(--fontAvenirMedium);
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: right;
  color: #5d8bb6;
  padding-right: 13px;
  position: relative;
  top: -11px;
`;

const DailyCell = styled.div`
  display: flex;
  height: ${hourCellHeight}px;
  border-bottom: 1px solid #e9f1f4;
  border-right: 1px solid #e9f1f4;
`;

const DoctorRange = styled.div`
  margin-top: ${({ top }) => (top < 0 ? 0 : top)}px;
  margin-bottom: ${({ bottom }) => (bottom < 0 ? 0 : bottom)}px;
  width: 100%;
  border-radius: 4px;
  border: solid 1px #3879bb;
  background-color: rgba(246, 249, 254, 0.53);
  display: flex;
  position: relative;
  //overflow: hidden;
  margin-left: 30px;
  max-width: 300px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const Visit = styled.div`
  position: absolute;
  top: ${({ top }) => (top < 0 ? 0 : top)}px;
  bottom: ${({ bottom }) => (bottom < 0 ? 0 : bottom)}px;
  width: 100%;
  flex: 1;
  font-family: var(--fontMonstseratBold);
  font-size: 12px;
  font-weight: bold;
  color: ${({ color }) => (color ? color : "var(--blue);")};
  left: 0;
  padding-left: 10px;
  display: flex;
  align-items: center;
  @media (min-width: 1750px) {
    font-size: 14px;
    padding-left: 10px;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background: ${({ color }) => (color ? `${color};` : "var(--blue);")};
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 5px;
    height: 100%;
    background: ${({ color }) => (color ? `${color};` : "var(--blue);")};
  }
`;

const DoctorRangeName = styled.div`
  margin-top: -24px;
  position: absolute;
  left: 2px;
  font-family: var(--fontAvenirMedium);
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AvailabilityWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
`;

const PatientName = styled.div`
  position: relative;
  z-index: 9;
`;
export default {
  DaysOfWeekRow,
  DaysOfWeekCol,
  DailyContentWrap,
  DailyTimeColumn,
  DailyCell,
  DailyColumn,
  DailyContent,
  DailyTimeCell,
  Calendar,
  DailyContentWrapOverflow,
  DoctorRange,
  DoctorRangeName,
  Visit,
  AvailabilityWrapper,
  PatientName
};
