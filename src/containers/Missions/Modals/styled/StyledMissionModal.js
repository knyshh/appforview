import styled, { css } from "styled-components";
import RemoveIcon from "assets/img/removeicon.svg";
import Add from "assets/img/add.svg";

const DoctorMissionDetails = styled.div`
  width: 100%;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0;
`;
const AdminMissionDetails = styled.div`
  width: 100%;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0;
`;
const BlockAddMission = styled.div`
  width: 100%;
  max-width: 860px;
  padding: 40px 60px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1023px) {
    padding: 40px 0;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 40px 20px;
  }
  @media (min-width: 1440px) and (max-width: 1650px) {
    padding: 40px 20px;
  }
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 1023px) {
    flex-direction: column;
    padding-left: 0;
  }
`;
const FilterRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-left: 20px;

  @media (max-width: 1023px) {
    flex-direction: column;
    padding-left: 0;
  }
`;
const RowLeft = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1023px) {
    flex-direction: column;
    padding-left: 0;
  }
`;
const RowRight = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: flex-end;

  @media (max-width: 1023px) {
    flex-direction: column;
    padding-left: 0;
  }
`;
const ColLeft = styled.div`
  width: 50%;
  max-width: 360px;
  margin-right: 34px;

  @media (max-width: 1023px) {
    width: 100%;
    margin-right: 0;
    max-width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }
`;

const RowList = styled.div`
  width: 100%;
  margin-bottom: 25px;
  @media (max-width: 767px) {
  }
`;
const SpecialitiesBlock = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

const RowInside = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  @media (max-width: 1023px) {
    flex-direction: column;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--placeholder);
  }

  @media (max-width: 1023px) {
    padding-top: 15px;
  }
`;
const ColRight = styled.div`
  width: 50%;
  max-width: 360px;

  @media (max-width: 1023px) {
    width: 100%;
    max-width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }
`;
const ColPlaces = styled.div`
  width: 50%;
  max-width: 200px;

  @media (max-width: 1023px) {
    width: 100%;
    max-width: 100%;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Remove = styled.div`
  width: 24px;
  display: inline-block;
  height: 24px;
  margin-left: 34px;
  margin-top: 39px;
  border-radius: 50%;
  background: var(--red) url(${RemoveIcon}) center center no-repeat;
  cursor: pointer;

  @media (max-width: 1023px) {
    position: static;
    display: flex;
    width: 150px;
    height: 48px;
    border-radius: 48px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;

const AddButton = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  font-family: var(--fontAvenirMedium);
  font-size: 16px;
  letter-spacing: normal;
  text-align: left;
  cursor: pointer;
  padding-left: 20px;
  height: 48px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  transition: none;
  transform: none;
  outline: none;

  ${({ disabled }) => {
    if (disabled) {
      return css`
        pointer-events: none;
        cursor: not-allowed !important;
        opacity: 0.6;
      `;
    }
  }} &:hover, &:active, &:focus {
    border: none;
    background-color: transparent;
    color: var(--defaultColor);
    transition: none;
    transform: none;
    outline: none !important;
    box-shadow: none !important;
  }
  //&:focus:not(:focus-visible) {
  //	  outline: 0 !important;
  //	  box-shadow: none !important;
  //	  box-shadow: none !important;
  //}
  //&:disabled {
  //	opacity: 0.8;
  //
  //    &>div{
  //    	cursor: not-allowed;
  //    	pointer-events: none;
  //    }
  //	cursor: not-allowed;
  //	pointer-events: none;
  //
  //}
`;

const AddIcon = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  background: url(${Add}) center center no-repeat;
  background-size: cover;
  cursor: pointer;
  margin-right: 10px;
  position: relative;
  top: -4px;
`;

const Label = styled.div`
  font-family: var(--fontAvenirRoman);
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: var(--gray);
  padding-bottom: 10px;
  padding-left: 20px;
  width: 100%;
`;

const DateLine = styled.p`
  font-family: var(--fontAvenirMedium);
  font-size: 18px;
  color: #000;
  display: inline-block;
`;

const RowAddSpeciality = styled.div`
  width: calc(100% - 360px);
  padding: 30px 0 0 0;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export default {
  BlockAddMission,
  ColRight,
  FilterRow,
  RowAddSpeciality,
  ColLeft,
  RowInside,
  Row,
  RowLeft,
  ColPlaces,
  Buttons,
  RowList,
  SpecialitiesBlock,
  Remove,
  AddIcon,
  AddButton,
  DoctorMissionDetails,
  Label,
  DateLine,
  RowRight,
  AdminMissionDetails
};
