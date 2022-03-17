import React from 'react';
import { reduxForm } from "redux-form";
import { Link } from 'react-router-dom'

import DatePickerField from "components/DatePickerField/DatePickerField";
import Button from 'components/Button/Button'
import AdminMissionDetailsDoctors
    from "./Missions.AdminMissionDetails.Doctors";
import AddSpeciality
    from "./Missions.AdminMissionDetails.AddSpeciality";
import { updateMissionAction } from 'services/missions/missions.actions';
import {urlLocations} from "routes/urlLocations";
import Styled from 'containers/Missions/Modals/styled/StyledMissionModal';

const AdminMissionDetailsForm = ({ handleSubmit, onDoctorRemove, onDoctorSelect, mission, items, onItemAdd, onItemRemove }) => {

    return (
        <form onSubmit={handleSubmit}>
            <Styled.Row>
                <Styled.ColLeft>
                    <DatePickerField
                        getPopupContainer={trigger => trigger.parentNode}
                        name="startDate"
                        label="From"
                        placeholder="From"
                    />
                </Styled.ColLeft>
                <Styled.ColRight>
                    <DatePickerField
                        getPopupContainer={trigger => trigger.parentNode}
                        name="endDate"
                        label="To"
                        placeholder="To"
                    />
                </Styled.ColRight>
            </Styled.Row>

            <AdminMissionDetailsDoctors
                onDoctorSelect={onDoctorSelect}
                onItemRemove={onItemRemove}
                onDoctorRemove={onDoctorRemove}
                mission={{...mission, items}}
            />
            <AddSpeciality onItemAdd={onItemAdd} />

            <Styled.Buttons>
                <Button uiType="small-border" htmlType="submit">Save Changes</Button>
                <Button uiType="view">
                    <Link to={`${urlLocations.missionsSchedule}/${mission?.id}`}>View Schedule</Link>
                </Button>
            </Styled.Buttons>

        </form>
    );
};

export default reduxForm({
    form: "adminMissionDetailsForm",
    destroyOnUnmount: true,
    onSubmit: (value, dispatch, { items, mission, setNewItem }) => {
        dispatch(updateMissionAction({  ...mission, ...value, items }));
        setNewItem([])
    },
    enableReinitialize: true,
})(AdminMissionDetailsForm);