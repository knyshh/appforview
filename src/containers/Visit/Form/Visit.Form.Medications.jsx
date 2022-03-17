import React from "react";
import { jsPDF } from "jspdf";
import Styled from "components/Forms/styled/StyledForm";
import StyledPageTitle from "components/Forms/styled/StyledPageTitle";
import StyledTitle from "components/Forms/styled/StyledTitle";
import PrescriptionFieldArray from "containers/Visit/Visit.Form.PrescriptionFieldArray";
import {FieldArray} from "redux-form";
import StyledPrescription from "containers/Visit/Form/styled/StyledFormPrescription";
import StyledPrintIcon from "containers/Visit/styled/StyledPrintIcon";
import { API_PATH } from 'constants/common';
import TextAreaField from 'components/TextAreaField/TextAreaField';

const VisitMedications = ({prescription, initialValues}) => {
    return (
        <>
            <Styled.Row>
                <StyledPageTitle>
                    <StyledTitle>Prescription</StyledTitle>
                </StyledPageTitle>
            </Styled.Row>

            <Styled.Row>

                <StyledPrescription.WrapPrescription>
                    <StyledPrescription.BlockPrescription>
                        <FieldArray name="prescription"  prescription={prescription} component={PrescriptionFieldArray} />
                    </StyledPrescription.BlockPrescription>
                    <TextAreaField
                        bordered
                        name="prescriptionNotes"
                        label="Prescription notes"
                        placeholder="Prescription notes"
                    />
                    {!!prescription?.length && <StyledPrescription.WrapPrescriptionPrint>
                        <StyledPrescription.Button href={`${API_PATH}/visits/${initialValues?.id}/prescription`} target="_blank" >
                            <StyledPrintIcon/>
                            Print Prescription
                        </StyledPrescription.Button>
                    </StyledPrescription.WrapPrescriptionPrint> }

                </StyledPrescription.WrapPrescription>
            </Styled.Row>
        </>
    )
};

export default VisitMedications;