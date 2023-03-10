import styled from "styled-components";


const Container = styled.div`
width: 100%;
background: #EFF2F1;
`;

const Wrapper = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  max-width: 1500px;
  width: 100%;
  padding: 0px 178px;
  padding-bottom: 187px;
  margin: auto;
  `;
const Content = styled.div`
width:100%;
display:flex ;
justify-content: space-between;
margin-bottom: 36px;
`
Content.H1 = styled.h1`
font-weight: 600;
font-size: 34px;
line-height: 41px;
color:var(--primary-black) ;
`;
Content.H4 = styled.h4`
font-weight: 600;
font-size: 16px;
line-height: 41px;
color:var(--primary-black) ;
text-decoration:underline solid black 20%;
`;
const Images = styled.div`
display:flex;
justify-content: space-between;
`;
Images.Image1 =styled.div`
`;
Images.Image1.Img = styled.img`
border-radius: 15px;
margin-bottom: 44px;
`;
Images.Image1.Content = styled.div``;
Images.Image1.H4 = styled.h4`
margin-bottom:5px ;
`;
Images.Image1.H5 = styled.h5`
`;
Images.Image2 =styled.div`
`
Images.Image3 =styled.div`
`

export {Container, Wrapper, Content, Images}