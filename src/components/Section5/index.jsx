import React, {Component} from "react";
import {Container, Wrapper, Content, Images} from './style';
import post1 from '../../assets/images/post1.png'
import post2 from '../../assets/images/post2.png'
import post3 from '../../assets/images/post3.png'


class Section5 extends Component {
    render (){
        return(
            <Container>
                <Wrapper>
                <Content>
                    <Content.H1>Recent Blog </Content.H1>
                    <Content.H4>View All Posts </Content.H4>
                </Content>
                <Images>
                    <Images.Image1>
                    <Images.Image1.Img src={post1} alt='post1'/>
                    <Images.Image1.Content>
                    <Images.Image1.H4>First Time Home Owner Ideas</Images.Image1.H4>
                    <Images.Image1.H5> <i>by</i> Nana Ama <i>on</i> Nov 18th, 2022 </Images.Image1.H5>
                    </Images.Image1.Content>
                    </Images.Image1>

                    <Images.Image2>
                    <Images.Image1.Img src={post2} alt='post2'/>
                    <Images.Image1.Content>
                    <Images.Image1.H4>First Time Home Owner Ideas</Images.Image1.H4>
                    <Images.Image1.H5> <i>by</i> Nana Ama <i>on</i> Nov 18th, 2022 </Images.Image1.H5>
                    </Images.Image1.Content>
                    </Images.Image2>

                    <Images.Image3>
                    <Images.Image1.Img src={post3} alt='post3'/>
                    <Images.Image1.Content>
                    <Images.Image1.H4>First Time Home Owner Ideas</Images.Image1.H4>
                    <Images.Image1.H5> <i>by</i> Nana Ama <i>on</i> Nov 18th, 2022 </Images.Image1.H5>
                    </Images.Image1.Content>
                    </Images.Image3>
                  
                </Images>
                </Wrapper>
            </Container>
        )
    }
}


export default Section5