import React from 'react';
import {reduxForm} from 'redux-form';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {compose} from "redux";

import Button from "components/Button/Button";
import {diagnosesSelector} from 'services/diagnoses/diagnoses.selector';
import {updateVisitAction} from "services/visit/visit.action";

import Styled from '../styled/StyledVisitForm.js'
import PreVisitHistory from "containers/Visit/Form/Visit.Form.PreVisitHistory";
import OnVisitHistory from "containers/Visit/Form/Visit.Form.OnVisitHistory";
import VisitMedications from "containers/Visit/Form/Visit.Form.Medications";
import StyledSaveIcon from "components/styled/StyledSaveIcon";


const VisitForm = ({handleSubmit, diagnoses = [], prescription, initialValues}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Styled.Row>
                <Styled.ColForm>
                    <PreVisitHistory/>
                    <OnVisitHistory diagnoses={diagnoses}/>
                    <VisitMedications initialValues={initialValues} prescription={prescription}/>

                </Styled.ColForm>

                <Styled.ColOptions>
                    <Button uiType="save-patient-details" htmlType="submit"><StyledSaveIcon/>Save Changes</Button>
                </Styled.ColOptions>
            </Styled.Row>
        </form>
    )
};

export default compose(
    connect(createStructuredSelector({
        diagnoses: diagnosesSelector,
    })),
    reduxForm({
        form: "visitForm",
        enableReinitialize: true,
        onSubmit: (value, dispatch) => dispatch(updateVisitAction(value))
    })
)(VisitForm)