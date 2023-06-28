
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './components/Page1/index';
import Page2 from './components/Page2/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;





