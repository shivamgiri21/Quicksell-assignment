import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import AppWrapper from './AppWrapper';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';


const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;
