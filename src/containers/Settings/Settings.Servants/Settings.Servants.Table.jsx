import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Table from 'components/Table/Table';
import { servantsSelector } from "services/servants/servants.selector";
import SERVANTS_COLUMNS from './Settings.Servants.Columns';
import {getServantsAction, verifyServantAction} from "services/servants/servants.action";
import {COLUMN_ORDER} from "constants/common";
import StyledTable from '../styled/StyledTable'
import {history, urlLocations} from "routes/urlLocations";
import {getFilersSelector} from "services/filters/filters.selector";


const ServantTable = ({ servants, verifyServant, getServants, filters }) => {
    return (
        <StyledTable>
            <Table
                dataSource={servants}
                columns={SERVANTS_COLUMNS({ verifyServant })}
                pagination={false}
                onRow={(record) => ({
                    onClick: () => history.push(`${urlLocations.servant}/${record.id}`)
                })}
                onChange={(_ , e , { field, order }) => {
                    COLUMN_ORDER[order] && getServants({ _sort: `${field}:${COLUMN_ORDER[order]}`, ...filters })
                }}
            />
        </StyledTable>
    )
};

export default connect(
    createStructuredSelector({
        servants: servantsSelector,
        filters: state => getFilersSelector(state, 'servants')
    }),
    {
        verifyServant: verifyServantAction,
        getServants: getServantsAction
    }
)(ServantTable);