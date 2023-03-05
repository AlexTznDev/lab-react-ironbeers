import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [RandomBeerState, setRandomBeerState] = useState(null);

  useEffect(() => {
    getRandomBeerData();
  }, []);

  const getRandomBeerData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
   
      setRandomBeerState(response.data)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavLink to="/">
        <Nav />
      </NavLink>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        {RandomBeerState === null ? (
          <h2>Waiting information</h2>
        ) : (
          <div className="containerBeerDetail">
            <div className="containerImgEachBeer">
              <img
                src={RandomBeerState.image_url}
                alt={RandomBeerState.name}
                width="100px"
              />
            </div>

            <div className="containerAllInformationBeer">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>{RandomBeerState.name}</h3>
                <p
                  style={{
                    textAlign: "start",
                    color: "rgb(174, 174, 174)",
                    fontWeight: "bold",
                  }}
                >
                  {RandomBeerState.attenuation_level}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ textAlign: "start", color: "rgb(174, 174, 174)" }}>
                  {RandomBeerState.tagline}
                </p>
                <p>{RandomBeerState.first_brewed}</p>
              </div>

              <p style={{ textAlign: "start", color: "black" }}>
                {RandomBeerState.description}
              </p>
              <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                {RandomBeerState.contributed_by}
              </p>
            </div>
          </div>
        )}
        </div>
    </div>
  );
}

export default RandomBeer;
