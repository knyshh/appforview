import React from 'react';

import ResetPasswordForm from './ResetPassword.Form';
import Styled from "containers/ResetPassword/styled/StyledResetPassword";

const ResetPassword = ({ location: { search } }) => {
    const query = new URLSearchParams(search);
    const code = query.get('code');
    return (
        <Styled.Section>
            <Styled.ResetBlock>
                <h1>Reset password</h1>
                <ResetPasswordForm code={code} />
            </Styled.ResetBlock>
        </Styled.Section>
    );
};

export default ResetPassword;