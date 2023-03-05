import Nav from "./Nav";
import { NavLink, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";



function AddNewBeer() {

const navigate = useNavigate()


const [nameInputState, setNameInputState] = useState("");
const [taglineInputState, setTaglineInputState] = useState("");
const [descriptionInputState, setDescriptionInputState] = useState("");
const [brewedInputState, setBrewedInputState] = useState("");
const [brewersInputState, setBrewersInputState] = useState("");
const [attenuationInputState, setAttenuationInputState] = useState(0);
const [contributedInputState, setContributedInputState] = useState("");



const handleNameChange =(event)=>{

setNameInputState(event.target.value)

}
const handleTaglineChange =(event)=>{

  setTaglineInputState(event.target.value)

}
const handleDescriptionChange =(event)=>{

  setDescriptionInputState(event.target.value)

}
const handleBrewedChange =(event)=>{

  setBrewedInputState(event.target.value)

}
const handleBrewersChange =(event)=>{

  setBrewersInputState(event.target.value)

}
const handleAttenuationChange =(event)=>{

  setAttenuationInputState(event.target.value)

}
const handleContributedChange =(event)=>{

  setContributedInputState(event.target.value)

}

const handleSubmitForm = async(event) => {

  event.preventDefault()


const newBeer ={

name : nameInputState,
tagline : taglineInputState,
description: descriptionInputState,
first_brewed: brewedInputState,
brewers_tips: brewersInputState,
attenuation_level:attenuationInputState,
contributed_by: contributedInputState

}

try {
  await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
  navigate("/beers")
} catch (error) {
  console.log(error)
}
console.log(newBeer)


}





  return (
    <div>
      <NavLink to="/">
        <Nav />
      </NavLink>

      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleNameChange}/>
          <br />
          <br />

          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" onChange={handleTaglineChange}/>
          <br />
          <br />

          <label htmlFor="description">Description</label>
          <input type="text" name="description" onChange={handleDescriptionChange}/>
          <br />
          <br />

          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" name="first_brewed" onChange={handleBrewedChange}/>
          <br />
          <br />

          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input type="text" name="brewers_tips" onChange={handleBrewersChange}/>
          <br />
          <br />

          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input type="number" name="attenuation_level" onChange={handleAttenuationChange}/>
          <br />
          <br />
      

          <label htmlFor="contributed_by">Contributed By</label>
          <input type="text" name="contributed_by" onChange={handleContributedChange}/>
          <br />
          <br />

          <button onClick={handleSubmitForm}>ADD NEW</button>
        </form>
      </div>
    </div>
  );
}

export default AddNewBeer;
