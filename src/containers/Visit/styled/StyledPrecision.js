import styled from "styled-components";
import IconNext from "assets/img/arrow-right.svg";
import { Button } from "antd";

const ButtonPrecision = styled(Button)`
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
  padding: 9px 11px 8px 15px;
  cursor: pointer;
  align-items: center;
  &:hover {
    color: #3879bb;
    border: solid 1px #3879bb;
  }

  @media (max-width: 1249px) {
  }
`;
const Header = styled.div``;

export default {
  ButtonPrecision
};
