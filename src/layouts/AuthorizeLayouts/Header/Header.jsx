import React from 'react';
import { connect } from "react-redux";
import { Avatar, Alert, Dropdown, Menu } from 'antd';
import { createStructuredSelector } from "reselect";
import { UserOutlined } from '@ant-design/icons';
import { compose } from 'redux';
import { Link } from "react-router-dom";

import { getUserInfoSelector } from 'services/user/user.selector'
import { logoutAction } from "services/logout/logout.action";
import withPermissions from 'hoc/withPermissions'
import {urlLocations} from "routes/urlLocations";
import { PROFILE_NAME } from "constants/common";
import {isUserProfileComplete} from "services/user/user.utils";
import StyledContainer from "components/styled/StyledContainer";
import StyledHeader from "./styled/StyledHeader.js";
import StyledLogo from "./styled/StyledLogo.js";
import StyledUserBlock from './styled/StyledUserBlock.js';
import StyledAlert from "./styled/StyledAlert.js";
import { userRoleMainPath } from 'routes/urlLocations'

const DropdownMenu = ({ logout, isAdmin }) => {
    return(
        <Menu>
            { !isAdmin && <Menu.Item key="1">
                <div><Link to={urlLocations.profile} >Profile</Link></div>
            </Menu.Item> }
            <Menu.Item key="2">
                <div onClick={logout} >Logout</div>
            </Menu.Item>
        </Menu>
    )
};


const Header = ({ title, user, logout, isAdmin, router: { location } = {} }) => {

    return (
        <StyledHeader.Header>
            <StyledContainer relative>
                <StyledHeader.Row>

                    <StyledHeader.LeftCol>
                        <StyledLogo.Logo to={ userRoleMainPath?.[user?.userType] || "/"}>
                            <StyledLogo.Img></StyledLogo.Img>
                            <StyledLogo.Txt>Healing Ambassadors</StyledLogo.Txt>
                        </StyledLogo.Logo>
                    </StyledHeader.LeftCol>

                    <StyledHeader.PageTitle>
                        {title}
                    </StyledHeader.PageTitle>

                    <StyledHeader.RightCol>
                        <StyledUserBlock.Block>
                            { isAdmin &&
                                <Link to={urlLocations.settingsDoctors} >
                                    <StyledUserBlock.IconSettings />
                                </Link>
                            }
                            {  (isAdmin || !user?.[PROFILE_NAME[user?.userType]]?.profilePic?.formats?.thumbnail?.url) ?
                                <Avatar shape="circle" icon={<UserOutlined/>} />  :
                                <Avatar
                                    shape="circle"
                                    src={user?.[PROFILE_NAME[user?.userType]]?.profilePic?.formats?.thumbnail?.url}
                                />
                            }
                            <Dropdown
                                overlayClassName="userDropdown"
                                overlay={<DropdownMenu logout={logout} isAdmin={isAdmin} />}>
                                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <StyledUserBlock.UserName>
                                        {!isAdmin ?
                                            <span>{user?.[PROFILE_NAME[user?.userType]]?.fullName}</span> :
                                            <span>{user?.fullName}</span>
                                        }
                                    </StyledUserBlock.UserName>

                                    <StyledUserBlock.IconDropdown />
                                </span>
                            </Dropdown>

                        </StyledUserBlock.Block>

                    </StyledHeader.RightCol>

                </StyledHeader.Row>

                {  !isUserProfileComplete(user) &&
                    location?.pathname === urlLocations.dashboard &&
                    <Link to={urlLocations.profile} >
                        <StyledAlert type="error" message={
                            "Complete your profile in order to proceed "
                        } />
                    </Link>
                }


            </StyledContainer>
        </StyledHeader.Header>
    )
};

export default compose(
    connect(
        createStructuredSelector({
            user: getUserInfoSelector,
            router: state => state.router,
        }),
        {
            logout: logoutAction
        }
    ),
    withPermissions
)(Header);