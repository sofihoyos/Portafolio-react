import { NavLink } from "react-router-dom"
import foto from "../../../assets/foto.jpg";

export const Home = () => {
  return (
    <section className="w-screen flex flex-col  py-4 2xl:py-15  2xl:flex-row">
    
      <div className="w-full  place-content-center place-items-center py-3 px-2">
        <h1 className="text-2xl  2xl:text-5xl">¡HOLA!</h1>
        <h3 className="text-3xl font-bold  2xl:text-4xl pt-3">Soy Sofia Hoyos Grisales</h3>
        <h4 className="text-2xl  2xl:text-4xl 2xl:pb-7 2xl:pt-3">Desarrollador de Software</h4>
        <div className="flex flex-row py-3">
          <div className=" flex w-23 h-23 bg-color1 rounded-full  place-items-center justify-center m-5 font-bold text-2xl shadow-lg shadow-gray-500 2xl:w-50 2xl:h-50 2xl:text-4xl"><NavLink to="/profile" >Perfil</NavLink></div>
          <div className=" flex w-23 h-23 bg-color2 rounded-full  place-items-center justify-center m-5 font-bold text-xl shadow-lg shadow-gray-500  2xl:w-50 2xl:h-50 2xl:text-4xl"><NavLink to="/studies">Estudios</NavLink></div>
          <div className=" flex w-23 h-23 bg-color3 rounded-full  place-items-center justify-center m-5 font-bold shadow-lg shadow-gray-500  2xl:w-50 2xl:h-50 2xl:text-4xl"><NavLink to="/experience">Experiencia</NavLink></div>
        </div>
      </div>

      <div className="w-full place-content-center place-items-center" >
        <img 
          src={foto}
          alt="Me"
          className="w-80 h-80 rounded-full my-5 shadow-lg shadow-gray-500 object-cover 2xl:w-120 2xl:h-120" 
        />
      </div>

    </section>
  )
}
