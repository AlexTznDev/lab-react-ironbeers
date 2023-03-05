import { createContext } from "react"

const StyleContext = createContext()


function StyleWrapper(props) {


const styleVarHome = {

display: "flex",
flexDirection:"row",
gap:"10px",
alignItems:"center",
justifyContent:"center",
padding:"2rem",
backgroundColor:"#3DC4FC",
color: "#fff"

}


const passedColorContext ={
    
    styleVarHome
}

  return (
<StyleContext.Provider value={passedColorContext}>
    {props.children}
</StyleContext.Provider>
  )
}

export {StyleWrapper, StyleContext }  // !enlever le defaut de  "export"
