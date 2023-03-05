import { Routes, Route, Navigate } from "react-router-dom";
import { Home, About, Contact } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <Routes>
      <Header />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Footer />
    </Routes>
  );
}

export default App;
