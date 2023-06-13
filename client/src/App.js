
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/aboutMePage/AboutMe";
import Contact from "./pages/contactPage/Contact";
import Portfolio from "./pages/portfolioPage/Portfolio";
import PricesList from "./pages/priceListPage/PricesList";
import SpecialOffer from "./pages/SpecialOfferPage/SpecialOffer";
import Home from "./pages/homePage/Home";
import BusinessConditions from "./pages/businessConditionsPage/BusinessConditions";
import PhotographyInfo from "./pages/photographyInfoPage/PhotographyInfo";
import Blog from "./pages/blogPage/Blog";
import PortfolioPictures from "./components/portfolioPictures/Pictures";
import Error from "./pages/errorPage/Error";
import SharedLayout from "./pages/SharedLayout";

const App = () => {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} >
          <Route path=":categoryName" element={<PortfolioPictures />} />
        </Route>
        <Route path="/noviky" element={<SpecialOffer />} />
        <Route path="/cenik" element={<PricesList />} />
        <Route path="/o-mne" element={<AboutMe />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/obchodni-podminky" element={<BusinessConditions />} />
        <Route path="/informace-k-foceni" element={<PhotographyInfo />} />
        <Route path="/clanky" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
};

export default App;