import React, { Component } from "react";
import {
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
} from "./style";
import sofa2 from "../../assets/images/sofa2.png";

class Footer extends Component {
  render() {
    return (
      <Container>
        <FooterWrapper>

          <FooterWrapper.Header>

            <FooterWrapper.Header.Part1>

              <FooterWrapper.Header.Part1.Icon>
                <Envelope />
                <FooterWrapper.Header.Part1.Icon.H4>
                  Subscribe to Newsletter
                </FooterWrapper.Header.Part1.Icon.H4>
              </FooterWrapper.Header.Part1.Icon>

              <Inputs>
                <Inputs.Input type="text" placeholder="Enter your name" />
                <Inputs.Input type="text" placeholder="Enter your e-mail" />
                <Telegram.Div>
                  <Telegram />
                </Telegram.Div>
              </Inputs>
            </FooterWrapper.Header.Part1>

            <FooterWrapper.Header.Part2>
              <FooterWrapper.Header.Img src={sofa2} alt="sofa2" />
            </FooterWrapper.Header.Part2>
          </FooterWrapper.Header>



          <FooterWrapper.Body>
            <FooterWrapper.Body.Part1>
              <Furni />
            </FooterWrapper.Body.Part1>

            <FooterWrapper.Body.Part2>
              <FooterWrapper.Body.Part2.Step1>
                <FooterWrapper.Body.Part2.Step1.P>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was for us to know what was to be done.
                  the this is a long post for the text.`This small text has to
                  be place here, since this is
                </FooterWrapper.Body.Part2.Step1.P>
              </FooterWrapper.Body.Part2.Step1>
              

              <FooterWrapper.Body.Part2.Step2>
                <FooterWrapper.Body.Part2.Step2.P>
                  About Us
                </FooterWrapper.Body.Part2.Step2.P>
                <FooterWrapper.Body.Part2.Step2.P>
                  Services
                </FooterWrapper.Body.Part2.Step2.P>
                <FooterWrapper.Body.Part2.Step2.P>
                  Blog
                </FooterWrapper.Body.Part2.Step2.P>
                <FooterWrapper.Body.Part2.Step2.P>
                  Contact Us
                </FooterWrapper.Body.Part2.Step2.P>
              </FooterWrapper.Body.Part2.Step2>



              <FooterWrapper.Body.Part2.Step3>
                <FooterWrapper.Body.Part2.Step2.P>
                  Support
                </FooterWrapper.Body.Part2.Step2.P>
                <FooterWrapper.Body.Part2.Step2.P>
                  Knowledge base
                </FooterWrapper.Body.Part2.Step2.P>
                <FooterWrapper.Body.Part2.Step2.P>
                  Live chat
                </FooterWrapper.Body.Part2.Step2.P>
              </FooterWrapper.Body.Part2.Step3>



              <FooterWrapper.Body.Part2.Step4>
                <FooterWrapper.Body.Part2.Step2.P>
                  Jobs
                </FooterWrapper.Body.Part2.Step2.P>
                <FooterWrapper.Body.Part2.Step2.P>
                  Our team
                </FooterWrapper.Body.Part2.Step2.P>
                <FooterWrapper.Body.Part2.Step2.P>
                  Leadership
                </FooterWrapper.Body.Part2.Step2.P>
                <FooterWrapper.Body.Part2.Step2.P>
                  Privacy Police Us
                </FooterWrapper.Body.Part2.Step2.P>
              </FooterWrapper.Body.Part2.Step4>



              <FooterWrapper.Body.Part2.Step5>
                <FooterWrapper.Body.Part2.Step2.P>
                  Nordic Chair
                </FooterWrapper.Body.Part2.Step2.P>
                <FooterWrapper.Body.Part2.Step2.P>
                  Kruzo Aero
                </FooterWrapper.Body.Part2.Step2.P>
                <FooterWrapper.Body.Part2.Step2.P>
                  Ergonomic
                </FooterWrapper.Body.Part2.Step2.P>
              </FooterWrapper.Body.Part2.Step5>
            </FooterWrapper.Body.Part2>



            <FooterWrapper.Body.Part3>
              <FooterWrapper.Body.Part3.IconsDiv>
                <Facebook />
              </FooterWrapper.Body.Part3.IconsDiv>
              <FooterWrapper.Body.Part3.IconsDiv>
                <Instagram />
              </FooterWrapper.Body.Part3.IconsDiv>
              <FooterWrapper.Body.Part3.IconsDiv>
                <Twitter />
              </FooterWrapper.Body.Part3.IconsDiv>
              <FooterWrapper.Body.Part3.IconsDiv>
                <Linkedin />
              </FooterWrapper.Body.Part3.IconsDiv>

            </FooterWrapper.Body.Part3>

            <HrDiv></HrDiv>
          </FooterWrapper.Body>


          <FooterWrapper.End>
            <FooterWrapper.End.Part1>
              <FooterWrapper.End.P>
                Copyright 2022 degraft87@gmail.com. All Rights Reserved.
              </FooterWrapper.End.P>
            </FooterWrapper.End.Part1>

            <FooterWrapper.End.Part2>
              <FooterWrapper.End.P>Terms & Conditions</FooterWrapper.End.P>
              <FooterWrapper.End.P>Privacy Policy</FooterWrapper.End.P>
            </FooterWrapper.End.Part2>

          </FooterWrapper.End>
          
        </FooterWrapper>
      </Container>
    );
  }
}

export default Footer;
