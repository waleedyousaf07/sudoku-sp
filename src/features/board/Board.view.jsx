import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import BoardUi from './content/BoardUi.view';
import DifficultyUi from './content/DifficultyUi.view';
import ValidationUi from './content/ValidationUi.view';
import initialGridData, { difficulties, getParsedBoardData } from './Board.utils';
import getValidationPayload from './content/ValidationUi.utils';
import getBoardData, { validateBoardData } from './board.api';
import './Board.scss';

const Board = () => {
  const [gridData, setGridData] = useState(initialGridData);
  const [fetchError, setFetchError] = useState('');
  const [difficulty, setDifficulty] = useState(difficulties[0].value);
  const {
    data,
    isFetching,
    isLoading,
    refetch,
  } = useQuery(['boardData', difficulty], () => getBoardData({ difficulty }), {
    staleTime: 50000,
    onError: () => setFetchError('Something went wrong while fetching data'),
  });

  const { mutate } = useMutation(validateBoardData, {
    onSuccess: () => { },
    onError: () => { },
  });

  useEffect(() => {
    if (data?.puzzle) {
      setGridData(getParsedBoardData(data.puzzle));
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [difficulty]);

  return (
    <div id="board">
      <BoardUi gridData={gridData} setGridData={setGridData} />
      <ValidationUi validationStatus="Pending" validate={() => mutate(getValidationPayload(gridData))} />
      <DifficultyUi difficulty={difficulty} setDifficulty={setDifficulty} setGridData={setGridData} />
      {(isFetching || isLoading) && 'Fetching data...'}
      {fetchError}
    </div>
  );
};

export default Board;
