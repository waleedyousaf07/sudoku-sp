import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BoardUi from './content/BoardUi.view';
import DifficultyUi from './content/DifficultyUi.view';
import initialGridData, { difficulties, getParsedBoardData } from './Board.utils';
import getBoardData from './board.api';
import './Board.scss';

const Board = () => {
  const [gridData, setGridData] = useState(initialGridData);
  const [difficulty, setDifficulty] = useState(difficulties[0].value);
  const {
    data,
    isFetching,
    isLoading,
  } = useQuery(['boardData', difficulty], () => getBoardData({ difficulty }), {
    staleTime: 5000,
    onError: () => console.log('Something went wrong while fetching data'),
  });

  useEffect(() => {
    if (data?.puzzle) {
      setGridData(getParsedBoardData(data.puzzle));
    }
  }, [data]);

  return (
    <div id="board">
      <BoardUi gridData={gridData} setGridData={setGridData} />
      <DifficultyUi difficulty={difficulty} setDifficulty={setDifficulty} setGridData={setGridData} />
      {(isFetching || isLoading) && 'Fetching data...'}
    </div>
  );
};

export default Board;
