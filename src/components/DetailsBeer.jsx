import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      {beerDetailState === null ? (
        <h2>Waiting information</h2>
      ) : (
        <img
          src={beerDetailState.image_url}
          alt={beerDetailState.name}
          width="100px"
        />
      )}
    </div>
  );
}

export default DetailsBeer;
