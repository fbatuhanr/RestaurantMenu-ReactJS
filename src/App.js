import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import {Container} from "react-bootstrap";

import Home from "./pages/home";
import Menu from "./pages/menu";

import Header from "./components/header/header";

function App() {
  return (
  <Router>
    <Container className="restaurant-menu py-3">

        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu/:menuType" element={<Menu />} />
        </Routes>

    </Container>
  </Router>
  );
}

export default App;
