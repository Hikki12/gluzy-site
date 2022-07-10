import * as React from "react"
import { Layout } from "../components/Layout";
import { Glucometer } from "../components/Glucometer";
import { StaticImage } from "gatsby-plugin-image";


const IndexPage = () => {
  return (
    <Layout>
      <section className="w-full h-auto lg:px-16 flex flex-col justify-center items-center pt-10 pb-8">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center">
          <div className="w-full mb-5 px-5 lg:w-1/2 lg:text-end">
            <p className="text-2xl">Una nueva manera de controlar tu <b>Glucosa</b></p>
            <p className="font-bold text-end">Sin dolor, sin pinchazos.</p>
          </div>
          <div className="flex flex-col lg:justify-start w-full lg:w-1/2">
            <p className="text-gray-600 mt-4 text-center w-[400px] mb-5 text-xl">Un glucómetro no invasivo</p>
            <Glucometer/>
          </div>
        </div>
        <p className="mt-12 mb-5 uppercase font-bold text-2xl text-center">Características</p>
        <div className="flex flex-col lg:flex-row mt-5">
            <div className="max-w-[300px] mb-12 flex flex-col gap-3 text-end text-xl pr-5 border-r-4 lg:border-r-0 border-black">
              <p>Sensor Fotolumínico.</p>
              <p>Conectable por Bluetooth.</p>
              <p>Batería 5 días.</p>
              <p>Servicios en la nube.</p>
            </div>
            <div className="hidden lg:flex w-[5px] bg-gray-800 lg:h-48"></div>
            <div className="max-w-[300px] flex flex-col gap-3 text-xl pl-5 border-l-4 lg:border-l-0 border-black">
              <p>Sin necesidad de tirillas reactivas.</p>
              <p>Sin manchas, ni sangre, ni agujas.</p>
              <p>Certicación IP67.</p>
            </div>
        </div>
      </section>
      <section className="relative w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#14b8a6" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,90.7C480,117,600,203,720,224C840,245,960,203,1080,192C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <div className="bg-teal-500 h-96 py-8 text-white px-6 lg:px-16 flex flex-col items-center">
          <p className="text-2xl text-center font-bold uppercase px-6 mb-5">¿Por qué Gluzy?</p>
          <p className="text-justify text-lg w-[300px] lg:w-[450px]">
            Está pensando para mejorar la calidad de vida de las personas. Emplea tecnología no invasiva, y libre de contamiación química, a diferencia de los glucómetros tradicionales.
          </p> 
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 32  0"><path fill="#14b8a6" fill-opacity="1" d="M0,128L60,112C120,96,240,64,360,90.7C480,117,600,203,720,224C840,245,960,203,1080,192C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
      </section>
      {/* <section className="w-full h-96 bg-gray-700">
       <StaticImage
        class="w-96"
        alt="dashboard template"
        src="https://cdn.dribbble.com/users/973226/screenshots/4575443/dribbble-datta---free-demo.jpg"
       />
      </section> */}
      <section className="w-full min-h-96 bg-gray-100 py-10 lg:px-16">
        <div className="flex flex-col items-center p-6">
          <p className="text-2xl text-cyan-700 uppercase">Nuestra Solución</p>
          <div className="grid gap-8 lg:gap-16 lg:grid-cols-3 my-12">
            <div className="flex flex-col items-center text-gray-800">
              <StaticImage
                class="w-64 h-64 rounded-full object-cover mb-5"
                alt="IA cover"
                src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <p className="text-md text-center font-semibold uppercase mb-5">Impulsados por Inteligencia Artificial</p>
              <p className="text-md text-justify">El presente dispositivo, emplea para su funcionamiento, un algoritmo de inteligencia artificial, el cuál es capaz de interpretar los valores de glucosa en sangre.</p>
            </div>
            <div className="flex flex-col items-center text-gray-800">
              <StaticImage
                class="w-64 h-64 rounded-full object-cover mb-5"
                alt="Cloud cover"
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/174837929/original/2089c7fa1bd8bc5e1b689f75dff43ecafda9d352/design-unique-dashboard-webapp-admin-panel-ux-ui.png"
              />
              <p className="text-md text-center font-semibold uppercase mb-5">Servicios en la nube</p>
              <p className="text-md text-justify">Gluzy es capaz de sincronizarse con la nube, para dar seguimiento a tus datos de evolución y control de la diabetes, mismos que pueden ser supervisados por tu especialista adjunto.</p>
            </div>
            <div className="flex flex-col items-center text-gray-800">
              <StaticImage
                class="w-64 h-64 rounded-full object-cover mb-5"
                alt="Phone cover"
                src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <p className="text-md text-center font-semibold uppercase mb-5">Compatible con Smartphones</p>
              <p className="text-md text-justify">¿Prefieres que tu celular sea tu glucómetro? Entonces seguro te intersa, Gluzysense, el cuál puedes llevar y conectar a tu dispositivo móvil, sin necesidad de batería.</p>
            </div>
          </div>
          {/* <button className="border-2 border-teal-500 text-teal-500 w-36 p-2 rounded-full text-lg transition duration-500 focus:scale-110 focus:bg-teal-500 focus:text-white">Ordenar</button> */}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
