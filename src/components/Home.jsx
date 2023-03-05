import {  NavLink } from "react-router-dom"

import { useContext} from "react";// ! context */
import { StyleContext } from "../context/style.context";


function Home() {

const {ColorBackground, styleVarHome} = useContext(StyleContext)
console.log(ColorBackground)

console.log(useContext(StyleContext))
  return (
    <div style={styleVarHome}>

      <NavLink to="/beers">All beers</NavLink>
      <NavLink to="/random-beer">Random beer</NavLink>
      <NavLink to="/new-beer">new beer</NavLink>
      <NavLink to="/beersContext">ContextBeer</NavLink>

    </div>
  )
}

export default Home
