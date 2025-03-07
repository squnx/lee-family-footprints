import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import Jin from './pages/Jin';
import Lee from './pages/Lee';
import Kim from './pages/Kim';
import America from './pages/America';
import California from './pages/California';
import Korea from './pages/Korea';
import Mexico from './pages/Mexico';
import Misc from './pages/Misc';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* To ensure that the page scrolls to the top when navigating between routes */}
      <div id="top" className="App app-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<Story />} />
            <Route path="/jin-family" element={<Jin />} />
            <Route path="/lee-family" element={<Lee />} />
            <Route path="/kim-family" element={<Kim />} />
            {/* <Route path="/america" element={<America />} /> */}
            <Route path="/california" element={<California />} />
            <Route path="/korea" element={<Korea />} />
            <Route path="/mexico" element={<Mexico />} />
            <Route path="/misc" element={<Misc />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
