import { MainPage } from "./pages/mainPage/MainPage";
import { ContactUsPage } from "./pages/contactUsPage/ContactUsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/testcad">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
