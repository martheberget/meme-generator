import "./Meme.css";
import { useState, useEffect } from "react";

export function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  function getMemeImg() {
    //let memesArray = allMemes.data.memes;
    let randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        memeImg: url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="form" action="">
        <div className="form__container">
          <div className="form__content form__content--top">
            <label htmlFor="text-top"></label>
            <input type="text" name="topText" id="text-top" placeholder="Shut up" value={meme.topText} onChange={handleChange} />
          </div>
          <div className="form__content form__content--bottom">
            <label htmlFor="text-bottom"></label>
            <input type="text" name="bottomText" id="text-bottom" placeholder="And take my money" value={meme.bottomText} onChange={handleChange} />
          </div>
        </div>

        <button className="form__button" type="submit" onClick={getMemeImg}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme__container">
        <img src={meme.memeImg} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
}
