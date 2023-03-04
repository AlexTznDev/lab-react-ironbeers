import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

function DetailsBeer() {
  const [beerDetailState, setbeerDetailState] = useState(null);

  const params = useParams();
  const Id = params.id.slice(1);

  useEffect(() => {
    getDataOneBeer();
  }, []);

  const getDataOneBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${Id}`
      );
      setbeerDetailState(response.data);
    } catch (error) {}
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
        {beerDetailState === null ? (
          <h2>Waiting information</h2>
        ) : (
          <div className="containerBeerDetail">
            <div className="containerImgEachBeer">
              <img
                src={beerDetailState.image_url}
                alt={beerDetailState.name}
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
                <h3>{beerDetailState.name}</h3>
                <p
                  style={{
                    textAlign: "start",
                    color: "rgb(174, 174, 174)",
                    fontWeight: "bold",
                  }}
                >
                  {beerDetailState.attenuation_level}
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
                  {beerDetailState.tagline}
                </p>
                <p>{beerDetailState.first_brewed}</p>
              </div>

              <p style={{ textAlign: "start", color: "black" }}>
                {beerDetailState.description}
              </p>
              <p style={{ fontSize: "10px", fontWeight: "bold" }}>
                {beerDetailState.contributed_by}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailsBeer;
