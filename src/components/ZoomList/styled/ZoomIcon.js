import styled from "styled-components";
import Icon from "assets/img/zoom.svg";

const StyledZoomIcon = styled.i`
  display: inline-block;
  width: 55px;
  height: 55px;
  background: url(${Icon}) center center no-repeat;
  background-size: contain;
  cursor: pointer;
  @media  (min-width: 1330px) and (max-width: 1399px) {
     margin-right: 10px;
  }
`;

export default StyledZoomIcon;
