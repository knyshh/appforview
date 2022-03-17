import styled from "styled-components";

const Page = styled.div`
  padding: 70px 0;
`;

const DateTitle = styled.h2`
  font-family: var(--fontAvenirHeavy);
  font-size: 32px;

  @media (max-width: 1500px) {
    font-size: 32px;
  }
  @media (max-width: 1099px) {
    font-size: 28px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
  }
  @media (min-width: 1700px) {
    font-size: 36px;
  }
`;

const Filter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1099px) {
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1100px) and (max-width: 1500px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1500px) {
    margin-bottom: 40px;
  }
  margin-bottom: 40px;
  .ant-select,
  .ant-picker {
    border: none !important;
  }
`;
const LeftCol = styled.div`
  width: calc(100% - 300px);
  display: inline-flex;
  align-items: center;
  @media (max-width: 1099px) {
    width: 100%;
    margin-bottom: 25px;
    flex-direction: column;
  }
`;
const RightCol = styled.div`
  min-width: 250px;
  max-width: 300px;
  display: inline-flex;
  align-items: center;

  @media (max-width: 1099px) {
    width: 100%;
    margin-bottom: 25px;
    justify-content: center;
  }
`;

const NoFilter = styled.p`
  width: 100%;
  text-align: center;
  font-family: var(--fontAvenirHeavy);
  font-size: 18px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #000000;
  padding: 40px 0;
`;

const Col33 = styled.div`
  width: 350px;
  max-width: 350px;
  margin-left: 20px;
  &:first-of-type {
    margin-left: 0;
  }
  @media (min-width: 1250px) and (max-width: 1500px) {
    width: 300px;
  }
  @media (max-width: 1099px) {
    width: 100%;
    margin-left: 0;
    max-width: 550px;
    margin-bottom: 25px;
  }
`;

const DatePickerNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .ant-picker {
    margin: 0 10px;
  }
`;

export default {
  Filter,
  LeftCol,
  Page,
  RightCol,
  Col33,
  DateTitle,
  NoFilter,
  DatePickerNav
};
