import React from 'react';
import LoginForm from "./Login.Form";
import {urlLocations} from "routes/urlLocations";

import Styled from "./styled/StyledLogin.js";
import ResendEmail from "./ResendEmail/ResendEmail";

const Login = () => {
    return (
        <>
            <Styled.Section>
                <Styled.CenterSection>

                    <Styled.Logo>
                        <Styled.LogoImg />
                    </Styled.Logo>

                    <Styled.FormSection>
                        <LoginForm />
                        <Styled.RegisterCol>
                            <Styled.RegisterTxt>Don't have account ?</Styled.RegisterTxt>

                            <Styled.LinkRegister
                                to={urlLocations.registration}
                            >
                                Register
                            </Styled.LinkRegister>
                        </Styled.RegisterCol>
                    </Styled.FormSection>
                </Styled.CenterSection>
            </Styled.Section>
            <ResendEmail/>
        </>
    )
};

export default Login;

