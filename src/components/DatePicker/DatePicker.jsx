import React from 'react';
import StyledDatePicker from "./styled/StyledDatePicker";

import 'moment/locale/en-gb';
import locale from 'antd/es/date-picker/locale/en_GB';

const DatePicker = ({children, format , ...props}) => (
        <StyledDatePicker locale={locale}  {...props} format={format || "DD MMMM YYYY"}  />
);

export default DatePicker;