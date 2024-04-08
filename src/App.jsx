import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Components/Header/header.jsx';
import Footer from '../src/Components/Footer/footer.jsx';
import Home from '../src/Components/Home/home.jsx';
import Activities from '../src/Components/Activities/activities.jsx';
import Events from '../src/Components/Events/events.jsx';
import Members from '../src/Components/Members/members.jsx';
import Gallery from '../src/Components/Gallery/gallery.jsx';
import Contact from '../src/Components/Contact/contact.jsx';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
