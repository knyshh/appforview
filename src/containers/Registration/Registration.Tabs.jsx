import React, { useState } from 'react';

import DoctorForm from "./Forms/Registration.DoctorForm";
import PatientForm from "./Forms/Registration.PatientForm";
import ServantForm from "./Forms/Registration.ServantForm";

import StyledRegisterTabs from "./styled/StyledRegisterTabs";
import StyledRegisterTab from "./styled/StyledRegisterTab";
import StyledRegisterTabContent from './styled/StyledRegisterTabContent';
import StyledRegisterBlock from './styled/StyledRegisterBlock';

const TABS = {
    Doctor: () => <DoctorForm />,
    Patient: () => <PatientForm />,
    Assistant: () => <ServantForm />,
};

const ROLES = [ 'Doctor', 'Assistant' , 'Patient' ];

const RegistrationTabs = () => {
    const [ activeTab , setActiveTab  ] = useState('Doctor');

    return (
        <StyledRegisterBlock>
            <StyledRegisterTabs>
                {
                    ROLES.map(userType =>
                        <StyledRegisterTab
                            key={userType}
                            isActive={userType === activeTab}
                            style={{ cursor: 'pointer' }}
                            onClick={setActiveTab.bind(null, userType)}
                        >
                            {userType}
                        </StyledRegisterTab>
                    )
                }
            </StyledRegisterTabs>

            <StyledRegisterTabContent>
                { TABS[activeTab]() }
            </StyledRegisterTabContent>

        </StyledRegisterBlock>
    )
};

export default RegistrationTabs;
