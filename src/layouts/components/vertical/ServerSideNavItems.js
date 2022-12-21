
import { useEffect, useState } from 'react'

import * as Icons from 'mdi-material-ui'
import axios from 'axios'

const ServerSideNavItems = () => {
  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    axios.get('/api/vertical-nav/data').then(response => {
      const menuArray = response.data
      const finalMenuArray = items => {
        return items.map(item => {
          if (item.icon) {
            item.icon = Icons[item.icon]
            if (item.children) {
              finalMenuArray(item.children)
            }
            return item
          }

          return item
        })
      }
      setMenuItems(finalMenuArray(menuArray))
    })
  }, [])

  return menuItems
}

export default ServerSideNavItems
