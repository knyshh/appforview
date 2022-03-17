import styled from "styled-components";
import { Switch } from "antd";

const StyledSwitch  = styled(Switch)`
  width: 45px;
  height: 20px;
  border-radius: 10px;
  // border: ${({isChecked}) => (isChecked) ? '1px solid red !important;' : '1px solid green !important;'};
`;

export default StyledSwitch;
