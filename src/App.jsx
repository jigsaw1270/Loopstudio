import "./App.css";
import interactive from "./assets/images/desktop/image-interactive.jpg";

function App() {
  return (
    <main>
      <section className="relative bg-[url('./assets/images/desktop/image-hero.jpg')] w-full h-[40rem] bg-no-repeat bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 container">
          {/* Navigation */}
          <nav className="flex items-center justify-between pt-10">
            <div>
              <h1 className="font-jose text-4xl text-white font-bold">
                loopstudios
              </h1>
            </div>
            <ul className="flex space-x-6 font-alata text-sm">
              <li className="text-white">About</li>
              <li className="text-white">Careers</li>
              <li className="text-white">Events</li>
              <li className="text-white">Products</li>
              <li className="text-white">Support</li>
            </ul>
          </nav>

          {/* Hero Text */}
          <div className="uppercase font-jose text-7xl font-light text-white p-8 tracking-widest border-white border-2 mt-32 w-[60%]">
            Immersive <br /> Experiences <br /> that deliver
          </div>
        </div>
      </section>
      <section className="my-[15rem]">
        <div className="relative container">
          {/* Image */}
          <img src={interactive} alt="interactive" className="w-[50rem]" />

          {/* Overlay Content */}
          <div className="absolute -bottom-1 right-[10rem] bg-white px-20 pt-20 max-w-screen-xl">
            <h1 className="uppercase font-jose text-5xl font-light">
              the leader in <br /> interactive vr
            </h1>
            <p className="font-alata text-dark-gray mt-4">
              Founded in 2011, Loopstudios has been producing world-class <br />
              virtual reality projects for some of the best companies around the
              <br /> globe. Our award-winning creations have transformed <br />
              businesses through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container flex items-center justify-between mb-20">
          <h1 className="uppercase font-jose text-5xl font-light">
            Our creations
          </h1>
          <button className="py-3 px-10 border-2 border-black font-alata text-sm tracking-widest">
            SEE ALL
          </button>
        </div>

        <div className="container mb-8 grid grid-cols-4">
          <div className="relative bg-[url('/src/assets/images/desktop/image-deep-earth.jpg')] max-w-[17rem] h-[30rem] bg-no-repeat">
            <p className="text-white absolute bottom-8 text-3xl p-8 font-jose font-light">
              DEEP <br />
              EARTH
            </p>
          </div>
          <div className="relative bg-[url('/src/assets/images/desktop/image-night-arcade.jpg')] max-w-[17rem] h-[30rem] bg-no-repeat">
            <p className="text-white absolute bottom-8 text-3xl p-8 font-jose font-light">
              NIGHT <br />
              ARCADE
            </p>
          </div>
          <div className="relative bg-[url('/src/assets/images/desktop/image-soccer-team.jpg')] max-w-[17rem] h-[30rem] bg-no-repeat">
            <p className="text-white absolute bottom-8 text-3xl p-8 font-jose font-light">
              SOCCER <br />
              TEAM
            </p>
          </div>
          <div className="relative bg-[url('/src/assets/images/desktop/image-grid.jpg')] max-w-[17rem] h-[30rem] bg-no-repeat">
            <p className="text-white absolute bottom-8 text-3xl p-8 font-jose font-light">
              THE <br />
              GRID
            </p>
          </div>
          <div className="relative bg-[url('/src/assets/images/desktop/image-from-above.jpg')] max-w-[17rem] h-[30rem] bg-no-repeat">
            <p className="text-white absolute bottom-8 text-3xl p-8 font-jose font-light">
              FROM UP <br />
              ABOVE VR
            </p>
          </div>
          <div className="relative bg-[url('/src/assets/images/desktop/image-pocket-borealis.jpg')] max-w-[17rem] h-[30rem] bg-no-repeat">
            <p className="text-white absolute bottom-8 text-3xl p-8 font-jose font-light">
              POCKET <br />
              BOREALIS
            </p>
          </div>
          <div className="relative bg-[url('/src/assets/images/desktop/image-curiosity.jpg')] max-w-[17rem] h-[30rem] bg-no-repeat">
            <p className="text-white absolute bottom-8 text-3xl p-8 font-jose font-light">
              THE <br />
              CURIOSITY
            </p>
          </div>
          <div className="relative bg-[url('/src/assets/images/desktop/image-fisheye.jpg')] max-w-[17rem] h-[30rem] bg-no-repeat">
            <p className="text-white absolute bottom-8 text-3xl p-8 font-jose font-light">
              MAKE IT <br />
              FISHEYE
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
