import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Personal from './Pages/Personal';
import Projects from './Pages/Projects';
import Events from './Pages/Events';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Personal />} />
      <Route path='/details' element={<Details />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/events' element={<Events />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
