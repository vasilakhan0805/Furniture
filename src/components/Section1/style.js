import styled from "styled-components";
import { css } from "styled-components";

export const common = css`
  width: ${(props) => (props.width ? props.width + "px" : "150px")};
  height: ${(props) => (props.height ? props.height + "px" : "50px")};

  background: ${(props) => (props.bg ? props.bg : "#FFF")};
  color: ${(props) => (props.color ? props.color : "black")};

  margin-left: ${(props) => (props.ml ? props.ml + "px" : "0px")};
  margin-top: ${(props) => (props.mt ? props.mt + "px" : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr + "px" : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : "0px")};

  padding-left: ${(props) => (props.pl ? props.pl + "px" : "0px")};
  padding-top: ${(props) => (props.pt ? props.pt + "px" : "0px")};
  padding-right: ${(props) => (props.pr ? props.pr + "px" : "0px")};
  padding-bottom: ${(props) => (props.pb ? props.pb + "px" : "0px")};

  font-family: ${(props) => (props.family ? props.family : "sans-serif")};
  font-size: ${(props) => (props.fsize ? props.fsize + "px" : "16px")};
  font-weight: ${(props) => (props.fweight ? props.fweight : 500)};

  border-radius: ${(props) => (props.br ? props.br + "px" : "3px")};
  border: ${(props) => (props.border ? props.border + "px" : "none")};
  outline: none;
`;
const Button = styled.button`
  ${common};
  :active {
    transform: scale(0.95);
  }
`;
const Conatiner = styled.div`
  width: 100%;
  background: #EFF2F1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
  padding: 200px 178px;
  margin: auto;
`;

const Part1 = styled.div``;

Part1.H1 = styled.h1`
  width: 205px;
  height: 123px;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  color: var(--primary-black);
  margin-bottom: 27px;
`;
Part1.P = styled.p`
  width: 228px;
  height: 108px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--primary-grey);
  margin-bottom: 33px;
`;
const Part2 = styled.div`
position: relative;
right:250px ;

`;

Part2.Card = styled.p`
  position: absolute;
  top:30px;
  width: 296px;
  height: 307px;

  background: rgba(53, 115, 110, 0.1);
  border-radius: 20px;
`;

const Image1 = styled.img`
  position: absolute;
  left: 53px;
  right: 54px;
  bottom: 144px;
  width: 189px;
  height: 261px;
`;
Part2.h3 = styled.h3`
  position: absolute;
  left: 100px;
  top: 200px;
  bottom: 40px;
  color: var(--primary-black);
  font-weight: 900;
`;
Part2.H3 = styled(Part2.h3)`
  position: absolute;
  left: 120px;
  top: 230px;
`;

const PlusBtn = styled.button`
  position: absolute;
  left: 130px;
  top: 290px;

  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: var(--primary-black);
  border: none;
  color: var(--primary-white);
`;

const Part3 = styled.div`
position:relative ;
`;
const Image2 = styled.img`
position: absolute;
right: -15px;
`;
const Part4 = styled.div`
position:relative ;
`;
const Image3 = styled.img`
position: absolute;
right: 50px;
`;

export {
  Conatiner,
  Part1,
  Part2,
  Part3,
  Part4,
  Button,
  Wrapper,
  Image1,
  PlusBtn,
  Image2,
  Image3
};
