import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import { urlLocations } from "routes/urlLocations";
import Button from 'components/Button/Button';
import ServantTable from "./Settings.Servants.Table";
import ServantsFilters from "./Settings.Servants.Filters";
import Pagination from "../../../components/Pagination/Pagination";
import { getServantsAction } from "../../../services/servants/servants.action";
import { servantsCountSelector } from '../../../services/servants/servants.selector';
import StyledFilterSection from '../../styled/StyledFilterSection'
import StyledAddIcon from "../styled/StyledAddIcon";

const Servants = ({ getServants, servantsCount }) => {
    return (
        <>
            <StyledFilterSection>
                <ServantsFilters/>

                <Link to={urlLocations.servant} >
                    <Button uiType='setting-add' ><StyledAddIcon />Add new servant</Button>
                </Link>
            </StyledFilterSection>
            <ServantTable/>
            <Pagination request={getServants} name="servants" total={servantsCount} />

        </>
    )
};

export default connect(
    createStructuredSelector({
        servantsCount: servantsCountSelector,
    })
    , {
        getServants: getServantsAction,
    })(Servants);