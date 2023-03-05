import {Routes, Route, Navigate} from "react-router-dom";
import { Home,About,Contact } from "./pages";

function App() {
  return (
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='*' element={<Navigate to='/'/>}/>
    </Routes>
  );
}

export default App;
