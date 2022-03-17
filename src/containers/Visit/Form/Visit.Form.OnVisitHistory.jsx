import React from "react";

import Styled from "components/Forms/styled/StyledForm";
import StyledPageTitle from "components/Forms/styled/StyledPageTitle";
import StyledTitle from "components/Forms/styled/StyledTitle";
import TextAreaField from "components/TextAreaField/TextAreaField";
import InputField from "components/InputField/InputField";
import SelectField from "components/SelectField/SelectField";
import {Select} from "antd";
const { Option } = Select;

const OnVisitHistory = ({diagnoses = []}) => {
    return (
        <>
            <Styled.Row>
                <StyledPageTitle>
                    <StyledTitle>On-Visit History</StyledTitle>
                </StyledPageTitle>
            </Styled.Row>

            <Styled.Row>
                <Styled.ColLeft>
                    <TextAreaField
                        height='243px'
                        bordered
                        name="doctorDiagnosis"
                        label="Doctor Summery And Diagnosis"
                        placeholder="Doctor Summery And Diagnosis"
                    />
                </Styled.ColLeft>

                <Styled.ColRight>
                    <Styled.RowInside>
                        <Styled.Col33>
                            <InputField
                                bordered
                                name="weight"
                                label="Weight"
                                placeholder="Weight"
                            />
                        </Styled.Col33>
                        <Styled.Col33>
                            <InputField
                                bordered
                                name="height"
                                label="Height"
                                placeholder="Height"
                            />
                        </Styled.Col33>
                        <Styled.Col33>
                            <InputField
                                bordered
                                name="temperature"
                                label="Temperature"
                                placeholder="Temperature"
                            />
                        </Styled.Col33>
                    </Styled.RowInside>
                    <Styled.RowInside>
                        <Styled.Col50>
                            <InputField
                                bordered
                                name="bloodPressure"
                                label="Blood Presser"
                                placeholder="Blood Presser"
                            />
                        </Styled.Col50>
                        <Styled.Col50>
                            <InputField
                                bordered
                                name="pulse"
                                label="Pulse"
                                placeholder="Pulse"
                                type="number"
                            />
                        </Styled.Col50>
                    </Styled.RowInside>
                    <Styled.RowInside>
                        <Styled.Col100>
                            <SelectField
                                bordered
                                name="diagnosis"
                                label="Diagnoses"
                                placeholder="Diagnoses"
                            >
                                { diagnoses?.map(diagnose => (
                                    <Option key={diagnose.id} value={diagnose.id} children={diagnose.title}  />
                                )) }
                            </SelectField>
                        </Styled.Col100>
                    </Styled.RowInside>
                </Styled.ColRight>
            </Styled.Row>
        </>
    )
};

export default OnVisitHistory;