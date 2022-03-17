import React from "react";

import InputField from "components/InputField/InputField";
import Styled from "../styled/StyledForm";
import StyledPageTitle from "../styled/StyledPageTitle";
import StyledTitle from "../styled/StyledTitle";

const PatientFormAddress = () => {
    return (
        <>
            <Styled.Row>
                <StyledPageTitle>
                    <StyledTitle>Address Info</StyledTitle>
                </StyledPageTitle>
            </Styled.Row>
            <Styled.Row>
                <Styled.Col2>
                    <InputField bordered label="House No" placeholder="House No"  name="addressHouseNumber" />
                </Styled.Col2>
                <Styled.Col10>
                    <InputField bordered label="Street" name="addressStreet" placeholder="Street" />
                </Styled.Col10>
            </Styled.Row>

            <Styled.Row>
                <Styled.Col2>
                    <InputField bordered name="addressBuildingNumber" placeholder="Building No" label="Building No" />
                </Styled.Col2>
                <Styled.Col10>
                    <InputField bordered name="addressLandmark" placeholder="Landmark" label="Landmark" />
                </Styled.Col10>
            </Styled.Row>
        </>
    )
};

export default PatientFormAddress;