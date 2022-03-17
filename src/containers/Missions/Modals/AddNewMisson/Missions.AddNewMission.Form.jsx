import React, {useEffect, useState} from 'react';
import { compose } from "redux";
import {connect, useDispatch} from "react-redux";
import {reduxForm, FieldArray, change, untouch} from "redux-form";
import { createStructuredSelector } from "reselect";
import { Select } from "antd";
import moment from 'moment';

import { destinationsSelector } from "services/destinations/destinations.selector";
import SelectField from "components/SelectField/SelectField";
import DatePickerField from "components/DatePickerField/DatePickerField";
import Button from "components/Button/Button";
import MissionsSpecialitiesFieldArray from './Missions.AddNewMission.FieldArray'
import {addMissionAction} from "services/missions/missions.actions";
import Styled from 'containers/Missions/Modals/styled/StyledMissionModal'
import {requiredFieldsValidate} from "utils/validation";

const { Option } = Select;

const requiredFields = ['destination', 'startDate', 'endDate', 'items'];

const AddNewMissionForm = ({ destinations, handleSubmit }) => {

    const dispatch = useDispatch();

    const [ fromDate, setFromDate ] = useState(null);

    useEffect(() => {

        if(!!fromDate){
            const toDate = moment(fromDate).add(5, 'days');
            dispatch(change('addNewMission', 'endDate', toDate));
            dispatch(untouch('addNewMission', 'endDate'));
        }
    }, [fromDate]);

    return (
        <Styled.BlockAddMission>

            <form onSubmit={handleSubmit} >
                <Styled.Row>
                    <Styled.ColLeft>
                        <SelectField
                            filterOption={(input, option) => {
                                return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                             }}
                            name="destination"
                            showSearch
                            label="Destination"
                            placeholder="Destination"
                        >
                            {
                                destinations.map(destination => (
                                    <Option
                                        key={destination.id}
                                        value={destination.id}
                                        children={destination.name}
                                    />
                                ))
                            }
                        </SelectField>
                    </Styled.ColLeft>
                </Styled.Row>

                <Styled.Row>
                    <Styled.ColLeft>
                        <DatePickerField
                            onChange={setFromDate}
                            name="startDate"
                            getPopupContainer={trigger => trigger.parentNode}
                            label="From"
                            placeholder="From"
                        />
                    </Styled.ColLeft>
                    <Styled.ColRight>
                        <DatePickerField
                            name="endDate"
                            getPopupContainer={trigger => trigger.parentNode}
                            label="To"
                            placeholder="To"
                        />
                    </Styled.ColRight>
                </Styled.Row>

                <Styled.Row>
                    <FieldArray component={MissionsSpecialitiesFieldArray} name="items" />
                </Styled.Row>

                <Styled.Buttons>
                    <Button uiType="small-border" htmlType="submit" >Add Mission</Button>
                </Styled.Buttons>

            </form>
        </Styled.BlockAddMission>
    );
};

export default compose(
    connect(
        createStructuredSelector({
            destinations: destinationsSelector
        })
    ),
    reduxForm({
        form: "addNewMission",
        destroyOnUnmount: true,
        initialValues: {
            'destination': null, 'startDate': null, 'endDate': null, items: []
        },
        validate: v => requiredFieldsValidate(v, requiredFields),
        onSubmit: ({ endDate, startDate, ...value }, dispatch) => {
            dispatch(addMissionAction({
                endDate: moment(endDate).format("YYYY-MM-DD"),
                startDate: moment(startDate).format("YYYY-MM-DD"),
                ...value
            }))
        }
    })
)(AddNewMissionForm);