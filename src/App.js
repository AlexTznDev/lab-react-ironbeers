import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import AddNewBeer from "./components/AddNewBeer";
import RandomBeer from "./components/RandomBeer";

import Home from "./components/Home";
import DetailsBeer from "./components/DetailsBeer";
import AllBeersContext from "./components/AllBeersContext";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<AddNewBeer />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:id" element={<DetailsBeer />} />
        <Route path="/beersContext" element={<AllBeersContext />} />
      </Routes>

    </div>
  );
}

export default App;
