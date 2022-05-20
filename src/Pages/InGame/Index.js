import React, {useState, useEffect} from "react";

export default function Index(i) {
  // States
  const intialize = [1, 2, 3, 4, 1, 2, 3, 4];
  const [choices, setChoices] = useState([]);
  const [answers, setAnswers] = useState([]);

  function shuffle(array) {
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
  }

  useEffect(() => {
    //     console.log(choices);
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
    console.log(answers);
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
            {choice}
          </div>
        ))}
      </div>
      <img src="../../../assets/car-street.png" alt="" />
      <h1>Answer</h1>
      <div className="all_iteams">
        {answers.map((answer, i) => (
          <div
            className="choice"
            key={i}
            onClick={() => {
              console.log(answer);
              removeAnswer(i);
              addChoice(answer);
            }}
          >
            {/* {answer} */}
          </div>
        ))}
      </div>
      <br />
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
