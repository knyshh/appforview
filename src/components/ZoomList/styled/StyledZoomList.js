import styled from "styled-components";
import {Button} from "antd";
import { Link } from 'react-router-dom';

const ZoomList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ZoomItem = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  height: 80px;
  border-bottom: solid 1px #d6e1e9;
  padding: 15px 24px 15px 25px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 5px 14px 0 rgba(0,0,0,0.2);
  margin-bottom: 20px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    min-height: 70px;
    height: auto;
  }
  position: relative;  
`;

const ZoomTxt = styled.div`
  width: 100%;
  display: flex;
`;


const LeftCol = styled.div`
  width: 70px;
  display: inline-flex;
  align-items: center;
  @media  (min-width: 1330px) and (max-width: 1399px) {
    width: 40px;
  }
`;
const RightCol = styled.div`
  min-width: calc(100% - 140px);

 @media  (min-width: 1330px) and (max-width: 1399px) {
     min-width: calc(100% - 80px);
 }
`;



const ZoomLabel = styled.div`
    font-family: var(--fontAvenirMedium);
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #92959d;
    display: inline-block;
`;

const ZoomData = styled.div`
    font-family: var(--fontAvenirMedium);
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: var(--defaultColor);
    display: inline-block;
    padding-left: 10px;
    max-width: 220px;
    
    @media  (min-width: 1330px) and (max-width: 1399px) {
       font-size: 13px;
    }
    
    text-overflow: ellipsis;
	white-space: pre-line;
    
`;

const JoinButton = styled(Button)` 
  &&& {
      display: inline-flex;
      width: 80px;
      font-family: var(--fontAvenirBook);
      height: 38px;
      padding-bottom: 0;
      padding-top: 0;
      justify-content: center;
      align-items: center;
      margin-left: 0;
      text-align: center;
      background: none;
      border-radius: 26px;
      border: solid 1px var(--blue);
      color: var(--blue);
      box-shadow: none;
      font-family: var(--fontAvenirHeavy) !important;
      &:hover {
        border: solid 1px var(--blue);
        color: var(--blue);
      }
      & > span {
        font-family: var(--fontAvenirHeavy);
      }
      
      @media (max-width: 767px) {
        width: 200px;
        margin: 15px auto 0 auto;
      }
  }
 
`;



export default {
  ZoomList,
  ZoomItem,
  ZoomLabel,
  ZoomTxt,
  LeftCol,
  RightCol,
  ZoomData,
  JoinButton
};
