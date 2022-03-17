import React from "react";

import Styled from "../styled/StyledUserCell";
import {Skeleton} from "antd";
import StyledVerifiedIcon from "../styled/StyledVerifiedIcon";
import StyledUnVerifiedIcon from "../styled/StyledUnVerifiedIcon";

const DOCTORS_COLUMNS = ({ verifyDoctor }) => [
    {
        title: 'Name',
        dataIndex: 'fullName',
        key: 'fullName',
        sorter: true,
        render: (_, { fullName, profilePic, id }) => (
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
        title: 'Speciality',
        dataIndex: 'speciality',
        key: 'speciality',
        sorter: true,
        render: (_, { speciality }) => speciality?.name
    },
    {
        title: 'Verified',
        dataIndex: 'verified',
        key: 'verified',
        sorter: true,
        render: (_, { verified, id }) => {
            return verified ?
                <StyledVerifiedIcon/> :
                <StyledUnVerifiedIcon
                    onClick={(event) => {
                        event.stopPropagation()
                        verifyDoctor(id)
                    }}
                />
        }
    },
];

export default DOCTORS_COLUMNS;
