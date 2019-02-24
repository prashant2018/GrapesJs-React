import React, { Component } from 'react';
import 'grapesjs/dist/css/grapes.min.css';  

class GrapesApp extends Component {
    render() {
        // Replace this css with your css
        const external_styles = ".test {font-style:italic; margin:10px; text-align:center}";
        return (
            <div>

                <div className="test">
                    <h3>Login Page</h3>
                </div>
                
                <div className="test">
                    <text>User Name</text>
                    <input placeholder="Enter Username"></input>
                </div>
                
                <div className="test">
                    <text>Password</text>
                    <input placeholder="Enter Password"></input>
                </div>
                
                <style>{ external_styles }</style>

            </div>
        );
    }
}

export default GrapesApp;