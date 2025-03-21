import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegCalendar } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";

export const Profile = () => {
  return (
    <>
    <section className="flex flex-col place-items-center my-8">
      <h1 className="font-bold text-5xl">MI PERFIL</h1>
      <div className="w-72 h-40 flex flex-col text-center rounded-lg my-5 shadow-lg shadow-fuchsia-300 border-1 border-gray-300">
        <h3 className="font-bold text-lg my-3">INFORMACION BASICA</h3>
        <p className="flex items-center gap-2 mx-3">
          <FaRegAddressCard className="text-xl text-black" /> 1092457323
        </p>
        <p className="flex items-center gap-2 mx-3">
          <MdOutlineLocalPhone className="text-xl text-black" /> 3184855999
        </p>
        <p className="flex items-center gap-2 mx-3">
          <FaRegCalendar  className="text-xl text-black" /> 25 de Marzo del 2007
        </p>
        <p className="flex items-center gap-2 mx-3">
          <HiOutlineMail className="text-xl text-black" /> sofi.hoyos.2509@gmail.com
        </p>
      </div>

      <div className="w-72 h-40 flex flex-col text-center rounded-lg my-5 shadow-lg shadow-blue-300 border-1 border-gray-300" >
        <h3 className="font-bold text-lg my-1">HABILIDADES TECNICAS</h3>
        <div className="grid grid-cols-3 gap-2 place-items-center my-3">
          <FaDatabase className="w-6 h-6"/>
          <FaHtml5 className="w-6 h-6"/>
          <IoLogoCss3 className="w-6 h-6"/>
          <RiJavascriptFill className="w-6 h-6"/>
          <RiTailwindCssFill className="w-6 h-6"/>
          <BiLogoTypescript className="w-6 h-6"/>
          <FaJava className="w-6 h-6"/>

        </div>
      </div>

      <div className="w-72 h-40 flex flex-col text-center rounded-lg my-5 shadow-lg shadow-blue-300 border-1 border-gray-300">
        <h3 className="font-bold text-lg my-1">HABILIDADES SOCIALES</h3>
          <p>Comunicacion Efectiva</p>
          <p>Trabajo en Equipo</p>
          <p>Trabajo en Equipo</p>
          <p>Trabajo en Equipo</p>
      </div>
    </section>
    </>
  )
}
