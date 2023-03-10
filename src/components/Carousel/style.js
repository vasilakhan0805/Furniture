import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background: #eff2f1;

  .slider {
    width: 100%;
  }

  .slide {
    padding: 30px 20px;
    width: 100%;
  }

  p {
    width: 759px;
    height: 132px;
    text-align: center;
    font-weight: 200;
    font-size: 18px;
    line-height: 32px;
    color: #000000;
    margin: auto;
  }

  .slick-next {
    top: 90px;
    width: 58px;
    height: 58px;
    background: #385d50;
    border-radius: 50%;
  }

  .slick-prev {
    top: 90px;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: #c4c4c4;
    opacity: 0.75;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
  padding: 120px 178px;
  margin: auto;

  h2 {
    line-height: 41px;
    text-align: center;
    color: var(--primary-black);
  }
`;

const Images = styled.div`
  margin-top: 42px;
  img {
    width: 86px;
    height: 86px;
    border-radius: 50%;
    margin: auto;
  }
  h5 {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #000000;
    margin: 4px 0px;
  }
  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 32px;
    text-align: center;
    margin-bottom:-95px ;
  }
`;

export { Container, Wrapper, Images };
