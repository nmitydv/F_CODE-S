import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import LandingPage from './component/LandingPage.jsx';
// import './App.css'

function App() {
  return (
    <Router> {/* Wrap your component with BrowserRouter */}
      <div>
        {/* <h1>Hii</h1> */}
        <LandingPage/>
      </div>
    </Router>
  );
}

export default App;
