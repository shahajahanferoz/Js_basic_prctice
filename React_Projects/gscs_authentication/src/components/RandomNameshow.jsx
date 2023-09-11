import { useState } from "react"
import RandomNameGenerate from "./RandomNameGenerate"


function RandomNameshow() {
    const [randomName, setRandomName] = useState("feroz")
  return (
    <div>
        {randomName}
        <RandomNameGenerate setRandomName ={setRandomName}/>
    </div>
  )
}

export default RandomNameshow