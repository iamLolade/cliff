import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
    static contextType = ThemeContext;
    
    state = {  } 
    render() { 
        return (
            <ThemeContext.Consumer>{(context) => {
                const { lightTheme, light, dark } = context;
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

                )
            }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default Navbar;