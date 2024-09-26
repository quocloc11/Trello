
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }

}

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trello.aboardBarHeight,
      gap: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      overflow: 'auto',
      paddingX: 2,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34496e' : '#1976d2'),
      borderBottom: '1px solid #00bfa5',

    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Quoc Loc"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/work"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Public/work"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="FilterListIcon"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup max={5}
          sx={{
            gap: '10px',
            '& .MuiSvgIcon-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none'
            }
          }}
        >
          <Tooltip title="Quocloc">
            <Avatar alt="Quocloc"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/412460133_663358269330962_2308163529691051646_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGTdVO5ojDBZyGUuy66_EXwGIloT0P-YKEYiWhPQ_5gob-GEBV2Jpz59HTDrqoXaefnbYpON8C-XXIWt2edO8HZ&_nc_ohc=9BdmZlmVEtIQ7kNvgFn8yDs&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=Ao5CLcVFBduJcYJTil8gIS3&oh=00_AYCVJWQvhcbT0Jyxk8NRtbNtHn5-2U7SJ4UJlrzeDc5J9A&oe=66F201F9" />
          </Tooltip>
          <Tooltip title="Quocloc">
            <Avatar alt="Quocloc"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/412460133_663358269330962_2308163529691051646_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGTdVO5ojDBZyGUuy66_EXwGIloT0P-YKEYiWhPQ_5gob-GEBV2Jpz59HTDrqoXaefnbYpON8C-XXIWt2edO8HZ&_nc_ohc=9BdmZlmVEtIQ7kNvgFn8yDs&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=Ao5CLcVFBduJcYJTil8gIS3&oh=00_AYCVJWQvhcbT0Jyxk8NRtbNtHn5-2U7SJ4UJlrzeDc5J9A&oe=66F201F9" />
          </Tooltip>
          <Tooltip title="Quocloc">
            <Avatar alt="Quocloc"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/412460133_663358269330962_2308163529691051646_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGTdVO5ojDBZyGUuy66_EXwGIloT0P-YKEYiWhPQ_5gob-GEBV2Jpz59HTDrqoXaefnbYpON8C-XXIWt2edO8HZ&_nc_ohc=9BdmZlmVEtIQ7kNvgFn8yDs&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=Ao5CLcVFBduJcYJTil8gIS3&oh=00_AYCVJWQvhcbT0Jyxk8NRtbNtHn5-2U7SJ4UJlrzeDc5J9A&oe=66F201F9" />
          </Tooltip>
          <Tooltip title="Quocloc">
            <Avatar alt="Quocloc"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/412460133_663358269330962_2308163529691051646_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGTdVO5ojDBZyGUuy66_EXwGIloT0P-YKEYiWhPQ_5gob-GEBV2Jpz59HTDrqoXaefnbYpON8C-XXIWt2edO8HZ&_nc_ohc=9BdmZlmVEtIQ7kNvgFn8yDs&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=Ao5CLcVFBduJcYJTil8gIS3&oh=00_AYCVJWQvhcbT0Jyxk8NRtbNtHn5-2U7SJ4UJlrzeDc5J9A&oe=66F201F9" />
          </Tooltip>
          <Tooltip title="Quocloc">
            <Avatar alt="Quocloc"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/412460133_663358269330962_2308163529691051646_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGTdVO5ojDBZyGUuy66_EXwGIloT0P-YKEYiWhPQ_5gob-GEBV2Jpz59HTDrqoXaefnbYpON8C-XXIWt2edO8HZ&_nc_ohc=9BdmZlmVEtIQ7kNvgFn8yDs&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=Ao5CLcVFBduJcYJTil8gIS3&oh=00_AYCVJWQvhcbT0Jyxk8NRtbNtHn5-2U7SJ4UJlrzeDc5J9A&oe=66F201F9" />
          </Tooltip>
          <Tooltip title="Quocloc">
            <Avatar alt="Quocloc"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/412460133_663358269330962_2308163529691051646_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGTdVO5ojDBZyGUuy66_EXwGIloT0P-YKEYiWhPQ_5gob-GEBV2Jpz59HTDrqoXaefnbYpON8C-XXIWt2edO8HZ&_nc_ohc=9BdmZlmVEtIQ7kNvgFn8yDs&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=Ao5CLcVFBduJcYJTil8gIS3&oh=00_AYCVJWQvhcbT0Jyxk8NRtbNtHn5-2U7SJ4UJlrzeDc5J9A&oe=66F201F9" />
          </Tooltip>
          <Tooltip title="Quocloc">
            <Avatar alt="Quocloc"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/412460133_663358269330962_2308163529691051646_n.jpg?stp=cp6_dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGTdVO5ojDBZyGUuy66_EXwGIloT0P-YKEYiWhPQ_5gob-GEBV2Jpz59HTDrqoXaefnbYpON8C-XXIWt2edO8HZ&_nc_ohc=9BdmZlmVEtIQ7kNvgFn8yDs&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=Ao5CLcVFBduJcYJTil8gIS3&oh=00_AYCVJWQvhcbT0Jyxk8NRtbNtHn5-2U7SJ4UJlrzeDc5J9A&oe=66F201F9" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar