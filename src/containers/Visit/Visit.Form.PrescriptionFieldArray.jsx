import React from 'react';
import get from 'lodash/get';

import PrescriptionFields from "./Visit.Form.Prescription.Fields";
import StyledPrescription from './Form/styled/StyledFormPrescription'
import StyledUploadPresciprion from "containers/Visit/styled/StyledUploadPresciprion";

const PrescriptionFieldArray = ({ field, prescription, fields }) => {

    return (
        <>

            <StyledPrescription.Button  onClick={() => fields.push({})}>
                <StyledUploadPresciprion />Add medicine
            </StyledPrescription.Button>

            <StyledPrescription.List>
                            {
                                fields.map((field, index) => (
                                    <PrescriptionFields
                                        field={field}
                                        index={index}
                                        fields={fields}
                                        key={field}
                                        value={get({ prescription }, field)}
                                    />
                                ))
                            }
                            
            </StyledPrescription.List>

        </>
    )
};

export default PrescriptionFieldArray;