import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import "./styles/app.css"
import OrganizatorDetalji from "./pages/OrganizatorDetalji";
import FestivalDetalji from "./pages/FestivalDetalji";
import Festivals from "./pages/Festivals";
import AddOrganizer from "./pages/AddOrganizer";
import AddFestival from "./pages/AddFestival";
import Footer from "./components/Footer";
import EditFestival from "./pages/EditFestival";
import EditOrganizer from "./pages/EditOrganizer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [festivali, setFestivals] = useState([]);
  const [organizatori, setOrganizatori] = useState([]);
  const firebaseUrl = 'https://projekatwd-bd6c7-default-rtdb.europe-west1.firebasedatabase.app';

  useEffect(() => {
    // Fetch festivals
    fetch(`${firebaseUrl}/festivals.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch festivals');
        }
        return response.json();
      })
      .then(data => {
        setFestivals(data);
      })
      .catch(error => {
        console.error('Error fetching festivals:', error);
      });

    // Fetch organizers
    fetch(`${firebaseUrl}/organizatori.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch organizers');
        }
        return response.json();
      })
      .then(data => {
        setOrganizatori(data);
      })
      .catch(error => {
        console.error('Error fetching organizers:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="App">

      <Router>
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home festivali={festivali} organizatori={organizatori} searchQuery={searchQuery} />} />
          <Route path="/festivals" element={<Festivals festivali={festivali} organizatori={organizatori} searchQuery={searchQuery} />} />
          <Route path="/organizator/:id" element={<OrganizatorDetalji festivali={festivali} organizatori={organizatori} />} />
          <Route path="/festival/:id" element={<FestivalDetalji festivali={festivali} organizatori={organizatori} />} />
          <Route path="/add-new-organizer" element={<AddOrganizer />} />
          <Route path="/add-new-festival" element={<AddFestival />} />
          <Route path="/edit-organizator/:id" element={<EditOrganizer festivali={festivali} organizatori={organizatori} />} />
          <Route path="/edit-festival/:id" element={<EditFestival festivali={festivali} organizatori={organizatori} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
