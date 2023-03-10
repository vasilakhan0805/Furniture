import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Wrapper,Images } from "./style";
import person1 from '../../assets/images/person1.png'

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <Wrapper>
          <h2>Testimonials</h2>
          <Slider className="slider" {...settings}>
            <div className="slide">
              <p>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </p>

              <Images>
                <img src={person1} alt="person1" />
                <h5>Michelle Anna </h5>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Images>
            </div>
            <div className="slide">
              <p>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </p>

              <Images>
                <img src={person1} alt="person1" />
                <h5>Michelle Anna </h5>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Images>
            </div>
            <div className="slide">
              <p>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </p>

              <Images>
                <img src={person1} alt="person1" />
                <h5>Michelle Anna </h5>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Images>
            </div>
            <div className="slide">
              <p>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </p>

              <Images>
                <img src={person1} alt="person1" />
                <h5>Michelle Anna </h5>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Images>
            </div>
            <div className="slide">
              <p>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </p>

              <Images>
                <img src={person1} alt="person1" />
                <h5>Michelle Anna </h5>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Images>
            </div>
            <div className="slide">
              <p>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </p>

              <Images>
                <img src={person1} alt="person1" />
                <h5>Michelle Anna </h5>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Images>
            </div>
            <div className="slide">
              <p>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </p>

              <Images>
                <img src={person1} alt="person1" />
                <h5>Michelle Anna </h5>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Images>
            </div>
            <div className="slide">
              <p>
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </p>

              <Images>
                <img src={person1} alt="person1" />
                <h5>Michelle Anna </h5>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Images>
            </div>
          </Slider>
        </Wrapper>
      </Container>
    );
  }
}

export default Carousel;
