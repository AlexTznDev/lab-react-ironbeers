import {  NavLink } from "react-router-dom"

function Home() {
  return (
    <div>
    
      <NavLink to="/beers">All beers</NavLink>
      <NavLink to="/random-beer">Random beer</NavLink>
      <NavLink to="/new-beer">new beer</NavLink>

    </div>
  )
}

export default Home
