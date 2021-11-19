import React, { useState } from 'react';
import initialGridData, { handleOnCellDataChange } from './Board.utils';
import './Board.scss';

const Board = () => {
  const [gridData, setGridData] = useState(initialGridData);

  return (
    <div id="board">
      <div className="table-wrapper">
        <table id="grid">

          {
            gridData.map((row, rowIndex) => (
              <tr>{row.map((col, colIndex) => {
                const cellKey = Object.keys(gridData[rowIndex][colIndex])[0];
                const cellId = `cell-${(colIndex + 1) + (rowIndex * 9) - 1}`;

                return (
                  <td>
                    <input
                      id={cellId}
                      className="board-input-box"
                      type="number"
                      value={gridData[rowIndex][colIndex][cellKey]}
                      onChange={(e) => setGridData(handleOnCellDataChange(gridData, rowIndex, colIndex, e.target.value))}
                    />
                  </td>
                );
              })}
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  );
};

export default Board;
