import styled from "styled-components";

const TabContent = styled.div`
  height: 55px;
  margin-right: auto;
  margin-left: auto;
  display: inline-flex;
  min-height: 55px;
  border-radius: 30px;
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  padding: 5px;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1023px) {
    //width: 100%;
    margin: 20px auto 30px auto;
    height: auto;
    flex-wrap: wrap;
  }
  @media (max-width: 1249px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    height: auto;
  }

  @media (min-width: 1440px) and (max-width: 1750px) {
    padding: 5px;
  }
`;

const Tab = styled.div`
  padding: 10px 8px;
  height: 40px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  font-family: var(--fontAvenirMedium);
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: 0.56px;
  text-align: center;

  @media (max-width: 1249px) {
    margin: 5px 0;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 15px;
  }
  @media (min-width: 1024px) and (max-width: 1249px) {
    font-size: 14px;
    padding: 14px;
  }

  @media (min-width: 1250px) and (max-width: 1600px) {
    font-size: 14px;
  }
  @media (min-width: 1750px) {
    font-size: 18px;
  }

  background-image: ${({ isActive }) =>
    isActive ? "var(--gradientGreen);" : "none"};
  color: ${({ isActive }) => (isActive ? "#fff; " : "#92959d;")};

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export default {
  TabContent,
  Tab
};
