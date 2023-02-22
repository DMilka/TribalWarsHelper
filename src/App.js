import MarchTimeCalc from "./pages/MarchTimeCalc/MarchTimeCalc";
import { BrowserRouter, HashRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <HashRouter basename={"/"}>
          <div style={{backgroundColor: '#2C394B'}}>
            <MarchTimeCalc/>
          </div>
        </HashRouter>
      </BrowserRouter>
  );
}

export default App;
