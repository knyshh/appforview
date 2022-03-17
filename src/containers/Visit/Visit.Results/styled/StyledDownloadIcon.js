import styled from "styled-components";
import Icon from "assets/img/download.svg";

const StyledDownloadIcon = styled.div`
  width: 15px;
  height: 15px;
  display: inline-block;
  background: url(${Icon}) center center no-repeat;
  background-size: contain;
  cursor: pointer;
  position: relative;
  top: 2px;
  margin-left: 10px;
`

export default  StyledDownloadIcon;
