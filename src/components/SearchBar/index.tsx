import { useState } from "react";
import searchImg from "../../assets/lupa.svg";
import "./styles.scss";

type Props = {
  onSearch: Function;
};

export default function SearchBar({ onSearch }: Props) {
  const [inputText, setInputText] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(inputText);
  }

  function handleChange(event: any) {
    setInputText(event.target.value);
  }

  function handleResetClick() {
    setInputText("");
    onSearch(inputText);
  }

  return (
    <div className="container search-bar-container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <div className="search-bar-submit-button">
          <button>
            <img src={searchImg} alt="Procurar" />
          </button>
        </div>
        <div className="search-bar-input-text">
          <input
            value={inputText}
            type="text"
            placeholder="Nome do produto"
            onChange={handleChange}
          />
        </div>
        <div className="search-bar-clear-button">
          <button onClick={handleResetClick}>x</button>
        </div>
      </form>
    </div>
  );
}
