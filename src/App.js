import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Career } from './components/Career';
import { Experiences } from './components/Experiences';
import { Company } from './components/Company';
import { School } from './components/School';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="parcours" element={<Career />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="entreprise" element={<Company />} />
        <Route path="ecole" element={<School />} />
        <Route path="projets" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}