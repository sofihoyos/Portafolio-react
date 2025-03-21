import { NavLink } from "react-router-dom"

export const Experience = () => {
  return (
    <section className="flex flex-col place-items-center my-8">
      <h1 className="font-bold text-5xl "> MIS PROYECTOS</h1>
      <div className="w-85 h-55 text-center py-6 my-6 px-3 shadow-lg shadow-gray-500 rounded-lg border-1 border-gray-300">
        <h1 className="py-0.5 font-bold">REPRODUCTOR DE MUSICA</h1>
        <p>Este proyecto es un reproductor de música desarrollado con JavaScript, HTML y CSS. Permite a los usuarios reproducir, pausar, cambiar de pista y ajustar el volumen de canciones.</p>
        <button className="w-32  h-9 bg-fuchsia-500 rounded-lg "><NavLink to="https://reproductor-js-psi.vercel.app/">Ir al proyecto</NavLink></button>
      </div>
      <div className="w-85 h-55  text-center py-6 my-6 px-3 shadow-lg shadow-gray-500 rounded-lg border-1 border-gray-300">
        <h1 className="py-0.5 font-bold">PROYECTO ATLAS</h1>
        <p>Este proyecto es un reproductor de música desarrollado con JavaScript, HTML y CSS. Permite a los usuarios reproducir, pausar, cambiar de pista y ajustar el volumen de canciones.</p>
        <button className="w-32  h-9 bg-blue-400 rounded-lg "><NavLink to="https://reproductor-js-psi.vercel.app/">Ir al proyecto</NavLink></button>
      </div>
      <div className="w-85 h-55  text-center py-6 my-6 px-3 shadow-lg shadow-gray-500 rounded-lg border-1 border-gray-300">
        <h1 className="py-0.5 font-bold">QUICK WORDS</h1>
        <p>Este proyecto es un reproductor de música desarrollado con JavaScript, HTML y CSS. Permite a los usuarios reproducir, pausar, cambiar de pista y ajustar el volumen de canciones.</p>
        <button className="w-32  h-9 bg-green-400 rounded-lg"><NavLink to="https://reproductor-js-psi.vercel.app/">Ir al proyecto</NavLink></button>
      </div>
    </section>
  )
}
