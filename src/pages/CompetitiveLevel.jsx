
import { Outlet } from "react-router-dom"
import NewHeader from "../components/NewHeader"

export default function CompetitiveLevel(){
  return (
    <div>
      <NewHeader background='Competitive.avif' />
      <Outlet/>
    </div>
  )
}
