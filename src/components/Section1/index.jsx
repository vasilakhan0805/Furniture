import React, { Component } from "react";
import {
  Conatiner,
  Wrapper,
  Part1,
  Part2,
  Part3,
  Part4,
  Button,
  Image1,
  PlusBtn,
  Image2,
  Image3
} from "./style.js";
import chair1 from "../../assets/images/chair1.png";
import chair2 from '../../assets/images/chair2.png'
import chair3 from '../../assets/images/chair3.png'

class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Conatiner>
        <Wrapper>
          <Part1>
            <Part1.H1>Crafted with excellent material.</Part1.H1>
            <Part1.P>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done.
            </Part1.P>
            <Button width="122" bg="#2F2F2F" br="30" color="#FFFFFF">
              Explore
            </Button>
          </Part1>
          <Part2>
            <Part2.Card>
              <Image1 src={chair1} alt="chair1" />

              <Part2.h3>Nordic ChAIR</Part2.h3>
              <Part2.H3>$50.00</Part2.H3>

              <PlusBtn>+</PlusBtn>
            </Part2.Card>
          </Part2>
          <Part3>
            <Image2 src={chair2} alt="chair2" />
          </Part3>
          <Part4>
            <Image3 src={chair3} alt="chair3" />
          </Part4>
        </Wrapper>
      </Conatiner>
    );
  }
}

export default Section1;
