import MarchTimeCalc from "./pages/MarchTimeCalc/MarchTimeCalc";
import {  Router } from 'react-router-dom';

function App() {
  return (
      <Router>
          <div style={{backgroundColor: '#2C394B'}}>
            <MarchTimeCalc/>
          </div>
      </Router>
  );
}

export default App;
