import React from 'react';
import { Link } from 'react-router-dom';

import { urlLocations } from "routes/urlLocations";
import Styled from './styled/StyledDashboard';
import StyledContainer from "components/styled/StyledContainer";
import withUserAccess from "hoc/withUserAccess";
import {USER_ROLES} from "constants/common";

const Dashboard = () => {
    return (
        <StyledContainer>
            <Styled.List>
                <Styled.ListItem  >
                    <Link to={urlLocations.missions} >
                        <Styled.ItemTitle>
                            Missions Schedule
                        </Styled.ItemTitle>
                    </Link>

                </Styled.ListItem>

                <Styled.ListItem  >
                    <Link to={urlLocations.onlineClinic} >
                        <Styled.ItemTitle>
                            Online Consultation
                        </Styled.ItemTitle>
                    </Link>
                </Styled.ListItem>


                <Styled.ListItem  >
                    <Link to={urlLocations.patients} >
                        <Styled.ItemTitle>
                            Patients
                        </Styled.ItemTitle>
                    </Link>
                </Styled.ListItem>


                <Styled.ListItem  >
                    <Link to={urlLocations.newsletters} >
                        <Styled.ItemTitle>
                            Newsletters
                        </Styled.ItemTitle>
                    </Link>
                </Styled.ListItem>

            </Styled.List>

                <Styled.Footer>
                    <p>Lorem ipsum dolor sit amet, consectetur and it
                    adipiscing elit, sed do eiusmod tem incididunt ut labore et
                    dolore magna  enim ad minim veniam, quis nostrud. Lorem ipsum
                    dolor sit amet, consectetur and it adipiscing elit, sed do eiusmod
                    tem incididunt ut labore et dolore magna  enim ad minim veniam, quis
                    nostrud. Lorem ipsum dolor sit amet, consectetur and it adipiscing elit,
                    sed do eiusmod tem incididunt ut labore et dolore magna  enim ad minim
                        veniam, quis nostrud.</p>

                    <Styled.Copyright>@ 2020 Copyright St.Mina Church Dubai - UAE</Styled.Copyright>

                </Styled.Footer>
        </StyledContainer>
    )
};


export default withUserAccess(
    [
        USER_ROLES.SERVANT,
        USER_ROLES.ADMIN,
        USER_ROLES.DOCTOR
])(Dashboard);