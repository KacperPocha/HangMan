import { useNavigate } from "react-router-dom";
import wordsBase from "../base.json";

function StartMenu() {
  const navigate = useNavigate();

  const handleStart = () => {
    const randomWord = wordsBase.words[Math.floor(Math.random() * wordsBase.words.length)];
    navigate("/Game", { state: { word: randomWord } });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <button className="px-12 py-4 border-4 rounded-2xl  bg-gray-500"
      onClick={handleStart}>
        Start game
      </button>
    </div>
  );
}

export default StartMenu;
