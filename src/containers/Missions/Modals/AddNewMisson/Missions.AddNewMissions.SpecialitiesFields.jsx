import React from 'react';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Select  }  from 'antd'

import { specialitiesSelector } from "services/specialities/specialities.selector";
import SelectField from "components/SelectField/SelectField";
import InputField from "components/InputField/InputField";
import Styled from 'containers/Missions/Modals/styled/StyledMissionModal'

const { Option } = Select;

const MissionsSpecialitiesFields = ({ specialities, field, fields, index, value }) => {
    const [ places, setPlaces ] = React.useState(1);
    return (
        <Styled.RowInside>
            <Styled.ColLeft>
                 <SelectField
                     name={`${field}.speciality`}
                     getPopupContainer={trigger => trigger.parentNode}
                     label="Specialities"
                     placeholder="Specialities"
                     filterOption={(input, option) => {
                         return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                     }}
                     showSearch

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
                </SelectField>
            </Styled.ColLeft>

            <Styled.ColPlaces>
                <InputField
                    type='number'
                    name={`${field}.places`}
                    placeholder='Number of doctors'
                    label='Number of doctors'
                    min={1}
                    onChange={ event => {
                        const v = !!event.target.value ? event.target.value : 1;
                        setPlaces(v);
                    }}
                    value={places}
                />
            </Styled.ColPlaces>

            <Styled.Remove onClick={() => fields.remove(index)}>
            </Styled.Remove>
        </Styled.RowInside>
    );
};

export default connect(
    createStructuredSelector({
        specialities: specialitiesSelector
    })
)(MissionsSpecialitiesFields);