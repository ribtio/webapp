import { useState } from "react";
import { Button } from "@nextui-org/react";

function Nav() {
  const [isDropdrownOpen, setDropdownOpen] = useState(false);

  return (

    <nav className=" bg-white p-4">

      <div className="container font-medium text-xl flex mx-auto items-center justify-between">

        <div className=" w-full flex space-x-5 relative left-20 p-5 justify-center ">

          <div className="relative ">
            <button onClick={() => setDropdownOpen(!isDropdrownOpen)} href="/button" className="flex items-center text-md rounded-md text-gray-900 hover:text-black">
              <span className="flex items-center">
                Product
                <span className="ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </span>
            </button>



            {isDropdrownOpen && (
              <div className="absolute w-40 mt-2 rounded-xl shadow-lg shadow-gray-300 bg-white z-20 left-1/2 e transform -translate-x-1/2 ">

                <a className="flex items-center justify-between gap-2 block px-4 py-2 rounded-xl hover:bg-pink-100" href=""><span className="flex items-center" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                Link 1
                </span>
                </a>

                <a className="flex items-center justify-between gap-2 block px-4 py-2 rounded-xl hover:bg-pink-100" href=""><span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                Link 2
                </span>
                </a>

                <a className="flex items-center justify-between gap-2 block px-4 py-2 rounded-xl hover:bg-pink-100" href="">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                    Link 3
                  </span>
                </a>



              </div>
            )}
          </div>

          <a href="/link" className=" text-pink-700 font-bold hover:text-pink-600 rounded-md ">Princing</a>
          <a href="/link" className=" text-md hover:bg-gray-400, text-gray-900">Learn</a>

        </div>
        <Button href="/button" radius="sm" className="flex text-md font-normal px-10 text-pink-600 bg-pink-100">
          Home <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 
            .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          </span></Button>

      </div>

    </nav>
  )
}

export default Nav;