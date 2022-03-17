import React from "react";

import Styled from "components/Forms/styled/StyledForm";
import StyledPageTitle from "components/Forms/styled/StyledPageTitle";
import StyledTitle from "components/Forms/styled/StyledTitle";
import TextAreaField from "components/TextAreaField/TextAreaField";

const PreVisitHistory = () => {
    return (
        <>
            <Styled.Row>
                <StyledPageTitle>
                    <StyledTitle>Pre-Visit History</StyledTitle>
                </StyledPageTitle>
            </Styled.Row>
            <Styled.Row>
                <Styled.ColLeft>
                    <TextAreaField
                        bordered
                        name="servantSummery"
                        label="Assistant Summery"
                        placeholder="Assistant Summery"
                    />
                </Styled.ColLeft>
                <Styled.ColRight>
                    <TextAreaField
                        bordered
                        name="requestedTests"
                        label="Requested Tests"
                        placeholder="Requested Tests"
                    />
                </Styled.ColRight>
            </Styled.Row>
        </>
    )
};

export default PreVisitHistory;