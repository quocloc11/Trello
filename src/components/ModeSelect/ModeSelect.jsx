import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LighModelIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
    // setAge(event.target.value);
  }

  return (
    <FormControl size="small" sx={{ minWidth: '120px' }}>
      <InputLabel
        id="label-select-dark-light-model"
        sx={{
          color: 'white',
          '&.Mui-focused': { color: 'white' }
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-model"
        id="select-dark-light-model"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '.MuiSvgIcon-root': { color: 'white' }

        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LighModelIcon fontSize='small' />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize='small' />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect