import React from 'react';
import { Pagination as AntPagination } from "antd";
import {createStructuredSelector} from "reselect";
import { connect } from "react-redux";

import { getFilersSelector } from "services/filters/filters.selector";
import StyledPagination from "components/Pagination/styled/StyledPagination";

const PAGINATION_LIMIT = 50;

const Pagination = ({ request, filters, total,  ...props }) => {
    const handleChange = (page) => {
        request({ ...filters, _start: page * PAGINATION_LIMIT - 50, _limit: PAGINATION_LIMIT })
    };
    return (
        <StyledPagination>{
            (total > PAGINATION_LIMIT)
            && <AntPagination  onChange={handleChange} total={total} {...props} />
        }</StyledPagination>
    )
};

export default connect(createStructuredSelector({
    filters: (state, { name }) => getFilersSelector(state, name)
}))(Pagination);