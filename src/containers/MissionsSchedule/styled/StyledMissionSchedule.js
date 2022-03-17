import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  padding: 40px 0 70px 0;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 35px;
  @media (min-width: 1024px) and (max-width: 1249px) {
  }
`;

const Title = styled.h1`
  max-width: 60%;
  display: block;
  text-align: center;
  width: 100%;
  font-family: var(--fontAvenirHeavy);
  font-size: 32px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #0f3253;
  padding: 0;
  margin-bottom: 30px;
  white-space: pre;

  @media (max-width: 1023px) {
    font-size: 30px;
    width: 100%;
    white-space: normal;
  }

  @media (max-width: 1339px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
  @media (min-width: 1750px) {
    font-size: 35px;
  }
  @media (min-width: 1024px) and (max-width: 1249px) {
    font-size: 25px;
  }
`;

const Content = styled.div`
  height: 825px;
`;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CenterTitle = styled.div`
  position: relative;
`;

const DateTitle = styled.div`
  font-family: var(--fontAvenirHeavy);
  font-size: 18px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  padding-top: 10px;
  color: rgba(0, 0, 0, 0.25);

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const ContentTitle = styled.div`
  font-family: var(--fontAvenirHeavy);
  font-size: 24px;
  font-weight: 900;
  width: calc(100% - 90px);
  border-radius: 12px 12px 0 0;
  background-color: #ffffff;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.8;
  letter-spacing: normal;
  text-align: center;
  color: #0f3253;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 1023px) {
    font-size: 20px;
    left: 0;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    left: 0;
  }
`;

export default {
  Page,
  Title,
  Header,
  Content,
  ContentTitle,
  CenterTitle,
  DateTitle,
  ContentHeader
};
