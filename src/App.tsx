"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [

      "No",
      "Sei sicura?",
      "E se ti portassi al Mc?",
      "Per favore",
      "Neanche con 20 McNuggets in mano?",
      "E delle patatine grandi?",
      "PER FAVORE AMORE",
      "Sto per morire",
      "Sì, sono morto",
      "ok stai parlando con il mio fantasma",
      "per favore tesoro",
      ":((((",
      "PER FAVORE",
      "Dai cucciola",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://i.imgur.com/NgFZvkc.jpeg" />
          <div className="my-4 text-4xl font-bold">YEEE TI AMO CUCCIOLOTTA MIA ❤️</div>
        </>
      ) : (
        <>
          <img
            className="h-[400px]"

            src="https://i.imgur.com/6pGG2C0.gif"
          />
          <h1 className="my-4 text-4xl">Vuoi essere la mia Valentina?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Si
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
