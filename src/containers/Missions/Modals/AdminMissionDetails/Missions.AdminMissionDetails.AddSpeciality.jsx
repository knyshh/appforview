import React, { useState } from 'react';
import { Select as AntSelect } from 'antd';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { specialitiesSelector } from "services/specialities/specialities.selector";
import Select from "components/Select/Select";
import Styled from 'containers/Missions/Modals/styled/StyledMissionModal';
import StyledLabel from "components/ControlWrapper/styled/StyledLabel";
import StyledAddSpeciality from 'containers/Missions/Modals/styled/StyledMissionModal'

const { Option } = AntSelect;

const AddSpeciality = ({ specialities, onItemAdd }) => {
    const [ selectedSpeciality, selectSpeciality ] = useState(null);
    return (
        <Styled.Row>
            <Styled.ColLeft>
                    <StyledLabel>
                        Add New Specialities
                    </StyledLabel>
                    <Select
                        getPopupContainer={trigger => trigger.parentNode}
                        placeholder="Select Speciality"
                        onSelect={selectSpeciality}
                    >
                        {
                            specialities.map(speciality => (
                                <Option
                                    key={speciality.id}
                                    value={speciality.id}
                                    children={speciality.name}
                                />
                            ))
                        }
                    </Select>
            </Styled.ColLeft>
                <StyledAddSpeciality.RowAddSpeciality>
                    <StyledAddSpeciality.AddButton  disabled={!selectedSpeciality}
                                                    onClick={onItemAdd.bind(null, selectedSpeciality)}>
                        <StyledAddSpeciality.AddIcon></StyledAddSpeciality.AddIcon>
                        Add speciality
                    </StyledAddSpeciality.AddButton>
                </StyledAddSpeciality.RowAddSpeciality>

        </Styled.Row>
    );
};

export default connect(
    createStructuredSelector({
        specialities: specialitiesSelector
    })
)(AddSpeciality);