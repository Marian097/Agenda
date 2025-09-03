import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Menu />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/contacts" element={<Form />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
