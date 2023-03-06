import React, {Component} from "react";
import { Container,Wrapper, Part1,Part2,Image1,Image2,Image3,Ellipse } from "./style";
import imgGrid1 from '../../assets/images/imgGrid1.png'
import imgGrid2 from '../../assets/images/imgGrid2.png'
import imgGrid3 from '../../assets/images/imgGrid3.png'


class Section3 extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <Container>
                <Wrapper>
                    <Part1>
                    <Part1.Images>
                    <Image1 src={imgGrid1} alt="imgGrid1" />
                    <Image2 src={imgGrid2} alt="imgGrid2" />
                    <Image3 src={imgGrid3} alt="imgGrid3" />
                    </Part1.Images>
                    </Part1>
                    <Part2>
                        <Part2.H4>We help you make Modern Interior Design</Part2.H4>
                    <Part2.P> Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long post for the text.`This small text has to be place here, since this is a place holder. You can also chane it.</Part2.P>
                    <Part2.Icons>
                        <Part2.Icon1>
                            <Ellipse/>
                            <Part2.Icon1.P> Donec mattis porta eros,let aliquet finibus ri </Part2.Icon1.P>
                        </Part2.Icon1>
                        <Part2.Icon1>
                            <Ellipse/>
                            <Part2.Icon1.P> Donec mattis porta eros,let aliquet finibus ri </Part2.Icon1.P>
                        </Part2.Icon1>
                        <Part2.Icon1>
                            <Ellipse/>
                            <Part2.Icon1.P> Donec mattis porta eros,let aliquet finibus ri </Part2.Icon1.P>
                        </Part2.Icon1>
                        <Part2.Icon1>
                            <Ellipse/>
                            <Part2.Icon1.P> Donec mattis porta eros,let aliquet finibus ri </Part2.Icon1.P>
                        </Part2.Icon1>
                      
                    </Part2.Icons>

                    <Part2.Btn>Explore</Part2.Btn>
                    </Part2>
                </Wrapper>
            </Container>
        )
    }
}

export default Section3