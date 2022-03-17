import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { getUserInfoSelector } from "services/user/user.selector";
import {USER_ROLES} from "constants/common";


const withPermissions = Component => props => {
    const isAdmin = props.user?.userType === USER_ROLES.ADMIN;
    return (
        <Component userType={props.user?.userType} isAdmin={isAdmin} {...props} />
    )
};

const composedWrapper = compose(
    connect(createStructuredSelector({
        user: getUserInfoSelector
    })),
    withPermissions
);

export default composedWrapper;