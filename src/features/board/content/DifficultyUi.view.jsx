/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { difficulties } from '../Board.utils';
import './DifficultyUi.scss';

const DifficultyUi = ({
  difficulty,
  setDifficulty,
  setGridData,
}) => (
  <form action="/action_page.php" className="difficulty-form">
    <p><b>Please select the difficulty:</b></p>

    {difficulties.map((item) => (
      <div key={item.value} className="difficulty-options">
        <input
          type="radio"
          id={item.value}
          name="difficulty"
          value={item.value}
          onClick={() => {
            setDifficulty(item.value);
            setGridData([[]]);
          }}
          checked={difficulty === item.value}
        />
        <label htmlFor={item.value}>{item.label}</label>
      </div>
    ))}
  </form>
);

export default DifficultyUi;
