import { NavLink } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
    <hr className="text-gray-600 mx-10"/>
    <footer className="bottom-0  w-screen ">
      <nav className="flex w-screen flex-col items-center   2xl:flex-row 2xl:content-center">
        <ul className="flex flex-row w-full justify-center py-6 ">
          <li><NavLink to="https://github.com/sofihoyos"><FaGithub className="w-16 h-16 mx-3  2xl:w-20 2xl:h-20"/> </NavLink></li>
          <li><NavLink to="https://www.linkedin.com/in/sofia-hoyos-940029357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedin className="w-16 h-16 mx-3 text-blue-950  2xl:w-20 2xl:h-20" /> </NavLink></li>
        </ul>
        <p className="m-4 2x:m--2">&copy; 2025 Sofia Hoyos. <br /> Todos los derechos reservados.</p>
      </nav>
    </footer>
    </>
    
  )
}
