import React from 'react';
import { connect } from "react-redux";
import { Spin } from 'antd';
import { createStructuredSelector } from "reselect";

import { loaderSelector } from "services/loader/loader.selector";

const LoaderWrapper = ({ children, isLoading }) => {
    return (
        <Spin spinning={isLoading} >
            { children }
        </Spin>
    )
};

export default connect(
    createStructuredSelector({
        isLoading: loaderSelector
    })
)(LoaderWrapper)