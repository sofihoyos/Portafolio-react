import { NavLink } from "react-router-dom"
import me from "../../../assets/me.jpg";

export const Home = () => {
  return (
    <section className="w-screen  flex-col  py-4">
    
      <div className="w-full  place-content-center place-items-center py-3">
        <h1 className="text-2xl">¡HOLA!</h1>
        <h3 className="text-3xl font-bold">Soy Sofia Hoyos Grisales</h3>
        <h4 className="text-2xl">Desarrollador de Software</h4>
        <div className="flex flex-row py-3">
          <div className=" flex w-23 h-23 bg-color1 rounded-full  place-items-center justify-center m-5 font-bold text-2xl shadow-lg shadow-gray-500"><NavLink to="/profile" >Perfil</NavLink></div>
          <div className=" flex w-23 h-23 bg-color2 rounded-full  place-items-center justify-center m-5 font-bold shadow-lg shadow-gray-500"><NavLink to="/studies">Estudios</NavLink></div>
          <div className=" flex w-23 h-23 bg-color3 rounded-full  place-items-center justify-center m-5 font-bold shadow-lg shadow-gray-500"><NavLink to="/experience">Experiencia</NavLink></div>
        </div>
      </div>

      <div className="w-full place-content-center place-items-center" >
        <img 
          src={me}
          alt="Me"
          className="w-80 h-80 rounded-full my-5 shadow-lg shadow-gray-500 " 
        />
      </div>

    </section>
  )
}
