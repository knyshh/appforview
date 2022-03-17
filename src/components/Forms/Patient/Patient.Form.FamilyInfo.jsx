import React from 'react';
import { Select } from 'antd';
import {getCode} from "country-list";

import SelectField from "components/SelectField/SelectField";
import InputField from "components/InputField/InputField";
import DatePickerField from "components/DatePickerField/DatePickerField";
import InputPhoneField from "components/InputPhoneField/InputPhoneField";
import Styled from "../styled/StyledForm";

const { Option } = Select;

const MARTIAL_STATUS = [
    "single",
    "married",
    "widow",
    "other"
];

const PatientFormFamilyInfo = ({ destination, spouseMobile, spouseWhatsapp }) => {
    const code = destination?.name && getCode(destination.name);

    return (
        <>
            <Styled.Row>
                <Styled.ColLeft>
                    <SelectField bordered name="maritalStatus" label="Marital Status" placeholder="Marital Status" >
                        {
                            MARTIAL_STATUS.map(status => (
                                <Option children={status} value={status} key={status}/>
                            ))
                        }
                    </SelectField>
                    <InputField bordered name="spouseName" placeholder="Spouse name" label="Spouse name" />
                    <InputPhoneField
                        bordered
                        label="Spouse mobil"
                        placeholder="Spouse mobile"
                        name="spouseMobile"
                        country={spouseMobile ? '' : code?.toLowerCase()}
                        preferredCountries={code?.toLowerCase()}
                    />

                </Styled.ColLeft>

                <Styled.ColRight>
                    <InputField bordered name="churchName" placeholder="Church name" label="Church name" />
                    <DatePickerField bordered name="spouseDateOfBirth" placeholder="Spouse date of birth" label="Spouse date of birth" />
                    <InputPhoneField
                        bordered
                        label="Spouse whatsapp"
                        placeholder="Spouse whatsapp"
                        name="spouseWhatsapp"
                        country={spouseWhatsapp ? '' : code?.toLowerCase()}
                        preferredCountries={code?.toLowerCase()}
                    />
                </Styled.ColRight>
            </Styled.Row>

            <Styled.Row>
                <Styled.ColKids1>
                    <InputField bordered name="kids" placeholder="Kids" label="Kids" />
                </Styled.ColKids1>
                <Styled.ColKids2>
                    <InputField bordered name="kidsAges" placeholder="Kids ages" label="Kids ages" />
                </Styled.ColKids2>
                <Styled.ColKids3>
                    <InputField bordered name="kidsNames" placeholder="Kids names" label="Kids names" />
                </Styled.ColKids3>
            </Styled.Row>

            <Styled.Row>
                <Styled.Col12>
                    <InputField
                        bordered
                        name="whoLivesWithYou"
                        placeholder="Who lives in the household with you"
                        label="Who lives in the household with you"
                    />
                </Styled.Col12>
            </Styled.Row>

            <Styled.Row>
                <Styled.ColLeft>
                    <InputField bordered name="job" placeholder="Job" label="Job" />
                </Styled.ColLeft>

                <Styled.ColRight>
                    <InputField bordered name="monthlySalary" placeholder="Monthly income" label="Monthly income" />
                </Styled.ColRight>
            </Styled.Row>

        </>
    )
};

export default PatientFormFamilyInfo;