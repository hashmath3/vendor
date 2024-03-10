import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Cuisines from "./pages/cuisines";
import Occasions from "./pages/occasion";
import Inquiries from "./pages/inquries";
import Reviews from "./pages/reviews";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cuisines' element={<Cuisines />} />
          <Route path='/occasions' element={<Occasions />} />
          <Route path='/inquiries' element={<Inquiries />} />
          <Route path='/reviews' element={<Reviews />} />




          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
