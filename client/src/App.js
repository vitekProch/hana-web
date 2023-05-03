
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PricesList from "./pages/PricesList";
import SpecialOffer from "./pages/SpecialOffer";
import Home from "./pages/Home";


import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

const App = () => {
  const pages = <Portfolio />;

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
        <Route path="/portfolio" element={pages} />
        <Route path="/noviky" element={<SpecialOffer />} />
        <Route path="/cenik" element={<PricesList />} />
        <Route path="/o-mne" element={<AboutMe />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
};

export default App;