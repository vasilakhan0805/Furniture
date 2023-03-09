import styled from "styled-components";
import { ReactComponent as truck } from "../../assets/icons/Truck.svg";
import { ReactComponent as shopBag } from "../../assets/icons/Shop bag.svg";
import { ReactComponent as support } from "../../assets/icons/Support.svg";
import { ReactComponent as returnBack } from "../../assets/icons/Return.svg";

const Container = styled.div`
  width: 100%;
  background: #EFF2F1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
  padding: 0px 178px;
  margin: auto;
`;

const Part1 = styled.div``;
Part1.H4 = styled.h4`
  font-weight: 600;
  font-size: 34px;
  margin-bottom: 27px;
`;

Part1.P = styled.p`
  width: 444px;
  height: 42px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 88px;
`;
const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

Icons.Icon1 = styled.div`
margin-bottom:26px;
`;
const Truck = styled(truck)``;
const ShopBag = styled(shopBag)``;
const Support = styled(support)``;
const Return = styled(returnBack)``;
Icons.Icon1.P = styled.p`
  width: 143px;
  height: 22px;
  font-weight: 900;
  font-size: 14px;
  line-height: 22px;
  color: var(--primary-black);
  margin-bottom: 9px;
`;
Icons.Icon1.P2 = styled.p`
  width: 247px;
  height: 78px;
`;
Icons.Icon2 = styled.div``;
Icons.Icon3 = styled.div``;
Icons.Icon4 = styled.div``;

const Part2 = styled.div``;
Part2.Image = styled.img``;

export {
  Container,
  Wrapper,
  Part1,
  Part2,
  Icons,
  Truck,
  ShopBag,
  Support,
  Return,
};
