import React from 'react';

import Button from "components/Button/Button";
import StyledMissionTable from "containers/Missions/Modals/styled/StyledMissionModalTable";

const DoctorMissionDetailsColumns = ({ registerDoctor, user, missionId }) => {
    return [
    {
        title: "Speciality",
        key: "speciality.name",
        dataIndex: ["speciality", "name"]
    },
    {
        title: "Doctor",
        key: "doctor.fullName",
        dataIndex: ["doctor", "fullName"],
        render: (_, { doctor }) => (
            <div>
                { doctor ?
                    <StyledMissionTable.DoctorCol>
                        <StyledMissionTable.UserPic>
                            <img  src={doctor?.profilePic?.url} alt=""/>
                        </StyledMissionTable.UserPic>
                        <StyledMissionTable.DoctorName>{ doctor?.fullName }</StyledMissionTable.DoctorName>
                    </StyledMissionTable.DoctorCol> :
                    <StyledMissionTable.VacantTxt>"Vacant"</StyledMissionTable.VacantTxt>
                }
            </div>
        )
    },
    {
        title: "Action",
        key: "action",
        dataIndex: 'action',
        render: (_, { doctor, id, speciality } ) => (
            !doctor && user?.doctorProfile.speciality === speciality?.id &&
            <Button
                uiType="missionBtn"
                onClick={registerDoctor.bind(null, {  missionId, itemId: id, doctorId: user?.doctorProfile?.id})}
            >
                Register
            </Button>
        )
    }
]};


export default DoctorMissionDetailsColumns