<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import wayCar from "../../assets/wayCar.png";
=======
import React, {useState, useEffect} from "react";
import CarStreet from "../../assets/car-street.png";
import Rigth from "../../assets/Rigth.png";
import Bottom from "../../assets/Bottom.png";
import Top from "../../assets/Top.png";
import Back from "../../assets/Back.png";
>>>>>>> 7c4def94901136af25baaf8e5b62dc921c9b21a4

export default function Index(i) {
  // States
  const intialize = [1, 2, 3, 4, 1, 2, 3, 4];
  const [choices, setChoices] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // Shuffle
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
  // On Submit
  const Submit = () => {
    const a1 = answers;
    const a2 = [1, 2, 1];
    const equation = JSON.stringify(answers) == JSON.stringify([1, 2, 1]);
    if (equation) {
      setErrorMessage("Good Job");
    }
    console.log(answers);
  };

  useEffect(() => {
    setChoices(shuffle(intialize));
  }, []);
  // Add A choice
  const addChoice = (choice) => {
    setChoices([...choices, choice]);
  };
  // Remove An Answer
  const removeAnswer = (index) => {
    setAnswers([
      ...answers.slice(0, index),
      ...answers.slice(index + 1, answers.length),
    ]);
  };
  // Remove A choice
  const removeChoice = (index) => {
    setChoices([
      ...choices.slice(0, index),
      ...choices.slice(index + 1, choices.length),
    ]);
  };
  //   Add An Answer
  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  //   On reset
  const Reset = () => {
    setAnswers([]);

    setChoices(shuffle(intialize));
  };
  return (
    <div>
      {errorMessage && <div className="good_job">{errorMessage}</div>}

      <div className="all_iteams">
        {choices.map((choice, i) => (
          <div
            className="choice"
            key={i}
            onClick={() => {
              addAnswer(choice);
              removeChoice(i);
            }}
          >
            {choice === 1 ? (
              <img className="Btn_Arrow" src={Rigth} />
            ) : choice === 2 ? (
              <img className="Btn_Arrow" src={Bottom} />
            ) : choice === 3 ? (
              <img className="Btn_Arrow" src={Back} />
            ) : (
              <img className="Btn_Arrow" src={Top} />
            )}
          </div>
        ))}
      </div>
      <div className="wayCar">
        <img src={wayCar} alt="" />
      </div>
      <div className="all_iteams">
        {answers.map((answer, i) => (
          <div
            className="choice"
            key={i}
            onClick={() => {
              removeAnswer(i);
              addChoice(answer);
            }}
          >
            {answer === 1 ? (
              <img className="Btn_Arrow" src={Rigth} />
            ) : answer === 2 ? (
              <img className="Btn_Arrow" src={Bottom} />
            ) : answer === 3 ? (
              <img className="Btn_Arrow" src={Back} />
            ) : (
              <img className="Btn_Arrow" src={Top} />
            )}
          </div>
        ))}
      </div>
      <br />
      <button className="btn-Reset" onClick={Reset}>
        Reset
      </button>
      <button className="btn-Submit" onClick={Submit}>
        Submit
      </button>
    </div>
  );
}
