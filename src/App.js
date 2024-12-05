import React from "react";
import './index.css';


export default function App() {
  return (
    <div className="flex w-full h-screen bg-white">
      <aside className="p-4 h-full w-[270px] bg-blue-600 shadow-sm">
        <h1 className="flex gap-2 text-white font-bold text-[18px] font-sans">Disaster Preparedness <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
          <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
            </svg>
              </h1>
              <ul className="mt-10 text-[15px] text-white">
                <h2 className="mt-2 text-white mb-2 font-semibold">
                  Evaluation: 
                </h2>
                <div className="font-sans">
                <li className="mb-6">
                  <a href="#overview" className=" hover:bg-white py-2 px-10 rounded-md hover:text-black">Overview</a>
                </li>
                <li className="mb-6">
                  <a href="#emergency-kit" className="hover:bg-white py-2 px-10 rounded-md hover:text-black">Emergency Kit</a>
                </li>
                <li className="mb-6">
                  <a href="#contacts" className="hover:bg-white py-2 px-10 rounded-md hover:text-black">Emergency Contacts</a>
                </li>
                </div>

                
                <h2 className="mt-20 text-white mb-2 font-semibold">
                  Recommendation: 
                </h2>
                <div className="font-sans">
                <li className="mb-6">
                  <a href="#emergency-plan" className=" hover:bg-white py-2 px-10 rounded-md hover:text-black">Emergency Plan</a>
                </li>
                <li className="mb-6">
                  <a href="#information" className="hover:bg-white py-2 px-10 rounded-md hover:text-black">Information</a>
                </li>
                <li>
                  <a href="#special-needs" className="hover:bg-white py-2 px-10 rounded-md hover:text-black">Special Needs</a>
                </li>
                </div>
              </ul>
      </aside>
      
      <main className="flex-1 ">
        <header className="w-full px-4 py-2 flex justify-end grow text-black bg-transparent shadow-sm">
        <div className="flex grow ml-80 justify-center items-center font-serif font-semibold">
          <h1 >Welcome to the Disaster Preparedness App</h1>
          </div>
          <form className="relative">
                <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                  <svg
                    width="17"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="search"
                    class="w-5 h-5 text-gray-700"
                  >
                    <path
                      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                      stroke="currentColor"
                      stroke-width="1.333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <input
                  className="input rounded-full px-8 py-2 mr-4 border-2 border-transparent focus:outline-none focus:border-blue-600 placeholder-gray-400 transition-all duration-300 shadow-md"
                  placeholder="Search..."
                  required=""
                  type="text"
                />
                <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </form>
            <button
              className="group flex items-center justify-start w-11 h-11 bg-blue-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
            >
              <div
                className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                  <path
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                  ></path>
                </svg>
              </div>
              <div
                class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                Logout
              </div>
            </button>
        </header>
      
      <div className="flex grow justify-center p-4 gap-2">
        <section id="overview" className="mt-6 shadow-lg p-6">
          <h3 className="text-lg font-bold mb-2">Overview</h3>
            <p className="text-gray-700">
              This app provides essential information to prepare for natural disasters like earthquakes, floods, and typhoons.
            </p>
          </section>

        <section id="emergency-kit" className="mt-6 shadow-lg p-6">
          <h3 className="text-lg font-bold mb-2">Emergency Kit</h3>
            <p className="text-gray-700">
              Prepare an emergency kit with water, food, flashlights, first aid supplies, and important documents.
            </p>
          </section>

        <section id="contacts" className="mt-6 shadow-lg p-6">
          <h3 className="text-lg font-bold mb-2">Emergency Contacts</h3>
            <p className="text-gray-700">
              Ensure you have the contact numbers of local disaster response teams, family members, and neighbors.
            </p>
          </section>
        </div>

        <div className="flex grow justify-center p-4 gap-2">
          <section id="contacts" className="mt-6 shadow-lg p-6">
          <h3 className="text-lg font-bold mb-2">Make a Family Emergency Plan</h3>
            <p className="text-gray-700">
            Establish a communication strategy, meeting points, and evacuation routes. Ensure every family member knows what to do in case of an emergency.
            </p>
          </section>

          <section id="contacts" className="mt-6 shadow-lg p-6">
            <h3 className="text-lg font-bold mb-2">Stay Informed</h3>
              <p className="text-gray-700">
              Sign up for local alerts and monitor weather forecasts. Understanding the risks in your area (earthquakes, floods, etc.) helps you prepare effectively.
              </p>
            </section>

          <section id="contacts" className="mt-6 shadow-lg p-6">
            <h3 className="text-lg font-bold mb-2">Prepare for Special Needs</h3>
              <p className="text-gray-700">
              Plan for pets, infants, elderly family members, and those with disabilities by ensuring they have the required medications, supplies, and mobility aids.
              </p>
            </section>
          </div>

          <div className="flex grow justify-center p-4">
            <section className="flex grow bg-white w-full max-w-8xl rounded-md shadow-xl p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center w-full">
                <img src="/landslide.avif" className="w-full h-auto rounded-md object-cover" alt="Landslide"></img>
                <img src="/earthquake-houses.avif" className="w-full h-auto rounded-md object-cover" alt="Earthquake"></img>
                <img src="/floods.avif" className="w-full h-auto rounded-md object-cover" alt="Floods"></img>
                <img src="/stormsurge.jpg" className="w-full h-auto rounded-md object-cover" alt="Storm Surge"></img>
                <img src="/typhoon.jpg" className="w-full h-auto rounded-md object-cover" alt="Typhoon"></img>
              </div>
            </section>
          </div>
        </main>
      </div>
  );
}

