import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home/Home';
import Service from './components/Services/Service';
import Error from './pages/Error';
import Navbar from './components/Navbar/Navbar';
import Marketing from './components/Services/Marketing/Marketing';
import Development from './components/Services/Development/Development';
import Survey from './pages/Survey';
import Resultats from './pages/Results';
import Freelances from './pages/Freelances';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/freelances' element={<Freelances />} />
        <Route path='/results' element={<Resultats />} />
        <Route path='/services' element={<Service />}>
          <Route path='/services/developpement' element={<Development />} />
          <Route path='/services/marketing' element={<Marketing />} />
        </Route>

        <Route path='/*' element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
