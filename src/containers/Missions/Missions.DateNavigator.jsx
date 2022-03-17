import React from 'react';

import  * as utils  from './Missions.utils';
import StyledContainer from "components/styled/StyledContainer";
import Styled from 'containers/Missions/styled/StyledDateNavigator'


const MissionsDateNavigator = ({ onChange, date }) => {
    return (
            <StyledContainer>

                <Styled.Block>
                    <Styled.IconPrev onClick={onChange.bind(null, 'subtract')} />
                    <div>
                        { utils.getQuarterMonths(date).map(month => <Styled.Month>{utils.formatDateMonth(month) }</Styled.Month>) }
                        { ` ${utils.formatDateYear(date)}` }
                    </div>
                    <Styled.IconNext onClick={onChange.bind(null, 'add')} />
                </Styled.Block>
            </StyledContainer>
    );
};

export default MissionsDateNavigator;