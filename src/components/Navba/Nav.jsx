import "./Nav.css";
import { useState } from "react";
import im from "../../assets/Home/logo-removebg-preview.png"
function Navbar() {
  const [endeavourMainMenu, setEndeavourMainMenu] = useState(0);
  const userId = localStorage.getItem("userId");
  const handleOpenEndeavourMainMenu = () => {
    setEndeavourMainMenu(!endeavourMainMenu);
  };

 

 

  return (
    <div className="w-[100vw] mb-10">
    
        
        <div className="relative">
          <div
            className={` fixed  z-50 hidden md:flex flex-row w-[100vw] justify-between text-white px-8 p-3 pl-[4%]`}
          >
            <div className="hidden md:flex justify-between items-center w-[20%]">
              <img
               src={im}
                onClick={() => history("/")}
                className="w-14 h-14 lg:w-14 lg:h-14 z-20 cursor-pointer"
                alt="E-Cell logo"
              />
            </div>
            <div className="w-[60%] hidden md:flex justify-between items-center">
              <a
                
                className="text-black dark:text-white font-semibold"
              >
                Home
              </a>
              <a
                
                className="text-black dark:text-white font-semibold"
              >
                Innovation
              </a>
              <a
                
                className="text-black dark:text-white font-semibold"
              >
                Entrepreneurship
              </a>
              <a
                
                className="text-black dark:text-white font-semibold"
              >
                Consultancy
              </a>
              <a
                
                className="text-black dark:text-white font-semibold"
              >
                Contact Us
              </a>
              
              
              <a>
                <div className="container">
                  <label className="toggle" htmlFor="switch">
                    <input
                      id="switch"
                      className="input"
                      type="checkbox"
                      
                    />
                   

                    
                  </label>
                </div>
              </a>
            </div>
          </div>

          <div
            className={` fixed  z-50 flex md:hidden flex-row w-[100vw] justify-between items-center text-white p-3 px-4`}
          >
            <div className="flex md:hidden justify-center items-center">
              <img
                src={im}
                onClick={() => history("/")}
                className="w-12 h-12 z-20 cursor-pointer"
                alt="E-Cell logo"
              />
            </div>

            <div
              className={`flex flex-row  ${
                !userId ? "justify-center " : "justify-between w-[38%]"
              }  items-center `}
            >
              <div className="containerr lg:hidden flex">
                <label className="toggle" htmlFor="switch">
                  <input
                    id="switch"
                    className="input"
                    type="checkbox"
                    
                  />

                  

                  
                </label>
              </div>

             

              <div className={`lg:hidden flex ${!userId && "ml-6"} mr-3`}>
                <div
                  className="flex flex-col"
                  onClick={handleOpenEndeavourMainMenu}
                >
                  <div
                    className={`w-4 h-[5px] bg-[#1e1e1e] dark:bg-white rounded-2xl transition-transform duration-200 ${
                      endeavourMainMenu ? "translate-x-full" : ""
                    }`}
                  ></div>
                  <div className="w-8 h-[5px] bg-[#1e1e1e] dark:bg-white mt-[6px] mb-[6px] rounded-2xl"></div>
                  <div
                    className={`w-4 h-[5px] bg-[#1e1e1e] dark:bg-white rounded-2xl transition-transform duration-200 ${
                      endeavourMainMenu ? "" : "translate-x-full"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              endeavourMainMenu ? "translate-x-0" : "translate-x-full"
            }  transition-all duration-200 lg:hidden   w-[100vw] h-[94.5vh] fixed bg-[#ffffff] dark:bg-[#090909] text-[#000] dark:text-white mt-[8.6vh] flex flex-col justify-between py-28 items-center text-3xl font-bold !z-[100]`}
          >
            <a onClick={() => setEndeavourMainMenu(0)} to="/endeavour">
              Home
            </a>
            <a
              onClick={() => setEndeavourMainMenu(0)}
              to="/endeavour/events"
              className="text-[#000] dark:text-white"
            >
              Innovation
            </a>
            <a
              onClick={() => setEndeavourMainMenu(0)}
              to="/endeavour/certificate"
            >
              Entrepreneurship
            </a>
            <a
              onClick={() => setEndeavourMainMenu(0)}
              to="/endeavour/sponsors"
            >
              Consultancy
            </a>
            <a
              onClick={() => {
                history("/contactus");
                setEndeavourMainMenu(0);
              }}
              className=""
            >
              Contact Us
            </a>
           
          </div>
        </div>
    
    </div>
  );
}

export default Navbar;