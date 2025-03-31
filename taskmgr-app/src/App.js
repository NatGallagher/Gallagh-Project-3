import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import ContactUs from "./components/ContactUs"

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
