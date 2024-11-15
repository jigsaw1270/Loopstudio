import './App.css'

function App() {

  return (

    <section className=" relative bg-[url('./assets/images/desktop/image-hero.jpg')] w-full h-[40rem] bg-no-repeat bg-cover bg-center  mix-blend-plus-darker">
           {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-25 z-1"></div> */}
    <div className="container z-50">
      <nav className="flex items-center justify-between pt-10">
        <div>
          <h1 className="font-jose text-3xl text-white font-bold">loopstudios</h1>
        </div>
        <ul className="flex space-x-5 font-alata text-sm">
          <li className="text-white">About</li>
          <li className="text-white">Careers</li>
          <li className="text-white">Events</li>
          <li className="text-white">Products</li>
          <li className="text-white">Support</li>
        </ul>
      </nav>
      <div className='uppercase font-alata text-6xl font-thin text-white p-6 tracking-widest border-white'>
        Immersive <br />Experiences <br />that deliver
      </div>
    </div>
  </section>

  )
}

export default App
