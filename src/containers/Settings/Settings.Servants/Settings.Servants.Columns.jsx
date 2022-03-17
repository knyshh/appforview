import React from "react";
import {Skeleton} from "antd";

import Styled from "../styled/StyledUserCell";
import StyledUnVerifiedIcon from "../styled/StyledUnVerifiedIcon";
import StyledVerifiedIcon from "../styled/StyledVerifiedIcon";

const SERVANTS_COLUMNS = ({ verifyServant }) => [
    {
        title: 'Name',
        dataIndex: 'fullName',
        key: 'fullName',
        sorter: true,
        render: (_, { fullName, profilePic }) => (
            <Styled.UserCell>
                    <Styled.UserPic>
                        { (profilePic) ?
                            <img  src={profilePic.formats.thumbnail.url} alt=""/> :
                            <Skeleton.Image />
                        }
                    </Styled.UserPic>
                <Styled.Txt>{fullName}</Styled.Txt>
            </Styled.UserCell>
        ),
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
        key: 'mobile',
        sorter: true,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: true,
    },
    {
        title: 'Destination',
        dataIndex: 'destination',
        key: 'destination',
        sorter: true,
        render: (_, { destination }) => destination?.name
    },
    {
        title: 'Verified',
        dataIndex: 'verified',
        key: 'verified',
        sorter: true,
        render: (_, { verified, id }) => {
            return verified ?
                <StyledVerifiedIcon/> :
                <StyledUnVerifiedIcon onClick={(event) => {
                    event.stopPropagation();
                    verifyServant(id)
                }}/>
        }
    },
];

export default SERVANTS_COLUMNS;
