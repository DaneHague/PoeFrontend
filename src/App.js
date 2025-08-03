import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import Header from "./components/Header";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
          </Routes>
      </Router>
  );
}

export default App;
