import React from 'react';
import { Table as AntTable } from 'antd';

const Table = ({ ...props }) => {
    return (
        <AntTable
            {...props}
        />
    )
};

export default Table;