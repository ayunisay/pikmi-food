import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import {BsPersonCircle} from "react-icons/bs";


const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="container">
                <div className="flex">
                    <div className="flex-1">
                        <div className="text-2xl flex items-center gap-12 font-bold py-8">
                            {/* <MdMenu/> */}
                            <a href="#" className="flex items-center mr-8">
                                <img src="/src/assets//img/logo.png" alt="Logo" className="h-auto w-12"/>
                            </a>
                            <a href="#" className="text-2xl hover:text-blue-500">Home</a>
                            <a href="#" className="text-2xl hover:text-blue-500">Food</a>
                            <a href="#" className="text-2xl hover:text-blue-500">Pesanan</a>
                        </div>
                    </div>
                    <div className="flex-2">
                        <div className="text-2xl flex items-center gap-12 font-bold py-11">
                            <a href="#">
                                <BsCart2 className="text-3xl"/>
                            </a>
                            <a href="#">
                                <BsPersonCircle className="text-3xl"/>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Icon untuk logo */}
                
                {/*menu section */}
                {/*icons section*/}
                {/* Mobile menu hamburg */}
            </div>
        </nav>

        {/* Mobile Sidebar section */}
    </>
  );
}

export default Navbar;