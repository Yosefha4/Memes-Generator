import React, { useEffect } from "react";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    uptext: "",
    dowmtext: "",
    randomImg: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImg, setAllMemeImg] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImg(data.data.memes));
  }, []);

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemeImg.length);
    const url = allMemeImg[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form-input"
          type="text"
          placeholder="Enter header text"
          name="uptext"
          value={meme.uptext}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Enter footer text"
          name="dowmtext"
          value={meme.dowmtext}
          onChange={handleChange}
        />
        <button onClick={getMemeImg} className="btn-inp">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} alt="try image" className="imgh" />
        <h2 className="top">{meme.uptext}</h2>
        <h2 className="bottom">{meme.dowmtext}</h2>
      </div>
    </main>
  );
}
