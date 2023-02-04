import React from "react";
import "../Styles/Header/Header.css"

export default function Header() {
    return (
        <header className="hd">
            <img className="header-img" src="./images/proxy.jpg" alt="trollface" />
            <h2 className="header-title">Meme Generator</h2>   
            <h3 className="header-info" >React Course - Project 3</h3>                
        </header>
    )
}