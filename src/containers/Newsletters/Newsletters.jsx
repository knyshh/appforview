import React, { useState } from 'react';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";

import { newslettersSelector } from "../../services/newsletters/newsletters.selector";
import NewslettersModal from './Newsletters.Modal';
import { setModalStatusAction } from "../../services/modals/modals.action";
import {MODALS_IDS, USER_ROLES} from "../../constants/common";
import withPermissions from "../../hoc/withPermissions";
import Styled from './styled/Newsletter';
import StyledContainer from "../../components/styled/StyledContainer";
import withUserAccess from "hoc/withUserAccess";
import {destinationsSelector} from "services/destinations/destinations.selector";
import {specialitiesSelector} from "services/specialities/specialities.selector";


const Newsletters = ({ newsletters, setModalStatus, isAdmin, destinations, specialities }) => {

    const [selectedLetter, selectLetter] = useState(null);

    return (
        <StyledContainer>
            <Styled.List>{
                newsletters.map(({ title, thumbnail, newsletterFile, id }) => (
                    <Styled.Item key={title} >
                        <Styled.Img>
                            <a rel="noopener noreferrer" target={"_blank"} href={ newsletterFile.url }>
                                <img width={100} src={thumbnail.url} alt=""/>
                            </a>
                            { isAdmin &&
                            <Styled.Icon onClick={
                                () => {
                                    selectLetter(id);
                                    setModalStatus(MODALS_IDS.NEWSLETTERS_MODAL);
                                }} /> }
                        </Styled.Img>

                        <Styled.Txt>
                            { title }
                        </Styled.Txt>
                    </Styled.Item>
                ))
            }
            <NewslettersModal
                destinations={destinations}
                specialities={specialities}
                newsletterId={selectedLetter}
            />
            </Styled.List>
        </StyledContainer>
    )
};

export default compose(
    withPermissions,
    withUserAccess(
        [
            USER_ROLES.SERVANT,
            USER_ROLES.ADMIN,
            USER_ROLES.DOCTOR]
    ),
    connect(
        createStructuredSelector({
            newsletters: newslettersSelector,
            destinations: destinationsSelector,
            specialities: specialitiesSelector
        }),
        { setModalStatus: setModalStatusAction }
    )
)(Newsletters)