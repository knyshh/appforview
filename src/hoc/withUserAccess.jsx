import React, { useEffect } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {history, userRoleMainPath} from 'routes/urlLocations';
import { getUserInfoSelector } from "services/user/user.selector";

const withUserAccess = accessedUsers => Component => p => {
    const Hoc = (props) => {
        useEffect(() => {
            props?.user?.userType &&
            !accessedUsers.includes(props?.user?.userType) &&
            history.push(userRoleMainPath[props?.user?.userType])
        }, [props?.user]);
        return <Component {...props}/>
    };
    const ComposedComponent =  compose(
        connect(
            createStructuredSelector({
                user: getUserInfoSelector
            })
        )
    )(Hoc);

    return <ComposedComponent {...p} />
};



export default withUserAccess;