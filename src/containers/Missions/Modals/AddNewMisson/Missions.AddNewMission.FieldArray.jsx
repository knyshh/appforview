import React from 'react';
import MissionsSpecialitiesFields
    from "./Missions.AddNewMissions.SpecialitiesFields";
import Styled from 'containers/Missions/Modals/styled/StyledMissionModal'

const AddNewMissionFieldArray = ({ fields }) => {
    return (
        <Styled.SpecialitiesBlock>
            <Styled.RowList>
                {
                    <>
                        {
                            fields.map((field, index) => (
                                <MissionsSpecialitiesFields
                                    field={field}
                                    index={index}
                                    fields={fields}
                                    key={field}
                                />
                            ))
                        }
                    </>
                }
            </Styled.RowList>

            <Styled.AddButton  onClick={() => fields.push({})}>
                <Styled.AddIcon></Styled.AddIcon>
                    Add Specialities
            </Styled.AddButton>
        </Styled.SpecialitiesBlock>

    );
};

export default AddNewMissionFieldArray;