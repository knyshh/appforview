import styled from "styled-components";
import { hourCellHeight } from "../../../../constants/weeklyCalendar";

const Calendar = styled.div`
  margin: 35px 0 45px 0;
`;

const DaysOfWeekRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding-left: 90px;
`;

const DaysOfWeekCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  min-height: ${hourCellHeight}px;
  align-items: center;
  font-family: var(--fontAvenirHeavy);
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  color: #0f3253;
  padding: 28px 0 25px 0;
  background-color: #ffffff;
  margin-left: 5px;
  border-bottom: 1px solid #e9f1f4;

  @media (max-width: 1399px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 550px) {
    font-size: 10px;
  }
  @media (max-width: 400px) {
    font-size: 8px;
  }
  @media (min-width: 1400px) {
    font-size: 20px;
  }

  @media (min-width: 1650px) {
    font-size: 21px;
  }
  @media (min-width: 1750px) {
    font-size: 24px;
  }
  &:first-child {
    border-radius: 4px 0 0 0;
    margin-left: 0;
  }
  &:last-child {
    border-radius: 0 4px 0 0;
  }
`;

const DailyContentWrap = styled.div`
  //height: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //overflow-y: auto;
`;

const DailyContentWrapOverflow = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 1 auto;
  align-items: stretch;
  min-height: 1440px;
  padding-top: 2px;
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
  background: #fff;
  flex: 1;
  margin-left: 5px;
  &:first-child {
    margin-left: 0;
  }
`;

const DailyTimeColumn = styled.div`
  display: flex;
  width: 90px;
  flex-direction: column;
`;

const DailyTimeCell = styled.div`
  display: flex;
  height: ${hourCellHeight}px;
  border-bottom: none;
  border-right: none;
  color: #5d8bb6;
  text-align: right;
  position: relative;
  top: -11px;
  font-family: var(--fontAvenirMedium);
  font-size: 14px;
  justify-content: center;
  @media (min-width: 1650px) {
    font-size: 15px;
  }
`;

const DailyCell = styled.div`
  display: flex;
  height: ${hourCellHeight}px;
  border-bottom: 1px solid #e9f1f4;
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
  cursor: pointer;
  //overflow: hidden;
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

const Visit = styled.div`
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;
  width: 100%;
  flex: 1;
  font-family: var(--fontMonstseratBold);
  //font-size: 12px;
  font-size: 11px;
  line-height: 1.3;
  font-weight: bold;
  position: absolute;
  color: ${({ color }) => (color ? color : "var(--blue);")};
  left: 0;
  padding-left: 10px;
  display: flex;
  align-items: center;
  @media (min-width: 1750px) {
    font-size: 14px;
    padding-left: 10px;
  }
  cursor: pointer;

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

const AvailabilityWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
`;

const DayDate = styled.div`
  display: block;
  width: 100%;
  padding-top: 10px;
  font-size: 16px;
  color: #c0c0c0;
`;

const PatientName = styled.div``;
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
  PatientName,
  AvailabilityWrapper,
  DayDate
};
