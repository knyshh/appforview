import styled from "styled-components";

const StyledTable = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 1099px) {
    overflow-x: scroll;
  }
  .ant-table-column-sorters {
    font-family: var(--fontAvenirHeavy);
    font-size: 12px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
    text-transform: uppercase;
    @media (max-width: 1099px) {
      font-size: 10px;
    }
    &:nth-child(1) {
      padding: 16px 0 0 16px;

      @media (max-width: 1399px) {
        padding: 16px 16px 0 10px;
      }
    }
  }
  .ant-table-column-sorter-up,
  .ant-table-column-sorter-down {
    svg path {
      color: #393939;
      opacity: 0.9;
    }
  }
  .ant-table-column-sorter-up.active,
  .ant-table-column-sorter-down.active {
    svg path {
      color: #000;
      opacity: 0.9;
    }
  }
  .ant-table-thead > tr > th {
    font-weight: 500;
    text-align: left;
    background: #fff;
    border-bottom: 1px solid #ddeaf0;
  }
  .ant-table {
    background: none;
    border-radius: 12px;
  }
  .ant-table table {
    border-radius: 12px;
    table-layout: fixed;
    background: #fff;
  }
  .ant-table-wrapper {
    position: relative;
    top: -10px;

    @media (max-width: 1099px) {
      top: 0;
    }
  }

  .ant-table-container  {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .ant-table-column-sorter-full {
    margin-left: 11px;
  }
  .ant-table-thead > tr > th:nth-child(1) {
    padding-left: 10px;

    @media (min-width: 1400px) and (max-width: 1600px) {
      padding-left: 25px;
    }
    @media (min-width: 1601px) {
      padding-left: 40px;
    }
  }
  .ant-table-thead > tr > th:last-child {
    padding-right: 20px;
    @media (min-width: 1400px) and (max-width: 1600px) {
      padding-right: 22px;
    }
    @media (min-width: 1601px) {
      padding-right: 70px;
    }
  }

  .ant-table-tbody > tr > td:nth-child(1) {
    padding-left: 25px;
    max-width: 400px;
    @media (min-width: 1400px) and (max-width: 1600px) {
      padding-left: 40px;
    }
    @media (min-width: 1601px) {
      padding-left: 60px;
    }
  }
  .ant-table-tbody > tr > td:nth-child(3) {
    padding-left: 35px;
  }
  .ant-table-thead > tr > th:nth-child(3) {
    padding-left: 25px;
  }
  .ant-table-tbody > tr > td:last-child {
    padding-right: 30px;
    padding-left: 0;

    @media (min-width: 1400px) and (max-width: 1600px) {
      padding-right: 60px;
    }
    @media (min-width: 1601px) {
      padding-right: 80px;
    }
  }
  .ant-table-tbody > tr > td {
    font-family: var(--fontAvenirBook);
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    color: #000000;
    padding-top: 10px;
    padding-bottom: 8px;

    @media (max-width: 1249px) {
      font-size: 14px;
    }

    @media (min-width: 1250px) and (max-width: 1600px) {
      font-size: 15px;
    }
  }
  .ant-table-tbody > tr {
  }
  .ant-table-tbody > tr > td {
    border-top: 1px solid #ddeaf0;
    vertical-align: middle;
    cursor: pointer;
    border-bottom: none;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: #ddeaf0;
  }

  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-left-radius: 12px;
  }
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-top-right-radius: 12px;
  }
`;

export default StyledTable;
