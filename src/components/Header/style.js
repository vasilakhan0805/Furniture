import styled from "styled-components";
import  {css} from "styled-components";

export const common = css`
width: ${(props) => (props.width? props.width + 'px' : "150px")};
height: ${(props) => (props.height? props.height + 'px' : "50px")};

background: ${(props) => (props.bg? props.bg : "#FFF")};
color: ${(props) => (props.color? props.color : "black")};

margin-left: ${(props) => (props.ml? props.ml + 'px' : "0px")};
margin-top: ${(props) => (props.mt? props.mt + 'px' : "0px")};
margin-right: ${(props) => (props.mr? props.mr + 'px' : "0px")};
margin-bottom: ${(props) => (props.mb? props.mb + 'px' : "0px")};

padding-left: ${(props) => (props.pl? props.pl + 'px' : "0px")};
padding-top: ${(props) => (props.pt? props.pt + 'px' : "0px")};
padding-right: ${(props) => (props.pr? props.pr + 'px' : "0px")};
padding-bottom: ${(props) => (props.pb? props.pb + 'px' : "0px")};

font-family: ${(props) => (props.family? props.family: "sans-serif")};
font-size: ${(props) => (props.fsize? props.fsize + 'px' : "16px")};
font-weight: ${(props) => (props.fweight? props.fweight :500)};

border-radius: ${(props) => (props.br? props.br + 'px' : "3px")};
border: ${(props) => (props.border? props.border + 'px' : "none")};
outline: none;
`
const Button = styled.button`
${common};
 :active{
    transform: scale(0.95)
 };
`;


const Contanier = styled.header`
width: 100%;
background-color: var(--primary-green);
`;
const Wrapper = styled.div`
display:flex;
justify-content: space-between;


max-width: 1500px;
width:100%;
padding: 0px 178px;
margin: auto;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 128px;
`;

Content.RichText = styled.h1`
max-width:419px;
`

Content.Btns = styled.div`
display:flex;
align-items: center;
gap:14px;   
`;

const Image = styled.img`
max-width: 710px;
`



export{Contanier,Wrapper,Content,Image,Button}