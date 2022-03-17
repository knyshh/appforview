import React from "react";
import Select from "components/Select/Select";
import { Select as AntSelect  } from 'antd';
import StyledMissionTable from "containers/Missions/Modals/styled/StyledMissionModalTable";
import Button from "components/Button/Button";

const { Option } = AntSelect;


const DOCTORS_COLUMNS = ({
    handleSearch,
    doctors = [],
    searching,
    setSearchingPhrase,
    onDoctorSelect,
    specialities,
    notifyDoctors,
    onItemRemove,
    onDoctorRemove
}) => [
    {
        title: "Speciality",
        key: "speciality.name",
        dataIndex: ["speciality", "name"],
        render: (_ , { speciality }) => (
            <div>{ speciality?.name || specialities.find(s => s.id === speciality)?.name  }</div>
        )
    },
    {
        title: "Doctor",
        key: "doctor.fullName",
        dataIndex: ["doctor", "fullName"],
        render: (_, { doctor, speciality, id },) => (
            <div>{
                doctor && doctor.id && id ?
                    <StyledMissionTable.DoctorCol>
                        <StyledMissionTable.UserPic>
                            <img width={30} src={doctor?.profilePic?.url} alt=""/>
                        </StyledMissionTable.UserPic>
                        <StyledMissionTable.DoctorName>{ doctor?.fullName }</StyledMissionTable.DoctorName>
                    </StyledMissionTable.DoctorCol> :
                    <StyledMissionTable.SelectRow>
                        <Select
                            placeholder="Select Doctor"
                            style={{ maxWidth: '300px' }}
                            value={doctor}
                            showSearch
                            onSearch={v => handleSearch(v, speciality?.id)}
                            onBlur={setSearchingPhrase.bind(null, "", speciality?.id)}
                            notFoundContent={null}
                            filterOption={false}
                            onSelect={doctorId => {
                                onDoctorSelect({
                                    ...( id && { id } ),
                                    speciality: speciality.id || speciality,
                                    doctor: doctor || null
                                }, doctorId)
                            }}
                        >
                            {
                                searching.searchingPhrase?.length >= 2 ?
                                doctors.map(doctor => (
                                <Option key={doctor.id} value={doctor.id} children={doctor.fullName} />
                            )
                                ) : []
                            }
                        </Select>
                    </StyledMissionTable.SelectRow>
            }</div>
        )
    },
    {
        title: "Action",
        key: "action",
        render: (_, { doctor, speciality, id }, index) => (
            <StyledMissionTable.CenteredCol>{
                !doctor ?
                <Button uiType="missionBtn" onClick={notifyDoctors.bind(null, {
                    speciality: speciality.id || speciality,
                    missionId: id
                })} >
                    Notify Doctors
                </Button> : <Button onClick={onDoctorRemove.bind(null, index)} uiType='removeDoctor' >
                        Remove Doctor
                </Button>

            }
                <Button uiType='removeSpeciality' onClick={onItemRemove.bind(null, index)} >
                    Remove Speciality
                </Button>
            </StyledMissionTable.CenteredCol>
        )
    }
];


export default DOCTORS_COLUMNS;