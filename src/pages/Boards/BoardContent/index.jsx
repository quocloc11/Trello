
import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34496e' : '#1976d2'),

      width: '100%',
      display: 'flex',
      alignItems: 'center',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.aboardBarHeight})`
    }}>
      board content
    </Box>
  )
}

export default BoardContent