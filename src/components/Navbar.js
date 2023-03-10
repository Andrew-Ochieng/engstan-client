import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        {name: "Home", route: "/home"},
        {name: "About", route: "/about"},
        {name: "Products", route: "/"}
    ]

    return (
        <>
            <nav className="md:px-32 px-6 py-6 top-0 left-0 static z-[100] bg-white shadow-xl"> 
                <div className="md:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Link to='/' className="flex items-center justify-center uppercase font-semibold text-[#C70B38] md:text-2xl text-lg">
                            <img src={logo} alt="logo" className="w-6 mr-2"/>
                            Engstan Solutions
                        </Link>
                        <button onClick={() => setOpen((prev) => !prev)} className=' sm:hidden text-2xl text-gray-900'>
                            <FaBars />
                        </button>
                    </div>

                    <div className='md:flex hidden text-gray-700'>
                        <ul className="md:flex items-center md:text-lg font-medium">
                            {navLinks.map((nav) => (
                                <li className="navlink md:mx-4 mx-2 md:my-0 my-2">
                                    <Link to={nav.route}>
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                            <button className="btn md:mx-4 mx-2 md:my-0 my-2">
                                <Link to='/contact'>
                                    Contact
                                </Link>
                            </button>
                        </ul>
                    </div>
                </div>

                {/* mobile-version */}
                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0  space-y-8 py-6 px-8 w-full h-screen duration-300 ease-in-out bg-white`}>
                    <div className="flex justify-end">
                        <button onClick={() => setOpen((prev) => !prev)} className="sm:hidden text-2xl text-gray-900 text-right">
                            <FaTimes />
                        </button> 
                    </div>
                    <ul className="flex flex-col items-center text-base font-medium space-y-8">
                        {navLinks.map((nav) => (
                            <li onClick={() => setOpen((prev) => !prev)} className="navlink md:mx-4 mx-2 md:my-0 my-2">
                                <Link to={nav.route}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                        <button onClick={() => setOpen((prev) => !prev)} className="btn md:mx-4 mx-2 md:my-0 my-2">
                            <Link to='/contact'>
                                Contact
                            </Link>
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    )
}
 
export default Navbar;