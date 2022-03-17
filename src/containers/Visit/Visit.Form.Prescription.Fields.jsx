import React, { useState, useEffect } from 'react';
import {Select} from "antd";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import SelectField from "components/SelectField/SelectField";
import InputField from "components/InputField/InputField";
import {medicationsSelector} from "services/medications/medications.selector";
import StyledFormPrescription from "containers/Visit/Form/styled/StyledFormPrescription";

const { Option } = Select;

const otherOption = {
    id: 'Other',
    title: 'Other'
};

const PrescriptionFields = ({field, fields, index, medications, value }) => {

    const [ selectedMedication, selectMedication ] = useState("");
    useEffect(() => {
        const v = value?.medication?.id ?
            value?.medication.id :
            (!value?.medication?.id && !value?.otherMedication ? null : "Other");

        selectMedication(v)
    }, [value]);

    return (
        <>
            <StyledFormPrescription.Row>
                <StyledFormPrescription.ColInside1>
                    <SelectField
                        bordered
                        name={`${field}.medication`}
                        placeholder='Medication'
                        label='Medication'
                        // onSelect={selectMedication}
                    >
                        {
                            [otherOption, ...medications].map(medication => (
                                <Option
                                    key={medication.id}
                                    value={medication.id}
                                    children={medication.title}
                                />
                            ))
                        }
                    </SelectField>
                </StyledFormPrescription.ColInside1>

                <StyledFormPrescription.ColInside2>
                    <InputField
                        bordered
                        name={`${field}.dose`}
                        placeholder='Dose'
                        label='Dose'
                    />
                </StyledFormPrescription.ColInside2>

                <StyledFormPrescription.ColInside3>
                    <InputField
                        bordered
                        name={`${field}.howLong`}
                        placeholder='How long'
                        label='How long'
                    />
                </StyledFormPrescription.ColInside3>


                <StyledFormPrescription.ColInside4>
                    <InputField bordered name={`${field}.otherMedication`} label="Trade Name" placeholder="Trade Name" />
                </StyledFormPrescription.ColInside4>


            <StyledFormPrescription.Remove onClick={() => fields.remove(index)}>
            </StyledFormPrescription.Remove>

        </StyledFormPrescription.Row>

        </>
    )
};

export default connect(
    createStructuredSelector({
        medications: medicationsSelector
    })
)(PrescriptionFields)