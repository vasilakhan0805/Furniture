import styled from "styled-components";
import { ReactComponent as envelope } from "../../assets/icons/envelope.svg";
import { ReactComponent as telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as furni2 } from "../../assets/icons/Furni2.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin-in.svg";

const Container = styled.div`
  width: 100%;
  background: var(--primary-white);
`;
const FooterWrapper = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  max-width: 1500px;
  width: 100%;
  padding: 0px 178px;
  margin: auto;
`;

FooterWrapper.Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
FooterWrapper.Header.Part1 = styled.div`
  padding-top: 98px;
`;
FooterWrapper.Header.Part1.Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;
const Envelope = styled(envelope)``;
FooterWrapper.Header.Part1.Icon.H4 = styled.h4``;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 138px;
  gap: 15px;
`;

Inputs.Input = styled.input`
  width: 262px;
  height: 46px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  padding-left: 15px;
`;

const Telegram = styled(telegram)`
  position: absolute;
  left: 10px;
  bottom: 10px;
`;
Telegram.Div = styled.div`
  position: relative;
  width: 50px;
  height: 48px;
  background: #35736e;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;
FooterWrapper.Header.Part2 = styled.div`
  position: relative;
`;
FooterWrapper.Header.Img = styled.img`
  position: absolute;
  width: 458px;
  height: 396px;
  right: 0px;
  bottom: 24px;
`;

FooterWrapper.Body = styled.div``;
FooterWrapper.Body.Part1 = styled.div`
  margin-bottom: 19px;
`;
const Furni = styled(furni2)`
  color: var(--primary-black);
`;

FooterWrapper.Body.Part2 = styled.div`
  display: flex;
  justify-content: space-between;
`;
FooterWrapper.Body.Part2.Step1 = styled.div``;
FooterWrapper.Body.Part2.Step1.P = styled.p`
  width: 360px;
  line-height: 24px;
`;
FooterWrapper.Body.Part2.Step2 = styled.div``;
FooterWrapper.Body.Part2.Step2.P = styled.p`
  margin-bottom: 8px;
`;
FooterWrapper.Body.Part2.Step3 = styled.div``;
FooterWrapper.Body.Part2.Step4 = styled.div``;
FooterWrapper.Body.Part2.Step5 = styled.div``;

FooterWrapper.Body.Part3 = styled.div`
  display: flex;
  gap: 11px;
  margin-bottom: 32px;
`;
FooterWrapper.Body.Part3.IconsDiv = styled.div`
  position: relative;
  width: 41px;
  height: 41px;
  background: #d9d9d9;
  border-radius: 50%;
`;
const Facebook = styled(facebook)`
  position: absolute;
  left: 14px;
  top: 12px;
`;
const Instagram = styled(instagram)`
  position: absolute;
  left: 14px;
  top: 12px;
`;
const Twitter = styled(twitter)`
  position: absolute;
  left: 14px;
  top: 12px;
`;
const Linkedin = styled(linkedin)`
  position: absolute;
  left: 14px;
  top: 12px;
`;
const HrDiv = styled.div`
  width: 1140px;
  border: 1px solid #eff2f1;
  margin-bottom: 30px;
`;

FooterWrapper.End = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;

FooterWrapper.End.Part1 = styled.div``;
FooterWrapper.End.P = styled.p``;
FooterWrapper.End.Part2 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 42px;
`;

export {
  Container,
  FooterWrapper,
  Envelope,
  Inputs,
  Telegram,
  Furni,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  HrDiv,
};
