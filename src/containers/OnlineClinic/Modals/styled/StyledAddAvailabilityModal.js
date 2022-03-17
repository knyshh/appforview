import styled from "styled-components";

const AvailabilityBlock = styled.div`
  max-width: 820px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1023px) {
    max-width: 100%;
  }
`;

const AddVisitBlock = styled.div`
  max-width: 770px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1023px) {
    max-width: 100%;
  }
`;

const ColLeft = styled.div`
  width: 50%;
  max-width: 380px;
  margin-right: 34px;

  @media (max-width: 1023px) {
    width: 100%;
    margin-right: 0;
    max-width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1023px) {
    flex-direction: column;
    padding-left: 0;
  }
  //.control-field {
  //  margin-bottom: 25px;
  //  .ant-input,
  //  .form-control,
  //  .ant-select {
  //    box-shadow: none;
  //  }
  //}
`;
const ButtonsCol = styled.div`
  display: flex;
  margin-top: 55px;
`;
const ColRight = styled.div`
  width: 50%;
  max-width: 380px;

  @media (max-width: 1023px) {
    width: 100%;
    margin-right: 0;
    max-width: 100%;
  }
`;

const Col50 = styled.div`
  width: 50%;
  max-width: 222px;
  margin-left: 30px;
  &:first-of-type {
    margin-left: 0;
  }
  @media (max-width: 1023px) {
    margin-left: 0px;
  }
`;

export default {
  AvailabilityBlock,
  AddVisitBlock,
  ColLeft,
  ColRight,
  Row,
  ButtonsCol,
  Col50
};
