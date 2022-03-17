import React from 'react';
import { PaperClipOutlined } from '@ant-design/icons';
import { Collapse } from 'antd'

import { formatVisitDate } from "services/visit/visit.utils";
import Styled from "./styled/StyledVisitResult";
import StyledDownloadIcon from "containers/Visit/Visit.Results/styled/StyledDownloadIcon";

const { Panel }  = Collapse;

const VisitTests = ({ test_results = [] }) => <>
    <Styled.SectionTestResults>
        <Styled.ResultsList>
            <Styled.ResultTitle>Test Results</Styled.ResultTitle>

            <Collapse
                expandIconPosition='right'
            >
                { test_results.map(({ title, created_at, results = [] }, index) => (
                    <Panel
                        key={index}
                        header={<Styled.TestResultBlock>
                            <Styled.Date>{ formatVisitDate(created_at) }</Styled.Date>
                            <Styled.Name>{ title }</Styled.Name>
                        </Styled.TestResultBlock>}
                    >
                        {
                            results.map(({ name = "", url}) => (
                                <div>
                                <a href={url} target="_blank" > { name } <StyledDownloadIcon /></a>
                            </div>))
                        }
                    </Panel>
                ))}
            </Collapse>

        </Styled.ResultsList>
    </Styled.SectionTestResults>

</>;

export default VisitTests;