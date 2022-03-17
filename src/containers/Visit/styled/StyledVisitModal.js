import styled from "styled-components";

const Block = styled.div`
  max-width: 480px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 35px 0 50px 0;
  
  @media (max-width: 540px) {
    max-width: 100%;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  justify-content: center;
`;

export default {
  Block,
  Buttons
};
