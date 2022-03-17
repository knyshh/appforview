import React from 'react';
import { compose } from "redux";

import { USER_ROLES } from "constants/common";
import withUserAccess from 'hoc/withUserAccess'
import SettingsTabs from "./Settings.Tabs";

const Settings = () => {
    return <SettingsTabs/>;
};

export default compose(withUserAccess(
    [USER_ROLES.ADMIN])
)(Settings);