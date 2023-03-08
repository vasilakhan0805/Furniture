import React,{Component} from "react";
import { Container,Wrapper,Part1 } from "../Section4/style";
import littleChair1 from '../../assets/images/littleChair1.png'
import Rectangle from '../../assets/images/Rectangle 10.png'
import littleChair2 from '../../assets/images/littleChair2.png'
import littleChair3 from '../../assets/images/littleChair3.png'

class Section4 extends Component{
    render(){
        return(
            <Container>
                <Wrapper>
                    <Part1>
                        <Part1.Images>
                        <Part1.Image1 src={littleChair1} alt="littleChair1" />
                        <Part1.Image2 src={Rectangle} alt="Rectangle " />
                        </Part1.Images>
                        <Part1.Contents>
                            <Part1.Contents.H5>
                            Nordic Chair 
                            </Part1.Contents.H5>
                            <Part1.Contents.H3>
                            Donec mattis porta eros, aliquet finibus risus in. Donecd
                            </Part1.Contents.H3>
                            <Part1.Contents.H4>Read more</Part1.Contents.H4>
                        </Part1.Contents>
                    </Part1>
                    <Part1>
                        <Part1.Images>
                        <Part1.Image1 src={littleChair2} alt="littleChair2" />
                        <Part1.Image2 src={Rectangle} alt="Rectangle " />
                        </Part1.Images>
                        <Part1.Contents>
                            <Part1.Contents.H5>
                            Kruzi Aero 
                            </Part1.Contents.H5>
                            <Part1.Contents.H3>
                            Donec mattis porta eros, aliquet finibus risus in. Donecd
                            </Part1.Contents.H3>
                            <Part1.Contents.H4>Read more</Part1.Contents.H4>
                        </Part1.Contents>
                    </Part1>
                    <Part1>
                        <Part1.Images>
                        <Part1.Image1 src={littleChair3} alt="littleChair1" />
                        <Part1.Image2 src={Rectangle} alt="Rectangle " />
                        </Part1.Images>
                        <Part1.Contents>
                            <Part1.Contents.H5>
                            Ergonomic Chair
                            </Part1.Contents.H5>
                            <Part1.Contents.H3>
                            Donec mattis porta eros, aliquet finibus risus in. Donecd
                            </Part1.Contents.H3>
                            <Part1.Contents.H4>Read more</Part1.Contents.H4>
                        </Part1.Contents>
                    </Part1>
                    {/* <Part2></Part2>
                    <Part3></Part3> */}
                </Wrapper>
            </Container>
        )
    }
}


export default Section4