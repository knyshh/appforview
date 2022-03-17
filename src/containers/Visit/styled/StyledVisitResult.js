import styled from "styled-components";
import IconNext from "../../../assets/img/arrow-right.svg";

const SectionTestResults = styled.div`
  position: relative;
  margin-bottom: 40px;

  .ant-collapse-content-box {
    font-family: var(--fontAvenirBook);
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000;

    a {
      font-family: var(--fontAvenirBook);
      font-size: 12px !important;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: left;
      color: #000;
      &:hover {
        color: #000;
      }
    }
  }
  .ant-collapse {
    border-radius: 0 0 14px 14px;
    background-color: #fff;
    border: none;
  }
  .anticon.anticon-right.ant-collapse-arrow {
    width: 7px;
    height: 11px;
    cursor: pointer;
    background: url(${IconNext}) center center no-repeat;
    background-size: contain;
    transition: all 0.2s ease-in;
    margin-top: -1px;
  }
  .ant-collapse-item-active .anticon.anticon-right.ant-collapse-arrow {
    transform: rotate(90deg);
    margin-top: -6px;
  }
  .ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-arrow
    svg {
    display: none;
  }
  .ant-collapse > .ant-collapse-item {
    border-bottom: solid 1px #d6e1e9;
    min-height: 55px;
    position: relative;
    &:nth-child(1) {
    }
    &:last-child {
      border-bottom: none;
    }
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    position: relative;
    padding: 17px 24px 17px 25px;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0px 16px 25px 27px;
    & > div {
      padding-bottom: 5px;
    }
  }
  .ant-collapse-item:last-child > .ant-collapse-content {
    border-radius: 0 0 14px 14px;
  }
  .ant-collapse-content {
    border: none;
  }
`;
const TestResultBlock = styled.div`
  display: flex;
  padding: 0;
  justify-items: center;
  //justify-content: space-between;
`;
const ResultTitle = styled.div`
  width: 100%;
  height: 45px;
  background-color: #3879bb;
  padding: 11px 26px 6px 26px;
  border-radius: 14px 14px 0 0;
  color: #fff;
  font-family: var(--fontAvenirHeavy);
  font-size: 17px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
`;

const ResultsList = styled.div`
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  @media (max-width: 1023px) {
    width: 100%;
    margin-top: 10px;
  }
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  font-family: var(--fontAvenirMedium);
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #92959d;
  display: inline-block;
`;

const Name = styled.div`
  font-family: var(--fontAvenirMedium);
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  display: inline-block;
  padding: 0 15px;
`;
const LinkMore = styled.div``;

export default {
  SectionTestResults,
  TestResultBlock,
  ResultTitle,
  ResultsList,
  Date,
  Name,
  LinkMore
};
