import React from "react"
import CheckboxComponent  from "./Components/Checkbox"
import UsageTitle from "./Components/UsageTitle"

function App() {

  return (
    <> 
     <div className="container mx-auto sm:w-100vw h-full mt-[50px] mb-[5%] ">
      <UsageTitle/>
      <CheckboxComponent/>
     </div>
    </>
  )
}

export default App
