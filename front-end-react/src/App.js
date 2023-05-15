import GlobalState from "./Contexts/GlobalState";
import { GlobalStyle } from "./GlobalStyled";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Home />
    </GlobalState>
  );
}

export default App;
