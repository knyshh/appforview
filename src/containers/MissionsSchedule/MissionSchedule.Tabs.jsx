import React from 'react';
import Styled from 'containers/MissionsSchedule/styled/StyledScheduleTabs'

const MissionScheduleTabs = ({
    onTabClick,
    tabs,
    activeTab
}) => {
    return (
        <Styled.TabContent>
            {
                tabs.map(tab => (
                    <Styled.Tab
                        onClick={onTabClick.bind(null, tab)}
                        key={tab}
                        isActive={tab === activeTab}
                    >
                        { tab }
                    </Styled.Tab>
                ))
            }
        </Styled.TabContent>
    )
};

export default MissionScheduleTabs;