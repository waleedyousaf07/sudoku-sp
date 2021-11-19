import React from 'react';
import PropTypes from 'prop-types';
import { handleOnCellDataChange } from '../Board.utils';

const BoardUi = ({ gridData, setGridData }) => (
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
);

BoardUi.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gridData: PropTypes.array.isRequired,
  setGridData: PropTypes.func.isRequired,
};

export default BoardUi;
