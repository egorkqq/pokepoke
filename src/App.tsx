import React from "react";

import { HomePage } from "./pages";
import { Global } from "@emotion/react";
import { globalStyles } from "./utils/theme";
import { HeaderComponent as Header } from "./components/header";

const App = () => (
  <>
    <Header />
    <HomePage />
    <Global styles={globalStyles} />
  </>
);

export default App;
