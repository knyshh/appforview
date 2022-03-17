import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Select } from "antd";

import PhotoUploader from "components/PhotoUploader/PhotoUploader";
import InputField from "components/InputField/InputField";
import SelectField from "components/SelectField/SelectField";
import CheckboxField from "components/CheckboxField/CheckboxField";
import DatePickerField from "components/DatePickerField/DatePickerField";
import { destinationsSelector } from "services/destinations/destinations.selector";
import Styled from "../styled/StyledForm"
import StyledPatient from "../styled/StyledPatientForm"

const GENDER = ["male", "female"];

const { Option } = Select;

const PatientFormGeneral = ({ destinations,  profilePic, fileUpload }) => {
    return (
        <>
            {/*<Styled.Row>*/}
            {/*   <StyledPatient.PatientID>patient id</StyledPatient.PatientID>*/}
            {/*</Styled.Row>*/}
            <Styled.Row>
                <PhotoUploader initialPic={profilePic} onUpload={fileUpload} formName="patient" />
            </Styled.Row>

            <Styled.Row>
                <Styled.ColLeft>

                    <InputField name="fullName" bordered placeholder="Name" label="Name" />

                    <Styled.Gender>
                        <SelectField
                            bordered
                            size='175px'
                            name="gender"
                            placeholder="Gender"
                            style={{ textTransform: 'capitalize' }}
                            label="Gender" >{
                            GENDER.map(option => (
                                <Option
                                    style={{ textTransform: 'capitalize' }}
                                    key={option}
                                    value={option}
                                    children={option}
                                />
                            ))
                        }</SelectField>
                        <Styled.GenderCheck>
                            <CheckboxField name="genderPreferredNotToSay" >
                                Prefer not to say
                            </CheckboxField>
                        </Styled.GenderCheck>
                    </Styled.Gender>

                </Styled.ColLeft>

                <Styled.ColRight>
                    <DatePickerField bordered name="dateOfBirth" label="Date of Birth" placeholder="Date of Birth" />
                    <SelectField
                        filterOption={(input, option) => {
                            return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                        }}
                        showSearch
                        bordered
                        name="destination"
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
                </Styled.ColRight>
            </Styled.Row>
        </>
    )
};

export default  connect(
    createStructuredSelector({
        destinations: destinationsSelector
    })
)(PatientFormGeneral);