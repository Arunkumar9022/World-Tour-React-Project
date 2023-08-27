import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/page/Home";
import Category from "./component/page/Category";
import Aboutus from "./component/page/Aboutus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Category />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
