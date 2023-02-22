import MarchTimeCalc from "./pages/MarchTimeCalc/MarchTimeCalc";
import { HashRouter } from 'react-router-dom';

function App() {
  return (
        <HashRouter basename={"/"}>
          <div style={{backgroundColor: '#2C394B'}}>
            <MarchTimeCalc/>
          </div>
        </HashRouter>
  );
}

export default App;
