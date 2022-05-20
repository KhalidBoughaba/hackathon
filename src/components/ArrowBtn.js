import React from "react";

export default function ({answer}) {
  console.log(answer);
  return (
    <div
      className="choice"

      //     onClick={() => {
      //       removeAnswer(i);
      //       addChoice(answer);
      //     }
      // }
    >
      {answer}
    </div>
  );
}
