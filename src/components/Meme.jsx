import "./Meme.css";
import memesData from "../data/memesData.js";
import { useState } from "react";

export function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImg() {
    let memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        memeImg: url,
      };
    });
  }

  return (
    <>
      <div className="form" action="">
        <div className="form__container">
          <div className="form__content form__content--top">
            <label htmlFor="text-top">{meme.topText}</label>
            <input type="text" name="text-top" id="text-top" placeholder="Shut up" />
          </div>
          <div className="form__content form__content--bottom">
            <label htmlFor="text-bottom">{meme.bottomText}</label>
            <input type="text" name="text-bottom" id="text-bottom" placeholder="And take my money" />
          </div>
        </div>

        <button className="form__button" type="submit" onClick={getMemeImg}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme__container">
        <img src={meme.memeImg} alt="" />
      </div>
    </>
  );
}
