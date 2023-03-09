import styled from "styled-components";

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
  padding-top:164px ;
  margin: auto;
`

const Part1 = styled.div`
display:flex;
gap:36px;
padding-left: 49px;
`;

Part1.Images = styled.div`
position: relative;
`;
Part1.Image1 = styled.img`
position:absolute;
left: 5px;
bottom:-5px;
`;
Part1.Image2 = styled.img``;

Part1.Contents =styled.div`
position: relative;
`;

Part1.Contents.H5 = styled.h5`
font-weight: 900;
color: #000000;
margin-bottom:11px ;
`;
Part1.Contents.H3 = styled.h5`
width: 200px;
height: 44px;
font-weight:400;
line-height: 22px;
color: var(--primary-grey);
`;
Part1.Contents.H4 = styled.h5`
position:absolute;
bottom:-28px;
height: 44px;
font-weight:800;
line-height: 22px;
color: var(--primary-grey);

`;
const Part2 = styled.div``
const Part3 = styled.div``




export {Container,Wrapper,Part1,Part2,Part3}