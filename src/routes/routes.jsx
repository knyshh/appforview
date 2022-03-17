import React from "react";
import { Switch } from "react-router";

import { urlLocations } from './urlLocations';
import RouteWrapper from './RouterWrapper';
import UnAuthorizeLayout from "layouts/UnAuthorizeLayout/UnAuthorizeLayout";
import AuthorizeLayout from "layouts/AuthorizeLayouts/AuthorizeLayout";

import Containers from 'containers/index'

export default () => (
    <>
        <Switch>
            <RouteWrapper
                exact
                path={urlLocations.login}
                layout={UnAuthorizeLayout}
                component={Containers.Login}
            />
            <RouteWrapper
                exact
                path={urlLocations.registration}
                layout={UnAuthorizeLayout}
                component={Containers.Registration}
            />
            <RouteWrapper
                exact
                path={urlLocations.resetPassword}
                layout={UnAuthorizeLayout}
                component={Containers.ResetPassword}
            />
            <RouteWrapper
                exact
                path={urlLocations.dashboard}
                layout={AuthorizeLayout}
                component={Containers.Dashboard}
            />
            <RouteWrapper
                exact
                path={urlLocations.newsletters}
                layout={AuthorizeLayout}
                component={Containers.Newsletters}
                title={"Newsletters"}
            />
            <RouteWrapper
                exact
                path={urlLocations.doctorInfo}
                layout={AuthorizeLayout}
                component={Containers.Doctor}
                title={"Doctor Profile"}
            />
            <RouteWrapper
                exact
                path={urlLocations.servantInfo}
                layout={AuthorizeLayout}
                component={Containers.Servant}
                title={"Servant Profile"}
            />
            <RouteWrapper
                exact
                path={urlLocations.settings}
                layout={AuthorizeLayout}
                component={Containers.Settings}
                title={"Settings"}
            />
            <RouteWrapper
                exact
                path={urlLocations.profile}
                layout={AuthorizeLayout}
                component={Containers.Profile}
                title={"Profile"}
            />
            <RouteWrapper
                exact
                path={urlLocations.patients}
                layout={AuthorizeLayout}
                component={Containers.Patients}
                title={"Patients"}
            />
            <RouteWrapper
                exact
                path={urlLocations.patientInfo}
                layout={AuthorizeLayout}
                component={Containers.Patient}
                title={"Patient Profile"}
            />
            <RouteWrapper
                exact
                path={urlLocations.visitInfo}
                layout={AuthorizeLayout}
                component={Containers.Visit}
                title={"Visit Details"}
            />
            <RouteWrapper
                exact
                path={urlLocations.onlineClinic}
                layout={AuthorizeLayout}
                component={Containers.OnlineClinic}
                title={"Online Clinic"}
            />
            <RouteWrapper
                exact
                path={urlLocations.missions}
                layout={AuthorizeLayout}
                component={Containers.Missions}
                title={"Missions Schedule"}
            />
            <RouteWrapper
                exact
                path={urlLocations.missionsScheduleInfo}
                layout={AuthorizeLayout}
                component={Containers.MissionsSchedule}
                title={"Mission Schedule"}
            />
        </Switch>
    </>
);
