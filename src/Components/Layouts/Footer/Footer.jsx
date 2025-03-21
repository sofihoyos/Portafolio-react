import { NavLink } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bottom-0 w-screen">
      <hr className="text-gray-600 mx-10"/>
      <nav className="flex w-screen">
        <ul className="flex flex-row w-full justify-center py-6 ">
          <li><NavLink to="https://github.com/sofihoyos"><FaGithub className="w-16 h-16 mx-3 text-gray-600"/> </NavLink></li>
          <li><NavLink to="https://www.linkedin.com/in/sofia-hoyos-940029357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FaLinkedin className="w-16 h-16 mx-3" /> </NavLink></li>
        </ul>
    </nav>
    </footer>
  )
}
