import React from 'react';
import Styled from "../styled/StyledUserCell";
import Visit from './styled/StyledPatients'
import {Skeleton} from "antd";

const PATIENTS_COLUMNS = () => [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        sorter: true,
    },
    {
        title: 'Name',
        dataIndex: 'fullName',
        key: 'fullName',
        sorter: true,
        render: (_, { fullName, profilePic }) => (
            <Styled.UserCell>
                <Styled.UserPic>
                    { (profilePic) ?
                        <img  src={profilePic.formats?.thumbnail?.url}  alt=""/> :
                        <Skeleton.Image />
                    }
                </Styled.UserPic>
                <Styled.Txt>{fullName}</Styled.Txt>
            </Styled.UserCell>
        )
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
        key: 'mobile',
        sorter: true,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sorter: true,
        render: (_, { addressBuildingNumber,  addressHouseNumber, addressStreet}) => <div>
            {
                addressBuildingNumber && addressHouseNumber && addressStreet &&
                `${ addressBuildingNumber}, ${addressStreet} - ${ addressHouseNumber }`
            }
        </div>
    },
    {
        title: 'Visit',
        dataIndex: 'visit',
        key: 'visit',
        render: (_, { visitsCount }) => (
            <Visit.Amount>{ visitsCount || 0 }</Visit.Amount>
        ),
    }
];

export default PATIENTS_COLUMNS;