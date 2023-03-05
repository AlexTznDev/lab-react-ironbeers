import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AllBeers() {
  const [allBeersState, setAllBeersState] = useState(null);
  const [inputBeerSearch, setinputBeerSearch] = useState(null);
  const [searchState, setsearchState] = useState("");

  useEffect(() => {
    getBeersData();
  }, []);

  const getBeersData = async () => {
    try {
      if (inputBeerSearch === null) {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setAllBeersState(response.data);
      } else {
        
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${inputBeerSearch}`
        );
        setAllBeersState(response.data);

      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlechangeSearch = (event) => {
    setsearchState(event.target.value);
  };

  const handlesubmitSearch = (event) => {
    event.preventDefault();
    setinputBeerSearch(searchState)
    getBeersData()
  };

  return (
    <div>
      <NavLink to="/">
        <Nav />
      </NavLink>
      <br />
      <form>
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          placeholder="Search beers"
          onChange={handlechangeSearch}
        />
        <button onClick={handlesubmitSearch}>search</button>
      </form>

      <div className="containerAllBeers">
        {allBeersState === null ? (
          <p>...buscando informcion</p>
        ) : (
          allBeersState.map((eachBeer) => {
            return (
              <NavLink
                key={eachBeer._id}
                to={`/beers/:${eachBeer._id}`}
                style={{ textDecoration: "none", color: "rgb(33,33,33)" }}
              >
                <div className="containerEachBeer">
                  <div className="containerImgEachBeer">
                    <img
                      src={eachBeer.image_url}
                      alt={eachBeer.name}
                      width="30px"
                    />
                  </div>

                  <div className="containerAllInformationBeer">
                    <h3>{eachBeer.name}</h3>
                    <p
                      style={{
                        textAlign: "start",
                        color: "rgb(174, 174, 174)",
                      }}
                    >
                      {eachBeer.tagline}
                    </p>
                    <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                      {eachBeer.contributed_by}
                    </p>
                  </div>
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
}

export default AllBeers;
