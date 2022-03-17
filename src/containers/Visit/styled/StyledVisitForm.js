import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 90px;

  @media (max-width: 1249px) {
    flex-direction: column;
  }
`;
const ColForm = styled.div`
  display: inline-block;
  width: 944px;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const ColOptions = styled.div`
  display: inline-block;
  width: calc(100% - 944px);
  position: relative;

  @media (max-width: 1249px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

export default {
  Row,
  ColForm,
  ColOptions
};
