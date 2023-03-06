import React, {Component} from "react";
import Navbar from "./Navbar";
import Header from "./Header/index";
import Section1 from "./Section1/index";
import Section2 from "./Section2/index";
import Section3 from "./Section3/index";

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <Section1/>
                <Section2/>
                <Section3/>
            </div>
        )
    }
}

export default Home