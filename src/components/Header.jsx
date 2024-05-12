import img from "../images/troll-face.png";
import "./Header.css";

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img className="header__image" src={img} alt="troll" />
          <h1 className="header__title">Meme Generator</h1>
        </div>
        <p className="header__description">React Course - Project 3</p>
      </header>
    </>
  );
}
