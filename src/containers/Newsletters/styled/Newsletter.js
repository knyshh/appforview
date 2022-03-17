import styled from "styled-components";
import IconAdmin from "../../../assets/img/newlettericon.svg";

const List = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  margin: 80px auto;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media (min-width: 1024px) and (max-width: 1239px) {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  @media (min-width: 1400px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 1600px) {
    padding-left: 90px;
    padding-right: 90px;
  }

  @media (min-width: 1800px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (max-width: 767px) {
  }
`;

const Item = styled.div`
  //
  max-height: 270px;
  position: relative;

  @media (max-width: 767px) {
    width: 260px;
  }
  @media (max-width: 1239px) {
    margin-bottom: 50px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 300px;
  }
  @media (min-width: 1024px) and (max-width: 1239px) {
    width: 300px;
  }
  @media (min-width: 1240px) and (max-width: 1439px) {
    width: 290px;
    margin-left: 40px;
  }
  @media (min-width: 1440px) and (max-width: 1600px) {
    width: 280px;
    margin-left: 40px;
  }
  &:first-child {
    margin-left: 0;
  }
  @media (min-width: 1800px) {
    width: 312px;
    height: 214px;
    margin-left: 50px;
  }
`;

const Img = styled.div`
  width: 100%;
  max-height: 214px;
  border-radius: 10px;

  img {
    width: 100%;
    max-height: 214px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.16);
    max-width: 323px;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const Txt = styled.h3`
  font-family: var(--fontAvenirHeavy);
  font-size: 20px;
  text-align: center;
  padding-top: 20px;

  @media (min-width: 767px) {
    font-size: 18px;
  }

  @media (min-width: 1600px) {
    font-size: 22px;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 46px;
  height: 46px;
  cursor: pointer;
  background: url(${IconAdmin}) center center no-repeat;
  background-size: contain;
`;

export default {
  List,
  Item,
  Img,
  Txt,
  Icon
};
