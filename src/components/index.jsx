import React, {Component} from "react";
import Navbar from "./Navbar";
import Header from "./Header/index";

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                
            </div>
        )
    }
}

export default Home