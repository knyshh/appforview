import React, { useEffect } from 'react';

import { history, urlLocations } from "routes/urlLocations";
import Styled from './styled/StyledUnAutorizedLayout'
import StyledUserBlock from "layouts/AuthorizeLayouts/Header/styled/StyledUserBlock";

const UnAuthorizeLayout = ({ children }) => {

    useEffect(() => {
        const storage = localStorage.getItem("storageTyp");
        const jwt = window[storage]?.getItem('jwt');
        jwt && history.push(urlLocations.dashboard)
    }, []);

    return (
        <Styled.Layout>
            <Styled.ColLeft>

                <Styled.Center>
                    <Styled.Title>Healing Ambassadors</Styled.Title>
                    <Styled.Text>
                        Lorem ipsum dolor sit amet, consectetur and it adipiscing elit,
                        sed do eiusmod tem incididunt ut labore et dolore magna  enim ad minim
                        veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur and it
                        adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore magna  enim
                        ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur and it
                        adipiscing elit, sed do eiusmod tem incididunt ut labore et dolore magna  enim
                        ad minim veniam, quis nostrud.
                    </Styled.Text>
                    <Styled.Copyright>@ 2020 Copyright St.Mina Church Dubai - UAE</Styled.Copyright>
                </Styled.Center>

            </Styled.ColLeft>

            <Styled.ColRight>
                { children }
            </Styled.ColRight>
        </Styled.Layout>
    )
};

export default UnAuthorizeLayout;