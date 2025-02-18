import Container from '@mui/material/Container'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import AppBar from '~/components/AppBar/AppBar'
import { useEffect } from 'react'
import PageLoadingSpinner from '~/components/Loading/PageLoadingSpinner'
import {
  updateBoardDetailsAPI,
  updateColumnDetailsAPI, moveCardToDifferentColumnAPI
} from '~/apis'
import { cloneDeep } from 'lodash'
import {
  fetchBoardDetailsAPI,
  updateCurrentActiveBoard,
  selectCurrentActiveBoard
}
  from '~/redux/activeBoard/activeBoardSlide'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Board() {
  const dispatch = useDispatch()
  //const [board, setBoard] = useState(null)
  const board = useSelector(selectCurrentActiveBoard)
  const { boardId } = useParams()
  console.log('boardId', boardId)
  useEffect(() => {
    // tam thoi fix cung hoac dung react-router-dom
    //const boardId = '671089222737fc3f008d25ee'

    dispatch(fetchBoardDetailsAPI(boardId))
    // fetchBoardDetailsAPI(boardId).then((board) => {
    //   board.columns = mapOrder(board.columns, board.columnOrderIds, '_id')
    //   board.columns.forEach(column => {
    //     if (isEmpty(column.cards)) {
    //       column.cards = [generatePlaceholderCard(column)]
    //       column.cardOrderIds = [generatePlaceholderCard(column)._id]
    //     } else {
    //       column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
    //     }
    //   })
    //   setBoard(board)
    // })
  }, [dispatch, boardId])


  const moveColumns = (dndOrderedColumns) => {
    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    //setBoard(newBoard)
    dispatch(updateCurrentActiveBoard(newBoard))

    updateBoardDetailsAPI(newBoard._id, { columnOrderIds: newBoard.columnOrderIds })
  }
  const moveCardIntheSameColumn = (dndOrderedCards, dndOrderedCardsIds, columnId) => {
    //const newBoard = { ...board }
    const newBoard = cloneDeep(board)

    const columnToUpdate = newBoard.columns.find(column => column._id === columnId)
    if (columnToUpdate) {
      columnToUpdate.cards = dndOrderedCards
      columnToUpdate.cardOrderIds = dndOrderedCardsIds
    }
    // setBoard(newBoard)
    dispatch(updateCurrentActiveBoard(newBoard))

    updateColumnDetailsAPI(columnId, { cardOrderIds: dndOrderedCardsIds })
  }
  const moveCardToDifferentColumn = (currentCardId, prevColumnId, nextColumnId, dndOrderedColumns) => {

    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    //setBoard(newBoard)
    dispatch(updateCurrentActiveBoard(newBoard))

    let prevCardOrderIds = dndOrderedColumns.find(c => c._id === prevColumnId)?.cardOrderIds
    if (prevCardOrderIds[0].includes('placeholder-card')) prevCardOrderIds = []
    moveCardToDifferentColumnAPI({
      currentCardId,
      prevColumnId,
      prevCardOrderIds,
      nextColumnId,
      nextCardOrderIds: dndOrderedColumns.find(c => c._id === nextColumnId)?.cardOrderIds
    })
  }

  if (!board) {
    return <PageLoadingSpinner caption='Loading Board...' />
  }
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent
        board={board}

        // createNewColumn={createNewColumn}
        //createNewCard={createNewCard}
        //deleteColumnDetails={deleteColumnDetails}

        moveColumns={moveColumns}
        moveCardIntheSameColumn={moveCardIntheSameColumn}
        moveCardToDifferentColumn={moveCardToDifferentColumn}
      />
    </Container>
  )
}

export default Board