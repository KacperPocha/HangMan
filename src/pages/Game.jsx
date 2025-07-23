import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  const randomWord = location.state?.word;

  const letters = [
    "A",
    "Ą",
    "B",
    "C",
    "Ć",
    "D",
    "E",
    "Ę",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "Ł",
    "M",
    "N",
    "Ń",
    "O",
    "Ó",
    "P",
    "Q",
    "R",
    "S",
    "Ś",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Ź",
    "Ż",
  ];

  console.log(randomWord);

  const handleClickLetter = (letter) => {
    if (guessedLetters.includes(letter)) {
      alert(`Już kliknięto literę: ${letter}`);
      return;
    }

    setGuessedLetters((prev) => [...prev, letter]);

    if (!randomWord.word.includes(letter)) {
      setIncorrectGuesses((prev) => prev + 1);
    }
  };

  console.log(incorrectGuesses);

  const getButtonClass = (letter) => {
    if (guessedLetters.includes(letter)) {
      return randomWord.word.includes(letter) ? "bg-green-500" : "bg-red-500";
    }
    return "bg-gray-300";
  };

  return (
    <div className="grid h-screen">
      <div className="text-center text-3xl">{randomWord.category}</div>
      <div className="flex gap-2 text-3xl font-mono justify-center">
        {randomWord.word.split("").map((letter, index) => (
          <span key={index} className="w-6 text-center">
            {guessedLetters.includes(letter) ? letter : "_"}
          </span>
        ))}
      </div>
      <div className=" flex justify-center mb-[-20px]">
        <svg width="200" height="250" className="stroke-black stroke-[4]">
          {incorrectGuesses > 0 && <line x1="10" y1="240" x2="190" y2="240" />}
          {incorrectGuesses > 1 && <line x1="50" y1="240" x2="50" y2="20" />}
          {incorrectGuesses > 2 && <line x1="50" y1="20" x2="140" y2="20" />}
          {incorrectGuesses > 3 && <line x1="140" y1="20" x2="140" y2="50" />}
          {incorrectGuesses > 4 && <circle cx="140" cy="70" r="20" />}
          {incorrectGuesses > 5 && <line x1="140" y1="90" x2="140" y2="150" />}
          {incorrectGuesses > 6 && <line x1="140" y1="110" x2="110" y2="130" />}
          {incorrectGuesses > 7 && <line x1="140" y1="110" x2="170" y2="130" />}
          {incorrectGuesses > 8 && <line x1="140" y1="150" x2="120" y2="190" />}
          {incorrectGuesses > 9 && <line x1="140" y1="150" x2="160" y2="190" />}
        </svg>
      </div>

      <div className="grid grid-cols-9 gap-4 ml-24 mr-24 p-12">
        {letters.map((letter) => (
          <button
            key={letter}
            className={`rounded ${getButtonClass(letter)} text-3xl`}
            onClick={() => handleClickLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Game;
