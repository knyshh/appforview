import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ServantForm from "components/Forms/Servant/Servant.Form";
import {requestedServantSelector} from "services/servants/servants.selector";
import StyledPage from "components/styled/StyledPage";

const Servant = ({ servant = {} }) => {
    const { destination, profilePic, ...res } = servant;
    return (
        <>
            <StyledPage>
                <ServantForm
                    profilePic={profilePic}
                    initialValues={{ fullName: null, email: null, mobile: null, profilePic, destination: destination?.id, ...res, }}
                    verified={res?.verified}
                />
            </StyledPage>
        </>
    )
};

export default connect(
    createStructuredSelector({
        servant: requestedServantSelector,
    })
)(Servant);