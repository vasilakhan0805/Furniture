import React, {Component} from "react";
import Navbar from "./Navbar";
import Header from "./Header/index";
import Section1 from "./Section1/index";
import Section2 from "./Section2/index";
import Section3 from "./Section3/index";
import Section4 from "./Section4/index";
import Section5 from "./Section5/index";

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
            </div>
        )
    }
}

export default Home