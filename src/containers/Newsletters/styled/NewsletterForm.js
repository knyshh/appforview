import styled from "styled-components";
import IconAdmin from "../../../assets/img/newlettericon.svg";

const Block = styled.div`
  margin: 60px auto 0 auto;
  padding-bottom: 55px;
  max-width: 700px;
  display: block;

  @media (min-width: 1240px) {
    width: 650px;
  }

  @media (min-width: 1750px) {
    width: 750px;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 55px;
`;

const SelectAll = styled.div`
  padding: 0 0 25px 20px;
  cursor: pointer;
  text-decoration: underline;
`;

export default {
  Block,
  Buttons,
  SelectAll
};
