import React from 'react';
import { Select } from "antd";

import SelectField from "components/SelectField/SelectField";
import InputField from "components/InputField/InputField";
import TextAreaField from "components/TextAreaField/TextAreaField";
import Styled from "../styled/StyledForm";
import StyledPageTitle from "../styled/StyledPageTitle";
import StyledTitle from "../styled/StyledTitle";

const { Option } = Select;

const ALCOHOL_HISTORY = [
    "currently",
    "rarely",
    "quit",
    "never"
];

const PatientFormMedicalHistory = () => {
    return (
        <>

            <Styled.Row>
                <StyledPageTitle>
                    <StyledTitle>Medical History</StyledTitle>
                </StyledPageTitle>
            </Styled.Row>

            <Styled.Row>
                <Styled.Col4>
                    <SelectField
                        bordered
                        style={{ textTransform: 'capitalize' }}
                        name="alcoholHistory"
                        label="Alcohol History"
                        placeholder="Alcohol History"
                    >
                        {
                            ALCOHOL_HISTORY.map(option => (
                                <Option
                                    style={{ textTransform: 'capitalize' }}
                                    children={option}
                                    value={option}
                                    key={option}
                                />
                            ))
                        }
                    </SelectField>
                </Styled.Col4>

                <Styled.Col8>
                    <InputField bordered name="allergies" placeholder="Allergies (to Medications)" label="Allergies (to Medications)" />
                </Styled.Col8>
            </Styled.Row>

            <Styled.Row>
                <Styled.ColLeft>
                    <TextAreaField bordered label="Past Surgery" placeholder="Past Surgery" name="pastSurgery" />
                </Styled.ColLeft>

                <Styled.ColRight>
                    <TextAreaField
                        bordered
                        label="Medication (Name, Dose, How many times)"
                        placeholder="Medication (Name, Dose, How many times)"
                        name="medications"
                    />
                </Styled.ColRight>
            </Styled.Row>
        </>
    )
};

export default PatientFormMedicalHistory;