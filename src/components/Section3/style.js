import styled from "styled-components";
import { ReactComponent as ellipse } from "../../assets/icons/Ellipse67.svg";

const Container = styled.div`
  width: 1005;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
  padding: 194px 178px;
  margin: auto;
`;

const Part1 = styled.div``;
Part1.Images = styled.div`
  position: relative;
`;
const Image1 = styled.img`
  position: absolute;
  width: 424px;
  height: 551px;
  border-radius: 10px;
`;
const Image2 = styled.img`
  position: absolute;
  width: 209px;
  height: 209px;
  left: 455px;
  border-radius: 10px;
`;
const Image3 = styled.img`
  position: absolute;
  width: 305px;
  height: 370px;
  left: 355px;
  top: 228px;
  border-radius: 10px;
`;
const Part2 = styled.div``;
Part2.H4 = styled.h4`
  width: 378px;
  height: 82px;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  margin-bottom: 28px;
`;
Part2.P = styled.p`
  width: 444px;
  height: 105px;
  margin-bottom: 31px;
`;
Part2.Icons = styled.div`
display:grid ;
grid-template-columns: 1fr 1fr;
`;
Part2.Icon1 = styled.div`
display:flex;
gap: 13px;
margin-bottom: 24px;
`;

const Ellipse = styled(ellipse)`
margin-top:8px;
`;

Part2.Icon1.P = styled.p`
width: 194px;
height: 36px;`;

Part2.Btn = styled.button`
width: 122px;
height: 50px;
border-radius: 30px;
background-color: var(--primary-black);
color: var(--primary-white);
font-weight: 500;
font-size: 16px;
border: none;
margin-top:38px;
   :active{
    transform: scale(0.95);
   };
`;

export { Container, Wrapper, Part1, Part2, Image1, Image2, Image3, Ellipse};
