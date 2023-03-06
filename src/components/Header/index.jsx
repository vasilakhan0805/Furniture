import React,{Component} from "react";
import {Contanier,Wrapper,Content, Image,Button} from './style.js'
import img1 from '../../assets/images/img1.png'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){

        return(
            <Contanier>
              <Wrapper>
                <Content>
                    <Content.RichText>Modern Interior Design Studio</Content.RichText>
                    <Content.Btns>
                        <Button br ='30' bg='var(--primary-yellow)' active='active' >Shop Now</Button>
                        <Button width='132' border='1px solid #FFFFFF;' br='30' bg='transparent' color='#FFF' active='active'>Explore</Button>
                    </Content.Btns>
                </Content>
                <Image  src={img1} alt="hero-image"/>
              </Wrapper>
            </Contanier>
        )
    }
}

export default Header