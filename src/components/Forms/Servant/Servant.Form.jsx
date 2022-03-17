import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { createStructuredSelector } from "reselect";
import { Select } from "antd";

import PhotoUploader from "components/PhotoUploader/PhotoUploader";
import { fileUploadAction } from "services/file/file.action";
import InputField from "components/InputField/InputField";
import InputPhoneField from "components/InputPhoneField/InputPhoneField";
import SelectField from "components/SelectField/SelectField";
import Button from 'components/Button/Button';
import {destinationsSelector} from "services/destinations/destinations.selector";
import {createServantAction, saveServantAction, verifyServantAction} from "services/servants/servants.action";
import Styled from "../styled/StyledForm"
import UpdatePassword from "../styled/StyledUpdatePassword";
import {getUserInfoSelector} from "services/user/user.selector";
import UpdatePasswordModal from 'components/UpdatePassword/UpdatePassword';
import {setModalStatusAction} from "services/modals/modals.action";
import {MODALS_IDS} from "constants/common";
import withPermissions from 'hoc/withPermissions';
import {requiredFieldsValidate} from "utils/validation";


const requiredFields = [ 'fullName', 'email', 'mobile', 'destination' ];

const { Option } = Select;

const ServantForm = ({
    setModalStatus,
    profilePic,
    fileUpload,
    destinations,
    handleSubmit,
    initialValues,
    verifyServant,
    verified,
    user,
    isAdmin
}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Styled.Row>
                    <PhotoUploader initialPic={profilePic} onUpload={fileUpload} formName="servant" />
                </Styled.Row>
                <Styled.Row>
                    <Styled.ColLeft>
                        <InputField bordered name="fullName" placeholder="Name" label="Name" />
                        <InputPhoneField bordered name="mobile" placeholder="Mobile" label="Mobile" />
                        <InputField bordered name="email"  autoComplete="new-email" placeholder="Email" label="Email" disabled={!!initialValues.email} />
                        <InputField bordered name="fatherOfConfession" placeholder="Father of confession" label="Father of confession" />
                        <InputField
                                bordered
                                name="startOfTheService"
                                placeholder="Start date of service year"
                                label="Start date of service year"
                        />
                    </Styled.ColLeft>
                    <Styled.ColRight>

                        <UpdatePassword.Section>
                            <InputField
                                bordered
                                name="password"
                                type="password"
                                placeholder="•••••••••"
                                disabled={!!initialValues?.id}
                                label="Password"
                                autoComplete="new-password"
                            />
                            {   !!initialValues?.id && !isAdmin &&
                            <UpdatePassword.UpdateLink onClick={setModalStatus.bind(null, MODALS_IDS.UPDATE_PASSWORD)} >
                                Update
                            </UpdatePassword.UpdateLink>
                            }
                        </UpdatePassword.Section>

                        <InputPhoneField bordered name="whatsapp" placeholder="Whatsapp" label="Whatsapp"  />
                        <SelectField
                            filterOption={(input, option) => {
                                return option.props.children?.toLowerCase().indexOf(input?.toLowerCase()) >= 0
                            }}
                            showSearch
                            bordered
                            name="destination"
                            label="Destination"
                            placeholder="Destination"
                        >{
                            destinations.map(destination => (
                                <Option value={destination.id} key={destination.id} >{ destination.name }</Option>
                            ))
                        }</SelectField>
                        <InputField
                            bordered
                            name="diocese"
                            placeholder="Diocese"
                            label="Diocese"
                        />
                    </Styled.ColRight>
                </Styled.Row>
                <Styled.Row>
                    <Styled.Buttons>
                        <Button boxshadow htmlType="submit" >Save changes</Button>
                        { !!initialValues?.id && !verified && isAdmin &&
                            <Button boxshadow uiType="secondary" onClick={verifyServant.bind(null, initialValues?.id)} >
                                Verify now
                            </Button>
                        }
                </Styled.Buttons>
            </Styled.Row>
            </form>
            <UpdatePasswordModal/>
        </>
    )
};

export default compose(
    connect(createStructuredSelector({
            destinations: destinationsSelector,
            user: getUserInfoSelector
        }),
        {
            fileUpload: fileUploadAction,
            verifyServant: verifyServantAction,
            setModalStatus: setModalStatusAction
        }),
    withPermissions,
    reduxForm({
        form: "servantForm",
        enableReinitialize: true,
        validate: v => requiredFieldsValidate(v, requiredFields),
        onSubmit: (value, dispatch) => {
            value.id ?
                dispatch(saveServantAction(value)) :
                dispatch(createServantAction(value))
        }
    })
)(ServantForm)