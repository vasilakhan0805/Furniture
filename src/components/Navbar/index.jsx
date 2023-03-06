import React, { Component } from "react";
import {
  Container,
  Wrapper,
  Furni,
  Wrapper2,
  Navigation,
  User,
  Cart,
  Icons,
} from "./style";

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Furni />
          <Wrapper2>
            <Navigation>
              <Navigation.Ul>
                <Navigation.Ul.Li>Home</Navigation.Ul.Li>
                <Navigation.Ul.Li>About us</Navigation.Ul.Li>
                <Navigation.Ul.Li>Services</Navigation.Ul.Li>
                <Navigation.Ul.Li>Blog</Navigation.Ul.Li>
                <Navigation.Ul.Li>Contact us</Navigation.Ul.Li>
              </Navigation.Ul>
            </Navigation>
            <Icons>
              <User />
              <Cart />
            </Icons>
          </Wrapper2>
        </Wrapper>
      </Container>
    );
  }
}

export default Navbar;
