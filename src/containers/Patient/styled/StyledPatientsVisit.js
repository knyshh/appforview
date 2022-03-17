import styled from "styled-components";
import Icon from "../../../assets/img/download.svg";
import IconNext from "../../../assets/img/arrow-right.svg";
import { Link as RouterLink } from "react-router-dom";

const SectionVisits = styled.div`
  position: relative;
  margin-bottom: 40px;
`;
const VisitBlock = styled(RouterLink)`
  display: flex;
  height: 70px;
  border-bottom: solid 1px #d6e1e9;
  padding: 16px 24px 17px 25px;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  &:nth-child(1) {
    margin-top: 10px;
  }
  &:last-child {
    border-bottom: none;
  }
`;
const VisitTitle = styled.div`
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

const VisitList = styled.div`
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  @media (max-width: 1099px) {
    width: 100%;
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
  max-width: 100px;
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
  width: calc(100% - 150px);

  @media (min-width: 1330px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100% - 150px);
  }
`;

const Link = styled.div`
  width: 20px;
`;

const LinkDownload = styled.div`
  width: 17px;
  height: 17px;
  display: inline-block;
  background: url(${Icon}) center center no-repeat;
  background-size: contain;
  cursor: pointer;
  position: relative;
  top: -1px;
  z-index: 9;
`;

const LinkMore = styled.div`
  width: 7px;
  height: 11px;
  position: relative;
  top: 0px;
  cursor: pointer;
  display: inline-block;
  background: url(${IconNext}) center center no-repeat;
  background-size: contain;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default {
  VisitBlock,
  SectionVisits,
  VisitTitle,
  VisitList,
  Date,
  Name,
  LinkDownload,
  LinkMore,
  Link
};
