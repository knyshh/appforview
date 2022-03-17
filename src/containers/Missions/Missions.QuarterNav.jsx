import React from 'react';
import moment from 'moment';
import Styled from 'containers/Missions/styled/StyledMissionQuarter'

const QUARTERS = [
    { title: "Q1", key: 1 },
    { title: "Q2", key: 2 },
    { title: "Q3", key: 3 },
    { title: "Q4", key: 4 }
];

const MissionsQuarterNav = ({ date, onChange }) => {

    const quarter = moment(date).quarter();

    const handleClick = (quarter) => {
        const newDate = moment(date).quarter(quarter).startOf('quarter');
        onChange(newDate);
    };

    return (
        <Styled.TabContent>
            {
                QUARTERS.map(q => (
                    <Styled.Tab
                        isActive={ q.key === quarter }
                        onClick={handleClick.bind(null, q.key)}
                        key={q.key}
                    >
                        { q.title }{" "}
                    </Styled.Tab>
                ))
            }
        </Styled.TabContent>
    );
};

export default MissionsQuarterNav;