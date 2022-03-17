import styled from "styled-components";

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15px;
`;

const Description = styled.div`
  padding: 15px 0 25px 0;
  & > p {
    padding-bottom: 10px;
  }
`;

export default {
  ButtonRow,
  Description
};
