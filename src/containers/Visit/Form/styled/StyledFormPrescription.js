import styled from "styled-components";
import { Button as AntButton } from "antd";
import RemoveIcon from "assets/img/removeicon.svg";

const BlockPrescription = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
`;

const Remove = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: -10px;
  top: 55px;
  border-radius: 50%;
  background: var(--red) url(${RemoveIcon}) center center no-repeat;
  cursor: pointer;

  @media (max-width: 767px) {
    position: static;
    display: flex;
    width: 150px;
    height: 48px;
    border-radius: 48px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
`;

const Button = styled(AntButton)`
  width: 229px;
  height: 45px;
  border-radius: 7.5px;
  border: solid 1px #3879bb;
  font-family: var(--fontAvenirMedium);
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: 0.6px;
  text-align: center;
  color: #3879bb;
  display: flex;
  padding: 0 11px 0 25px;
  cursor: pointer;
  align-items: center;
  &:hover {
    color: #3879bb;
    border: solid 1px #3879bb;
  }
  &:focus {
    color: #3879bb;
    border-color: #3879bb;
  }
  a {
    color: #3879bb;
    border: solid 1px #3879bb;
  }

  @media (max-width: 1249px) {
  }
`;

const WrapPrescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const WrapPrescriptionPrint = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 767px) {
    margin-bottom: 50px;
    justify-content: flex-start;
  }
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  padding-top: 15px;
  border-bottom: 1px solid var(--borderInput);
  position: relative;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ColInside1 = styled.div`
  width: 150px;
  display: inline-block;
  margin-left: 0;

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
  }
`;
const ColInside2 = styled.div`
  width: 150px;
  display: inline-block;
  margin-left: 15px;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`;
const ColInside3 = styled.div`
  width: 200px;
  display: inline-block;
  margin-left: 15px;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`;
const ColInside4 = styled.div`
  width: 290px;
  max-width: 290px;
  display: inline-block;
  margin-left: 15px;
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    max-width: 100%;
  }
`;

export default {
  WrapPrescription,
  BlockPrescription,
  Button,
  List,
  Row,
  ColInside1,
  ColInside2,
  ColInside3,
  ColInside4,
  Remove,
  WrapPrescriptionPrint
};
