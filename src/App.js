import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Personal from './Pages/Personal';
import Projects from './Pages/Projects';
import Events from './Pages/Events';
import Details from './Pages/Details';
import Feedback from './Pages/Feedback';
import Tourism from './Projects/Tourism';
import SIH from './Events/SIH';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Personal />} />
      <Route path='/details' element={<Details />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/events' element={<Events />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='/tourism' element={<Tourism />} />
      <Route path='/sih' element={<SIH />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
