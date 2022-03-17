import styled from "styled-components";
import IconNext from "assets/img/arrow-right.svg";

const Page = styled.div`
  padding: 65px 0 80px 0;
  position: relative;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  padding-top: 2px;
  @media (max-width: 1249px) {
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 80px);
`;

const Arrow = styled.div`
  width: 12px;
  height: 19px;
  position: relative;
  top: 1px;
  display: inline-block;
  margin-left: 28px;
  margin-right: 30px;
  background: url(${IconNext}) center center no-repeat;
  background-size: contain; 
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 30px;
  display: inline-block;
  border-radius: 50%;
  border: solid 2px var(--blue);
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 50%;
    object-fit: cover;
  }

  .ant-skeleton-image,
  .ant-skeleton-image img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Names = styled.div`
  width: 100%;
`;

const Name = styled.div`
  font-family: var(--fontAvenirHeavy);
  font-size: 34px;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.9;
  letter-spacing: normal;
  text-align: left;
  color: #131415;
  display: inline-block;
  @media (max-width: 767px) {
    font-size: 21px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 30px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
  @media (min-width: 1750px) {
    font-size: 36px;
  }
`;

const VisitDate = styled.div`
  //display: flex;
  position: relative;
  top: 4px;
  
  @media (max-width: 1249px) {
    padding-top: 15px;
  }
 
  span  {
    line-height: 1;
    padding: 0 6px 0 0;
    display: inline-flex;
    position: relative;
    top: -4px; 
    @media (max-width: 1023px) {
        top: -2px; 
    }
    
  }
`;

const VisitDateItem = styled.div`
   font-family: var(--fontAvenirBook);
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: left;
    color: #838484;
    padding-right: 5px;
    display: inline-block;
    text-transform: uppercase;
  

    @media (max-width: 1023px) {
      font-size: 21px;
    }
    @media (max-width: 767px) {
        font-size: 14px;
    }
    @media (min-width: 1440px) {
      font-size: 19px;
      padding-top: 5px;
    }
     @media (min-width: 1650px) {
      font-size: 21px;
    }
    @media (min-width: 1750px) {
      font-size: 26px;
    }
`;

const ResultCol = styled.div`
  position: absolute;
  width: 410px;
  right: 20px;
  top: 240px;

  @media (min-width: 1330px) {
    width: 330px;
  }

  @media (min-width: 1400px) {
    width: 400px;
  }

  @media (min-width: 1440px) {
    width: 410px;
  }
  @media (min-width: 1500px) {
    width: 490px;
  }

  @media (min-width: 1650px) {
    width: 540px;
  }

  @media (max-width: 1329px) {
    width: 100%;
    position: static;
    margin-top: 30px;
    max-width: 540px;
  }

  @media (min-width: 1023px) and (max-width: 1329px) {
    padding-left: 84px;
    position: static;
  }
`;

export default {
  Header,
  Page,
  Avatar,
  VisitDate,
  Name,
  Details,
  Arrow,
  Names,
  VisitDateItem,
  ResultCol
};
