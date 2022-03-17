import React from 'react'
import { getCode } from 'country-list'

import InputPhoneField from "components/InputPhoneField/InputPhoneField";
import InputField from "components/InputField/InputField";
import Styled from "../styled/StyledForm"
import StyledPageTitle from '../styled/StyledPageTitle';
import StyledTitle from '../styled/StyledTitle';

const PatientFormCommunication = ({ email, destination, mobile, whatsapp }) => {
    const code = destination?.name && getCode(destination.name);
    return (
        <>
            <Styled.Row>
                <StyledPageTitle>
                    <StyledTitle>Communication Info</StyledTitle>
                </StyledPageTitle>
            </Styled.Row>
            <Styled.Row>
                <Styled.ColLeft>
                    <InputPhoneField country={mobile ? '' : code?.toLowerCase()} preferredCountries={code?.toLowerCase()}  bordered label="Mobile" placeholder="Mobile"  name="mobile" />
                    <InputField bordered name="email" disabled={!!email} placeholder="Email" label="Email" />
                </Styled.ColLeft>

                <Styled.ColRight>
	                <InputPhoneField country={whatsapp ? '' : code?.toLowerCase()}  preferredCountries={code?.toLowerCase()}  bordered label="Whatsapp" name="whatsapp" placeholder="Whatsapp" />
                    <InputField bordered name="facebook" placeholder="Facebook" label="Facebook" />
                </Styled.ColRight>
            </Styled.Row>

        </>
    )
};

export default PatientFormCommunication;