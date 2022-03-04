import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
    static contextType = ThemeContext;
    
    state = {  } 
    render() { 
        const { lightTheme, light, dark } = this.context;
        const theme = lightTheme ? light : dark
        return (
            <nav style={
                {
                    background: theme.ui,
                    color: theme.syntax
                }
                }>
                <h2>Cliff</h2>
            </nav>
        );
    }
}
 
export default Navbar;