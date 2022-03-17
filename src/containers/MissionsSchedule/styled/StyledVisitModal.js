import styled from "styled-components";
import { Link } from "react-router-dom";
const ButtonCol = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const CenteredCol = styled.div`
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 15px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Col100 = styled.div`
  width: 100%;
`;

const Col50 = styled.div`
  width: 45%;
  max-width: 325px;
  display: inline-block;

  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
  }
`;

const VisitBtn = styled(Link)`
  line-height: 48px !important;
  margin-left: 30px;
`;

export default {
  ButtonCol,
  CenteredCol,
  Row,
  Col100,
  Col50,
  VisitBtn
};
