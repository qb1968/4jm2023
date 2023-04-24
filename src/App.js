import React from "react";
import UnderConstruction from "react-under-construction";
import "react-under-construction/build/css/index.css";


const App = () => (
  <UnderConstruction
    background={{
     backgroundColor: "black",
      textColor: "Black",
      overlay: {
        color: "#000",
        opacity: ".5",

      },
    }}
   
    description={{
      text: "We are experiencing technical difficulties. We will be back soon. ",
      style: {
        height: "10vh",
        fontSize: "40px"
      },
    }}
    
   
  />
);

export default App;
