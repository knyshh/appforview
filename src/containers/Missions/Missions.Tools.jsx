import React from 'react';
import { connect } from "react-redux";

import Button from 'components/Button/Button';
import QuarterNav from "./Missions.QuarterNav";
import Filters from './Missions.Filters';
import {setModalStatusAction} from "services/modals/modals.action";
import { MODALS_IDS } from "constants/common";
import StyledAddIcon from "containers/Settings/styled/StyledAddIcon";
import Styled from 'containers/Missions/styled/StyledMissionTools.js'
import StyledContainer from "components/styled/StyledContainer";

const MissionsTools = ({ date, onChange, setModalStatus }) => {
    return (
        <StyledContainer>
            <Styled.Header>
                <Button boxshadow uiType="add-mission" onClick={setModalStatus.bind(null, MODALS_IDS.ADD_NEW_MISSION)} >
                    <StyledAddIcon/>
                    Add New Missions
                </Button>
                <QuarterNav date={date} onChange={onChange} />
                <Filters/>
            </Styled.Header>
        </StyledContainer>
    );
};

export default connect(
    null,
    { setModalStatus: setModalStatusAction
})(MissionsTools);