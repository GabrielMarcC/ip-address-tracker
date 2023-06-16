import { Header } from "./components/Header.jsx";
import { GlobalStyle, Screen } from "./style/Global";
import { Map } from "./components/Map.jsx";
import { InfoResult } from "./components/InfoResult";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Screen>
        <Header />
        <InfoResult />
        <Map />
      </Screen>
    </div>
  );
}

export default App;
