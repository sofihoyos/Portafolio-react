import { NavLink } from "react-router-dom"
import { MenuHamburguer } from "../MenuHamburguer/MenuHamburguer"

export const Header = () => {
  return (
    <header className="w-screen">
      <nav className="flex w-screen">
        <div className="p-5 w-full text-2xl"><NavLink to="/"> SOFIA HOYOS</NavLink></div>
        <ul className="hidden p-5 text-2xl lg:flex w-full justify-around">
          <li><NavLink to="/profile">PERFIL </NavLink></li>
          <li><NavLink to="/studies">ESTUDIOS</NavLink></li>
          <li><NavLink to="/experience">EXPERIENCIA</NavLink></li>
        </ul>

        <MenuHamburguer />
        
      </nav>
    </header>
  )
}
