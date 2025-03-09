import { Menu, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function NewNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <Link to="/competitive/lts" className="w-full block">
            LEARN TO SWIM PROGRAMS
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/competitive/onemonth" className="w-full block">
            ONE MONTH COURSE
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/competitive/threemonth" className="w-full block">
              THREE MONTH COURSE
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/competitive/sixmonth" className="w-full block">
            SIX MONTH COURSE
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/competitive/strokeschool" className="w-full block">
            STROKE SCHOOL
            </Link>
          </MenuItem>
        </Menu>
        <div className="flex justify-between w-300">
        <ul className="flex justify-between w-full font-bold ">
            <li className="ml-5">
                <Link to='/'>HOME</Link>
            </li>
            <li>
                <Link to='/aboutus'>ABOUT US</Link>
            </li>
            <li className='text-white font-extrabold px-4 rounded' onClick={handleClick}>
                SWIMMING COURSES
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
        </div>

       

      </div>
      {/* Website Title on the Right */}
    </nav>
  );
}

export default NewNavbar;
