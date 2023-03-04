import Nav from "./Nav"
import { NavLink } from "react-router-dom";

function RandomBeer() {
  return (
    <div>
       <NavLink to="/">
        <Nav />
      </NavLink>

      Hola random Beers
    </div>
  )
}

export default RandomBeer
