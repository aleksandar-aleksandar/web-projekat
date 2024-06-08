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
import { Error404 } from "./pages/Error404";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [festivali, setFestivali] = useState({});
  const [organizatori, setOrganizatori] = useState({});
  const [korisnici, setKorisnici] = useState({});
  const firebaseUrl = 'https://projekatwd-bd6c7-default-rtdb.europe-west1.firebasedatabase.app';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const festivalsResponse = await fetch(`${firebaseUrl}/festivali.json`);
        if (!festivalsResponse.ok) throw new Error('Failed to fetch festivals');
        const festivalsData = await festivalsResponse.json();
        setFestivali(festivalsData);

        const organizatoriResponse = await fetch(`${firebaseUrl}/organizatoriFestivala.json`);
        if (!organizatoriResponse.ok) throw new Error('Failed to fetch organizers');
        const organizatoriData = await organizatoriResponse.json();
        setOrganizatori(organizatoriData);

        const korisniciResponse = await fetch(`${firebaseUrl}/korisnici.json`);
        if (!korisniciResponse.ok) throw new Error('Failed to fetch users');
        const korisniciData = await korisniciResponse.json();
        setKorisnici(korisniciData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="App">

      <Router>
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home festivali={festivali} organizatori={organizatori} searchQuery={searchQuery} />} />
          <Route path="/festivals" element={<Festivals festivali={festivali} organizatori={organizatori} searchQuery={searchQuery} />} />
          <Route path="/organizator/:id" element={<OrganizatorDetalji festivali={festivali} organizatori={organizatori} />} />
          <Route path="/festival/:id1/:id2" element={<FestivalDetalji festivali={festivali} organizatori={organizatori} />} />
          <Route path="/add-new-organizer" element={<AddOrganizer firebaseUrl={firebaseUrl}/>} />
          <Route path="/add-new-festival/:id" element={<AddFestival festivali={festivali} organizatori={organizatori} firebaseUrl = {firebaseUrl} setFestivali = {setFestivali}/>} />
          <Route path="/edit-organizator/:id" element={<EditOrganizer festivali={festivali} organizatori={organizatori} firebaseUrl = {firebaseUrl} setFestivali = {setFestivali} setOrganizatori={setOrganizatori}/>} />
          <Route path="/edit-festival/:id1/:id2" element={<EditFestival festivali={festivali} organizatori={organizatori} firebaseUrl={firebaseUrl}/>} />
          <Route path="/*" element={<Error404/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
