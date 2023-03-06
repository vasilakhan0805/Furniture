import React, {Component} from "react";
import Navbar from "./Navbar";
import Header from "./Header/index";
import Section1 from "./Section1/index";
import Section2 from "./Section2/index";

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <Section1/>
                <Section2/>
            </div>
        )
    }
}

export default Home