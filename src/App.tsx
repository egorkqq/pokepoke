import { Global } from '@emotion/react'

import { HeaderComponent as Header } from './components/header'
import { HomePage } from './pages'
import { globalStyles } from './utils/theme'

const App = () => (
  <>
    <Header />
    <HomePage />
    <Global styles={globalStyles} />
  </>
)

export default App
