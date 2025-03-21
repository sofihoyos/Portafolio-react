import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header className="w-screen">
      <nav className="flex w-screen">
        <div className="w-full"><NavLink to="/"> Sofia Hoyos</NavLink></div>
        <ul className="flex flex-row w-full justify-between">
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/studies">Studies</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="*">Links Rotos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
