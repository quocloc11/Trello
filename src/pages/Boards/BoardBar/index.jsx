
import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.aboardBarHeight,

      display: 'flex',
      alignItems: 'center'
    }}>
      Bard bar
    </Box>
  )
}

export default BoardBar