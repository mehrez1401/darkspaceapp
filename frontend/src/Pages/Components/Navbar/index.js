import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus,faMagnifyingGlass,
 } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return(
        <>
        <div className="navbar">

        
        <div className="navbar_left"> 
        <b>DARK SPACE</b>
        </div>
        
        <div className="navbar_right">

            <div className="navbar_profil_search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="small gray" />
                <input type ="text" placeholder="Search..."/>

            </div>

            <button className="navbar_profil_button">
            <FontAwesomeIcon icon={faSquarePlus} />{" "}
            Create
            </button>
            <div className="navbar_profil_image">
            <img src="https://images.pexels.com/photos/17619622/pexels-photo-17619622/free-photo-of-noir-et-blanc-homme-veste-chapeau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
        </div>

        </div>
        </>
    );
};
export default Navbar;