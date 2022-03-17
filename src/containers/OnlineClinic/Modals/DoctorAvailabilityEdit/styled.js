import styled from "styled-components";

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0 25px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TimeRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0 35px;
  & > * {
    width: 45%;
  }
`;

export default {
  InfoRow,
  ButtonRow,
  TimeRow
};
