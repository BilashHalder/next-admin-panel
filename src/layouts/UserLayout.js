import useMediaQuery from '@mui/material/useMediaQuery'

import Layout from 'src/@core/layouts/Layout'

import VerticalNavItems from 'src/navigation/vertical'
import HorizontalNavItems from 'src/navigation/horizontal'


import VerticalAppBarContent from './components/vertical/AppBarContent'
import HorizontalAppBarContent from './components/horizontal/AppBarContent'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

const UserLayout = ({ children }) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  
  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'))

  return (
    <Layout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      {...(settings.layout === 'horizontal'
        ? {
            horizontalNavItems: HorizontalNavItems(),
            horizontalAppBarContent: () => (
              <HorizontalAppBarContent hidden={hidden} settings={settings} saveSettings={saveSettings} />
            )
          }
        : {
            verticalNavItems: VerticalNavItems(),
            verticalAppBarContent: props => (
              <VerticalAppBarContent
                hidden={hidden}
                settings={settings}
                saveSettings={saveSettings}
                toggleNavVisibility={props.toggleNavVisibility}
              />
            )
          })}
    >
      {children}
      
    </Layout>
  )
}

export default UserLayout
