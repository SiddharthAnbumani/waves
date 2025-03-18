
import { Outlet } from "react-router-dom"
import NewHeader from "../components/NewHeader"

export default function CompetitiveLevel(){
  return (
    <div>
      <NewHeader background='Competitive.avif' />
      <Outlet/>

      <h1 className="text-4xl">
        Competitive Level
      </h1>
      <p>
        Hello there this is just a git commit delete it later 
      </p>
    </div>
  )
}
