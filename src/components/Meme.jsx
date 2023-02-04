import React, { useState, useEffect } from "react";
import "../Styles/Meme/Meme.css"

export default function Meme(){
    
    const [allMemes, setAllMemes] = useState([])
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4acd7j.png"
    })


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [allMemes])

    
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event){
        const {value, name} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <main>
            <div className="form">
                <input  
                    className="form-input" 
                    placeholder="Top text" 
                    type="text" 
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input  
                    className="form-input" 
                    placeholder="bottom text" 
                    type="text" 
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    onClick={getMemeImage} 
                    className="form-btn">
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme">
                <img className="meme-img" src={meme.randomImage} alt="meme" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom" >{meme.bottomText}</h2>
            </div>
        </main>
    )
}