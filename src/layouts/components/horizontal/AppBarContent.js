// ** MUI Imports
import Box from '@mui/material/Box'

import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'

const AppBarContent = props => {
  // ** Props
  const { hidden, settings, saveSettings } = props

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <NotificationDropdown settings={settings} />
      <UserDropdown settings={settings} />
    </Box>
  )
}

export default AppBarContent
