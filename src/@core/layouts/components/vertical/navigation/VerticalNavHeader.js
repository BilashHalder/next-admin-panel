// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Icons
import Close from 'mdi-material-ui/Close'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingRight: theme.spacing(4),
  justifyContent: 'space-between',
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)({
  fontWeight: 700,
  lineHeight: 1.2,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
})

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    menuUnlockedIcon: userMenuUnlockedIcon,
    verticalNavMenuBranding: userVerticalNavMenuBranding
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const { skin, direction, navCollapsed } = settings
  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const svgFillSecondary = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return `rgba(${theme.palette.customColors.dark}, 0.68)`
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return `rgba(${theme.palette.customColors.light}, 0.68)`
    } else {
      return theme.palette.text.secondary
    }
  }

  const svgFillDisabled = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return `rgba(${theme.palette.customColors.dark}, 0.38)`
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return `rgba(${theme.palette.customColors.light}, 0.38)`
    } else {
      return theme.palette.text.disabled
    }
  }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userVerticalNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 40) / 8
      }
    } else {
      return 5.5
    }
  }

  const svgRotationDeg = () => {
    if (navCollapsed) {
      if (direction === 'rtl') {
        if (navHover) {
          return 0
        } else {
          return 180
        }
      } else {
        if (navHover) {
          return 180
        } else {
          return 0
        }
      }
    } else {
      if (direction === 'rtl') {
        return 180
      } else {
        return 0
      }
    }
  }

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft() }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width={60} height={40} viewBox="0 0 611.000000 409.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,409.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M3905 3947 c-77 -45 -170 -100 -208 -122 -56 -33 -69 -45 -77 -75
-12 -49 -31 -422 -37 -765 l-6 -290 87 82 c118 112 161 136 255 143 73 5 75 6
82 35 4 17 12 127 18 245 7 118 20 341 31 495 23 334 23 335 8 335 -7 0 -76
-37 -153 -83z"/>
<path d="M3360 3640 c-227 -124 -257 -144 -268 -182 -6 -18 -15 -154 -22 -303
-7 -148 -18 -373 -25 -500 -7 -126 -11 -232 -9 -234 2 -3 27 -4 54 -3 75 1
151 41 236 122 41 39 80 70 88 70 8 0 23 8 35 18 24 19 24 15 55 582 31 543
30 510 15 510 -8 0 -79 -36 -159 -80z"/>
<path d="M2770 3304 c-107 -58 -201 -112 -209 -119 -17 -17 -27 -123 -37 -410
-11 -304 -11 -320 3 -318 114 23 189 10 256 -43 46 -37 97 -45 133 -20 19 14
22 31 33 228 6 117 16 287 21 378 15 251 16 403 5 406 -5 2 -98 -44 -205 -102z"/>
<path d="M4158 2975 c-14 -27 -43 -69 -63 -93 -36 -42 -123 -108 -131 -100 -2
3 7 20 21 38 14 19 25 38 25 42 0 4 -33 8 -72 8 -102 -1 -144 -22 -242 -125
-67 -69 -98 -93 -181 -137 -66 -34 -124 -75 -172 -119 -52 -49 -91 -75 -145
-97 -143 -60 -353 -80 -409 -39 -13 10 -39 29 -58 42 -46 34 -100 32 -192 -5
-162 -67 -236 -140 -353 -346 -43 -76 -100 -166 -126 -199 -25 -33 -59 -85
-74 -115 -59 -117 -62 -119 -245 -170 -94 -26 -124 -31 -169 -25 -91 11 -58
-15 59 -48 57 -16 126 -37 152 -48 86 -35 138 -4 216 129 22 38 60 89 84 114
50 50 53 57 62 150 6 57 15 82 73 185 109 193 190 256 309 239 58 -8 63 -12
34 -32 -80 -57 -177 -142 -215 -190 -88 -113 -126 -222 -126 -364 l0 -79 -53
-34 c-62 -40 -77 -67 -107 -188 -12 -46 -30 -120 -41 -164 -11 -44 -31 -112
-45 -152 -14 -42 -24 -94 -24 -127 l0 -56 44 0 c24 0 58 3 75 6 37 8 39 22 15
113 -14 55 -14 67 0 114 8 28 33 88 55 133 l39 81 98 48 c133 65 212 143 272
268 23 49 47 85 52 82 6 -3 10 -24 10 -46 0 -21 1 -39 3 -39 1 0 112 -20 247
-45 388 -72 481 -87 486 -83 2 3 -1 29 -6 59 -6 30 -18 122 -26 204 -8 83 -22
179 -30 215 -14 62 -11 120 6 120 13 0 45 -162 71 -355 16 -119 49 -240 94
-345 89 -205 97 -248 71 -374 -19 -93 -21 -207 -4 -224 17 -17 109 -15 136 4
29 20 29 60 -4 226 -24 118 -25 139 -15 183 27 109 25 137 -17 287 -22 79 -44
158 -47 177 -11 53 10 30 56 -62 23 -45 50 -92 62 -105 30 -32 73 -28 137 13
68 44 119 47 155 10 32 -31 31 -56 -1 -136 -42 -104 -70 -152 -109 -189 -44
-42 -85 -118 -85 -159 0 -46 25 -64 82 -59 74 8 121 62 149 174 18 71 61 172
109 254 40 68 43 78 51 183 8 97 7 113 -8 129 -9 10 -26 18 -39 18 -12 0 -30
3 -40 7 -12 5 -6 10 26 22 66 25 78 49 106 212 13 79 26 154 29 167 5 19 -3
26 -50 49 -30 15 -55 33 -55 40 0 7 2 13 5 13 2 0 67 -28 142 -62 128 -58 143
-62 210 -63 90 0 113 18 120 92 4 40 -1 58 -27 107 -47 88 -59 128 -80 266
-10 69 -18 125 -17 126 1 0 57 8 124 17 146 20 186 35 213 79 24 40 25 66 4
96 l-16 23 -22 -33 c-39 -59 -57 -62 -220 -33 -80 14 -173 32 -208 40 -100 23
-126 21 -146 -16 -45 -82 -96 -149 -133 -173 -22 -15 -44 -25 -47 -22 -3 4 15
28 40 54 91 95 99 111 96 194 l-3 73 -27 -50z"/>
<path d="M2487 1480 c-70 -74 -111 -126 -121 -153 -8 -23 -32 -87 -52 -142
-46 -127 -52 -163 -28 -193 21 -26 84 -43 126 -35 15 3 28 7 28 8 0 1 -7 19
-15 38 -19 46 -19 97 0 172 28 108 56 169 96 206 l38 36 118 7 c109 6 316 28
407 42 l38 6 -41 19 c-39 17 -331 80 -439 95 l-48 6 -107 -112z"/>
<path d="M243 699 c-17 -5 -43 -23 -58 -41 l-26 -31 3 -172 c3 -156 5 -175 23
-195 37 -42 75 -50 229 -50 133 0 146 2 156 19 7 13 7 28 0 45 l-10 26 -135 0
c-75 0 -145 5 -156 10 -17 10 -19 23 -19 150 0 162 -1 160 102 160 68 0 88 10
88 45 0 12 -5 26 -12 33 -14 14 -137 15 -185 1z"/>
<path d="M3985 699 c-77 -24 -85 -46 -85 -244 0 -188 5 -203 71 -229 54 -22
287 -23 329 -1 58 30 70 58 70 166 0 87 -2 99 -19 109 -51 27 -71 -1 -71 -99
0 -46 -5 -82 -12 -89 -8 -8 -53 -12 -135 -12 -158 0 -156 -2 -151 169 2 78 7
124 15 132 7 7 41 15 75 17 35 2 69 9 76 14 15 13 16 50 0 66 -14 14 -119 15
-163 1z"/>
<path d="M662 585 c-18 -8 -37 -26 -42 -40 -6 -15 -10 -91 -10 -170 0 -117 3
-146 16 -159 20 -21 30 -20 54 4 19 19 21 32 19 145 0 68 2 128 5 134 4 6 26
11 50 11 46 0 66 13 66 45 0 12 -5 26 -12 33 -16 16 -105 14 -146 -3z"/>
<path d="M925 585 c-22 -8 -41 -15 -42 -15 -1 0 -9 -13 -18 -30 -19 -36 -21
-226 -3 -265 18 -40 76 -65 152 -65 66 0 76 6 76 50 0 26 -30 40 -87 40 -27 0
-54 5 -61 12 -7 7 -12 44 -12 95 0 101 2 103 132 103 100 0 118 -7 118 -47 0
-21 -4 -22 -97 -25 l-98 -3 0 -30 0 -30 135 0 135 0 3 74 c3 85 -10 115 -63
137 -46 19 -216 18 -270 -1z"/>
<path d="M1363 581 c-23 -11 -46 -28 -52 -39 -6 -12 -11 -74 -11 -140 0 -103
3 -123 20 -144 30 -39 67 -49 171 -46 l94 3 3 28 c6 48 -11 57 -102 57 -50 0
-87 5 -94 12 -7 7 -12 44 -12 95 0 102 2 103 139 103 89 0 101 -2 101 -17 5
-270 4 -264 24 -279 25 -18 31 -18 51 2 14 14 16 39 13 175 -4 209 1 203 -176
207 -108 2 -133 0 -169 -17z"/>
<path d="M1939 446 c-97 -85 -179 -162 -183 -171 -3 -10 0 -28 9 -41 15 -24
17 -24 205 -24 174 0 190 2 199 18 14 27 2 61 -23 67 -11 3 -70 6 -131 8
l-110 2 133 113 c72 63 132 121 132 129 0 25 -20 53 -38 53 -10 0 -97 -69
-193 -154z"/>
<path d="M2227 593 c-4 -3 -7 -89 -7 -189 0 -171 1 -184 19 -194 25 -13 27
-13 45 6 13 13 16 44 16 184 0 93 -3 175 -6 184 -6 16 -54 22 -67 9z"/>
<path d="M2415 581 c-45 -20 -65 -53 -65 -106 0 -64 71 -69 86 -7 4 15 12 30
18 34 6 4 52 8 102 8 92 0 114 -8 114 -41 0 -21 26 -49 45 -49 22 0 45 30 45
58 0 40 -36 91 -75 108 -52 21 -219 19 -270 -5z"/>
<path d="M2885 585 c-22 -8 -41 -15 -43 -15 -2 0 -10 -16 -18 -35 -15 -37 -21
-290 -6 -311 13 -21 49 -25 66 -9 13 14 16 41 16 150 0 112 2 134 16 139 29
11 199 7 212 -6 8 -8 12 -55 12 -145 0 -122 2 -133 20 -143 14 -8 26 -8 40 0
19 10 20 21 20 164 0 175 -7 193 -78 214 -54 16 -208 14 -257 -3z"/>
<path d="M3365 589 c-72 -22 -85 -51 -85 -184 0 -72 5 -115 14 -134 22 -41 79
-63 156 -59 63 3 65 4 68 31 5 44 -13 57 -77 57 -31 0 -62 5 -69 12 -7 7 -12
44 -12 95 0 101 2 103 132 103 100 0 118 -7 118 -47 0 -21 -4 -22 -97 -25
l-98 -3 0 -30 0 -30 135 0 135 0 3 74 c3 85 -10 115 -63 137 -39 16 -211 18
-260 3z"/>
<path d="M4463 585 c-17 -7 -36 -22 -42 -34 -7 -11 -11 -83 -11 -175 0 -143 2
-156 19 -166 24 -12 48 -4 61 21 6 10 10 76 10 148 l0 131 48 0 c52 0 72 12
72 45 0 12 -5 26 -12 33 -16 16 -105 15 -145 -3z"/>
<path d="M4712 580 c-46 -21 -62 -48 -62 -105 0 -24 6 -38 20 -45 28 -15 60 4
60 35 0 35 27 45 127 45 95 0 113 -8 113 -47 0 -26 31 -46 55 -37 23 9 33 42
24 82 -16 71 -61 92 -204 92 -67 0 -101 -5 -133 -20z"/>
<path d="M5124 587 c-2 -7 -3 -84 -2 -171 l3 -159 28 -21 c26 -19 42 -21 173
-21 l144 0 27 28 c28 27 28 30 31 168 4 173 1 189 -37 189 -16 0 -33 -6 -39
-13 -7 -8 -13 -69 -14 -148 l-3 -134 -115 0 -115 0 -2 125 c-4 162 -6 170 -44
170 -16 0 -32 -6 -35 -13z"/>
<path d="M5663 589 c-17 -5 -41 -21 -53 -36 -19 -25 -20 -36 -18 -237 l3 -211
23 -3 c48 -7 52 7 52 199 0 148 3 180 16 193 12 12 37 16 109 16 118 0 125 -5
125 -101 0 -105 -4 -109 -105 -109 -63 0 -87 -4 -99 -16 -19 -18 -20 -28 -6
-55 9 -17 22 -19 101 -19 163 0 189 27 189 195 0 118 -11 153 -57 175 -34 17
-234 23 -280 9z"/>
<path d="M2357 374 c-11 -12 -8 -77 6 -104 22 -44 70 -60 184 -60 125 0 174
16 197 65 31 64 16 105 -36 105 -24 0 -30 -5 -34 -30 -10 -46 -23 -51 -130
-48 l-97 3 -12 35 c-9 28 -17 36 -41 38 -16 2 -33 0 -37 -4z"/>
<path d="M4654 369 c-12 -20 -6 -80 12 -106 25 -39 72 -53 184 -53 154 0 205
31 198 122 -3 42 -4 43 -38 43 -30 0 -36 -4 -38 -25 -7 -45 -18 -50 -122 -50
-104 0 -115 5 -122 50 -2 20 -10 26 -35 28 -17 2 -34 -2 -39 -9z"/>
</g>
</svg>
            <HeaderTitle variant='h6' sx={{ ...menuCollapsedStyles, ...(navCollapsed && !navHover ? {} : { ml: 2 }) }}>
              {themeConfig.templateName}
            </HeaderTitle>
          </StyledLink>
        </Link>
      )}

      {hidden ? (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={toggleNavVisibility}
          sx={{ p: 0, backgroundColor: 'transparent !important' }}
        >
          <Close fontSize='small' />
        </IconButton>
      ) : (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={() => saveSettings({ ...settings, navCollapsed: !navCollapsed })}
          sx={{ p: 0, color: 'text.primary', backgroundColor: 'transparent !important' }}
        >
          {userMenuLockedIcon && userMenuUnlockedIcon ? (
            navCollapsed ? (
              userMenuUnlockedIcon
            ) : (
              userMenuLockedIcon
            )
          ) : (
            <Box
              width={22}
              fill='none'
              height={22}
              component='svg'
              viewBox='0 0 22 22'
              xmlns='http://www.w3.org/2000/svg'
              sx={{
                transform: `rotate(${svgRotationDeg()}deg)`,
                transition: 'transform .25s ease-in-out .35s'
              }}
            >
              <path
                fill={svgFillSecondary()}
                d='M11.4854 4.88844C11.0082 4.41121 10.2344 4.41121 9.75716 4.88844L4.51029 10.1353C4.03299 10.6126 4.03299 11.3865 4.51029 11.8638L9.75716 17.1107C10.2344 17.5879 11.0082 17.5879 11.4854 17.1107C11.9626 16.6334 11.9626 15.8597 11.4854 15.3824L7.96674 11.8638C7.48943 11.3865 7.48943 10.6126 7.96674 10.1353L11.4854 6.61667C11.9626 6.13943 11.9626 5.36568 11.4854 4.88844Z'
              />
              <path
                fill={svgFillDisabled()}
                d='M15.8683 4.88844L10.6214 10.1353C10.1441 10.6126 10.1441 11.3865 10.6214 11.8638L15.8683 17.1107C16.3455 17.5879 17.1193 17.5879 17.5965 17.1107C18.0737 16.6334 18.0737 15.8597 17.5965 15.3824L14.0779 11.8638C13.6005 11.3865 13.6005 10.6126 14.0779 10.1353L17.5965 6.61667C18.0737 6.13943 18.0737 5.36568 17.5965 4.88844C17.1193 4.41121 16.3455 4.41121 15.8683 4.88844Z'
              />
            </Box>
          )}
        </IconButton>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
