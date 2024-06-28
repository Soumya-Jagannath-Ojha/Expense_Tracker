import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

const theme = extendTheme({
    initialColorMode : 'light',
    useSystemColorMode : true
})

export default theme;