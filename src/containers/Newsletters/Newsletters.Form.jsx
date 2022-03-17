import React  from 'react';
import { reduxForm, change, untouch } from "redux-form";
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { Select } from 'antd';

import { destinationsSelector } from "../../services/destinations/destinations.selector";
import { specialitiesSelector } from "../../services/specialities/specialities.selector";
import MultySelectField from "../../components/MultySelectField/MultySelectField";
import Button from '../../components/Button/Button';
import { shareNewsletterAction } from '../../services/newsletters/newsletters.action'
import Styled from './styled/NewsletterForm'


const { Option } = Select;

const NewslettersForm = ({ handleSubmit, setPopupStatus, destinations ,specialities }) => {
    const dispatch = useDispatch();

    const onSelectAll = (name, values) => {
        dispatch(change('newslettersForm', name, values));
        dispatch(untouch('newslettersForm', name));
    };

    return (
        <Styled.Block>
            <form onSubmit={handleSubmit} >
                <MultySelectField
                    name="specialities"
                    label="Specialities"
                    placeholder="Specialities"
                    getPopupContainer={trigger => trigger.parentNode}
                >
                    {
                        specialities.map(speciality => (
                            <Option key={speciality.id} value={speciality.id}>
                                {speciality.name}
                            </Option>
                        ))
                    }
                </MultySelectField>
                <Styled.SelectAll
                    onClick={() => {
                        onSelectAll("specialities", specialities.map(s => s.id))
                    }}>
                    Select all specialities
                </Styled.SelectAll>
                <MultySelectField
                    getPopupContainer={trigger => trigger.parentNode}
                    name="destinations"
                    label="Destinations"
                    placeholder="Destinations"
                >
                    {
                        destinations.map(destination => (
                            <Option key={destination.id} value={destination.id}>
                                {destination.name}
                            </Option>
                        ))
                    }
                </MultySelectField>
                <Styled.SelectAll
                    onClick={() => {
                        onSelectAll("destinations", destinations.map(d => d.id))
                    }}>
                    Select all destinations
                </Styled.SelectAll>

                <Styled.Buttons>
                    <Button width='150px' htmlType="submit" >Send</Button>
                    <Button uiType='close' onClick={setPopupStatus.bind(null, null)} >Close</Button>
                </Styled.Buttons>

            </form>
        </Styled.Block>
    )
};

export default compose(
    connect(
        createStructuredSelector({
            destinations: destinationsSelector,
            specialities: specialitiesSelector
        }), {}
    ),
    reduxForm({
        form: 'newslettersForm',
        onSubmit: (value, dispatch, { newsletterId }) => {
            dispatch(shareNewsletterAction({newsletterId, ...value }))
        }
    })
)
(NewslettersForm)