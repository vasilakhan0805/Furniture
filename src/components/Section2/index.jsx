import React, { Component } from "react";
import {
  Container,
  Wrapper,
  Part1,
  Part2,
  Icons,
  Truck,
  ShopBag,
  Support,
  Return,
} from "./style";
import sofa from '../../assets/images/sofa.png'

class Section2 extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Part1>
            <Part1.H4> Why Choose Us</Part1.H4>
            <Part1.P>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done. the
            </Part1.P>
            <Icons>
              <Icons.Icon1>
                <Truck />
                <Icons.Icon1.P>Fast & Free Shipping</Icons.Icon1.P>
                <Icons.Icon1.P2>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </Icons.Icon1.P2>
              </Icons.Icon1>

              <Icons.Icon2>
                <ShopBag />
                <Icons.Icon1.P>Easy to Shop</Icons.Icon1.P>
                <Icons.Icon1.P2>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </Icons.Icon1.P2>
              </Icons.Icon2>

              <Icons.Icon3>
                <Support />
                <Icons.Icon1.P>24/7 Support</Icons.Icon1.P>
                <Icons.Icon1.P2>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </Icons.Icon1.P2>
              </Icons.Icon3>

              <Icons.Icon4>
                <Return />
                <Icons.Icon1.P>Hassle Free Returns</Icons.Icon1.P>
                <Icons.Icon1.P2>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </Icons.Icon1.P2>
              </Icons.Icon4>
            </Icons>
          </Part1>
          <Part2>
            <Part2.Image src={sofa} alt="sofa" />
          </Part2>
        </Wrapper>
      </Container>
    );
  }
}

export default Section2;
