import styled from "styled-components";

const Table = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 28px;

  @media (max-width: 1099px) {
    overflow-x: scroll;
  }

  .ant-table-thead > tr > th {
    text-align: center;
    background-color: #f7faff;
    border-bottom: 1px solid #ddeaf0;
    font-family: var(--fontAvenirHeavy);
    font-size: 16px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #79a5d0;
    border-right: 1px solid #ebeef6;
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid #ebeef6;
    border-right: 1px solid #ebeef6;
    text-align: center;
    padding: 16px;
    vertical-align: middle;
    color: #000;
    font-family: var(--fontAvenirMedium);
    @media (max-width: 767px) {
      padding: 5px;
      font-size: 12px;
    }
    @media (max-width: 580px) {
      font-size: 12px;
    }
  }
  .ant-table-tbody > tr:nth-child(2n) > td {
    background: #f7f8fb;
  }
  .ant-table {
    background: none;
    border-radius: 12px;
  }
  .ant-table table {
    border-radius: 20px;
    table-layout: fixed;
    background: #fff;
    min-width: 300px;
  }
  .ant-table-wrapper {
    position: relative;
    top: -10px;
    @media (max-width: 1099px) {
      top: 0;
    }
  }

  .ant-table-container  {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-left-radius: 20px;
  }
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-top-right-radius: 20px;
  }
  .ant-table-tbody > tr:last-child > td:first-child {
    border-bottom-left-radius: 20px;
  }
  .ant-table-tbody > tr:last-child > td:last-child {
    border-bottom-right-radius: 20px;
  }
  .ant-select {
    text-align: left;
  }
`;

const SelectRow = styled.div`
  display: inline-block;
  width: 100%;
  @media (max-width: 480px) {
    width: 100px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const UserPic = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 1px #3879bb;
  overflow: hidden;
  margin-right: 12px;

  img {
    width: 100%;
    height: 100%;
    border: solid 1px #3879bb;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const VacantTxt = styled.div`
  color: rgba(121, 121, 121, 0.44);
`;
const DoctorCol = styled.div`
  display: inline-flex;
  width: 100%;
`;

const DoctorName = styled.div`
  position: relative;
  top: 12px;
`;

const CenteredCol = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default {
  Table,
  DoctorCol,
  DoctorName,
  VacantTxt,
  SelectRow,
  CenteredCol,
  UserPic
};
