import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='mainDiv'>
      <Router>
        <Routes>
        <Route path="/:type?" element={[<Navigation />, <HomePage /> ]} /> 
        <Route path='/:type/:id?' element={[<Navigation />, <PetDetailsPage />]} />
        <Route path='/petDetailsNotFound' element={[<Navigation />,<PetDetailsNotFound />]} />
        <Route path='/search' element={[<Navigation />,<SearchPage />]} />
        <Route path="/" element={[<Navigation />, <HomePage /> ]} />  
        <Route path="/navigation" element={<Navigation />} />
       
        
       </Routes>
      </Router>
    </div>
  );
}

export default App;
