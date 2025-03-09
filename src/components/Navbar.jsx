import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="flex-col justify-between">
            <div className=" flex justify-between bg-blue-800 h-md w-full text-white font-extrabold text-lg">
                <h1>Waves Swim Academy</h1>
                <h1> E-mail- waveswimacademy@gmail.com</h1> 
            </div>
            <div className=" flex justify-around bg-gray-100 h-xl w-full text-blue-700 font-extrabold text-lg">
                <div>
                <img className='my-3' src="wavesicon.png" alt="" />
                </div>
                <div className=" flex-col my-3 ">
                    <div>
                    7550223044
                    </div>
                    <div>
                    7395999004
                    </div>
                </div>
            </div>
            <div className=" bg-blue-500 flex justify-between py-5 text-white">
                <ul className="flex justify-between w-full font-bold">
                    <li className="ml-5">
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/aboutus'>ABOUT US</Link>
                    </li>
                    <li>
                        <Link to='/courses'>SWIMMING COURSES</Link>
                    </li>
                    <li>
                        <Link to='competitive'>COMPETITIVE LEVEL</Link>
                    </li>
                    <li>
                        <Link to="gallery">GALLERY</Link>
                        
                    </li>
                    <li className="mr-5">
                        <Link to="contactus">CONTACT US</Link>
                    </li>
                    <li className="mr-5">
                        <Link to="register">REGISTER</Link>
                    </li>
                </ul>
                <div className="w-130"> 

                </div>
            </div>
        </div>
        
            
    )
}