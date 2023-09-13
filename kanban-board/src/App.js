import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './Components/Home';
import AppWrapper from './AppWrapper';


const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;
