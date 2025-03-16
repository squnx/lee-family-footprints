import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import Grand from './pages/Grand';
import Jin from './pages/Jin';
import Lee from './pages/Lee';
import Kim from './pages/Kim';
import Misc from './pages/Misc';
import ScrollToTop from './components/ScrollToTop';

const TRACKING_ID = "G-27VVMWXVF0"; // Ensure this ID is correct

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics only once
    ReactGA.initialize(TRACKING_ID);

    // Track page views
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
    <ScrollToTop /> {/* To ensure that the page scrolls to the top when navigating between routes */}
    <Analytics /> {/* Ensures analytics runs on every page change */}
      <div id="top" className="App app-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<Story />} />
            <Route path="/grand-parents" element={<Grand />} />
            <Route path="/jin-family" element={<Jin />} />
            <Route path="/lee-family" element={<Lee />} />
            <Route path="/kim-family" element={<Kim />} />
            {/* <Route path="/america" element={<America />} /> */}
            <Route path="/misc" element={<Misc />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
