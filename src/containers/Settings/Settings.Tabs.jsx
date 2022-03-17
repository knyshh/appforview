import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import Doctors from  './Settings.Doctors/Settings.Doctors';
import Servants from  './Settings.Servants/Settings.Servants';
import { urlLocations } from "routes/urlLocations";
import StyledTabs from './styled/StyledTabs';
import StyledContainer from "components/styled/StyledContainer";
import StyledTab from "./styled/StyledTab";

const USER_LISTS = {
    doctors: 'doctors',
    servants: 'servants',
};

const SettingsTabs = ({ match: { params } }) => {
    return <div>
        <StyledContainer>
            <StyledTabs>
                 <StyledTab
                     isActive={USER_LISTS.doctors === params?.userType}
                    to={urlLocations.settingsDoctors}
                >
                    Doctors</StyledTab>
                <StyledTab
                    isActive={USER_LISTS.servants === params?.userType}
                    to={urlLocations.settingsServants}
                >Servants</StyledTab>
            </StyledTabs>

            <div>
                <Switch>
                    <Route path={urlLocations.settingsDoctors} component={Doctors} />
                    <Route path={urlLocations.settingsServants} component={Servants} />
                </Switch>
            </div>
        </StyledContainer>
    </div>

};

export default withRouter(SettingsTabs);