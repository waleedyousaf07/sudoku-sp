const initialGridData = [
  [{ A1: 1 }, { A2: 2 }, { A3: null }, { B1: null }, { B2: null }, { B3: null }, { C1: null }, { C2: null }, { C3: null }],
  [{ A4: null }, { A5: 7 }, { A6: null }, { B4: null }, { B5: null }, { B6: null }, { C4: null }, { C5: null }, { C6: null }],
  [{ A7: null }, { A8: null }, { A9: null }, { B7: null }, { B8: null }, { B9: null }, { C7: null }, { C8: null }, { C9: null }],

  [{ D1: null }, { D2: null }, { D3: null }, { E1: null }, { E2: null }, { E3: null }, { F1: null }, { F2: null }, { F3: null }],
  [{ D4: null }, { D5: null }, { D6: null }, { E4: null }, { E5: null }, { E6: null }, { F4: null }, { F5: null }, { F6: null }],
  [{ D7: null }, { D8: null }, { D9: null }, { E7: null }, { E8: null }, { E9: null }, { F7: null }, { F8: null }, { F9: null }],

  [{ G1: null }, { G2: null }, { G3: null }, { H1: null }, { H2: null }, { H3: null }, { I1: null }, { I2: null }, { I3: null }],
  [{ G4: null }, { G5: null }, { G6: null }, { H4: null }, { H5: null }, { H6: null }, { I4: null }, { I5: null }, { I6: null }],
  [{ G7: null }, { G8: null }, { G9: null }, { H7: null }, { H8: null }, { H9: null }, { I7: null }, { I8: null }, { I9: null }],
];

export const handleOnCellDataChange = (gridData, currentRowIndex, currentColIndex, currentValue) => gridData.map((row, rowIndex) => {
  if (currentRowIndex === rowIndex) {
    return row.map((col, colIndex) => {
      if (currentColIndex === colIndex) {
        const cellKey = Object.keys(col)[0];
        // eslint-disable-next-line radix
        return ({ [cellKey]: parseInt(currentValue) });
      }
      return col;
    });
  }
  return row;
});

export default initialGridData;
