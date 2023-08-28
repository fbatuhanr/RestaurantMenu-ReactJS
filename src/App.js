import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


import Header from "./components/header/header";
import Menu from "./pages/menu";
import Footer from "./components/footer/footer";

function App() {
  return (
  <Router>
    <div id="app" className="py-3">

        <Header />

        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/:category" element={<Menu />} />
        </Routes>

        <Footer />

    </div>
  </Router>
  );
}

export default App;
