import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Main from "./pages/main";
import Admin from './pages/admin';

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:category" element={<Main />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
  );
}

export default App;
