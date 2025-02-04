import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SurveyPage from './pages/Survey';
//import Footer from './pages/footer'

function App() {
  return (
    <Router>
       
      <Routes>
        <Route path="/" element={<SurveyPage />} />
      </Routes>
      
      
    </Router>
  );
}

export default App;
