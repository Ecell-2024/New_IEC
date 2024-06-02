// import React from 'react';
import "./Footer.css";


import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import greaterThanLight from "../../assets/greaterthanlight.svg";

export default function Foot() {

  
  return (
    <>
      <div className="footer   border-white/65 bg-white text-black  border-t-[1px] border-t-[#b1b1b17d]">
        <div className="upperfoot p-8 border-b-[1px] border-b-[#8a8a8a92]">
          <div className="box flex flex-col lg:flex-col items-center lg:items-start">
            <h4 className="text-lg font-bold mb-5">Subscribe to IEC KIET</h4>
            <p className="text-md mb-2 font-medium ">
              Receive Important Updates and Newsletter
            </p>
            <div className="input-group w-[90%] flex flex-row mb-5 mt-2 lg:mt-5 justify-center items-center">
              <input
                type="email"
                className="md:mr-3 !mb-0 w-full !border-0 !border-b-2  !rounded-none !border-b-[#aaa] bg-transparent outline-none p-1"
                id="Email"
                name="Email"
                placeholder="example@gmail.com"
                autoComplete="off"
              />
              <p className="rounded-lg p-5 md:p-2 subscribe !cursor-pointer [transition:_all_0.1s_linear;] hover:[transform:_translateY(-2px);]">
                <span className="!cursor-pointer  font-bold ">
                  Subscribe
                </span>
              </p>
            </div>
            <div className="handle flex flex-row items-center justify-between w-[80%] lg:w-[70%] ">
              <a>
                <FaInstagram className=" h-8 w-8 test-black hover:text-[#012060] cursor-pointer transition-all duration-150" />
              </a>
              <a >
                <FaFacebook className=" h-7 w-7 test-black hover:text-[#012060] cursor-pointer transition-all duration-150" />
              </a>
              <a >
                <FaTelegram className=" h-7 w-7 test-black hover:text-[#012060] cursor-pointer transition-all duration-150" />
              </a>
              <a >
                <FaLinkedinIn className=" h-7 w-7 test-black hover:text-[#012060] cursor-pointer transition-all duration-150" />
              </a>
              <a >
                <FaYoutube className=" h-7 w-7 test-black hover:text-[#012060] cursor-pointer transition-all duration-150" />
              </a>
            </div>
          </div>

          <div className="footbox mt-6 lg:mt-0 ">
            <div className="box mr-8 flex flex-col items-center lg:items-start">
              <h4 className="text-lg mb-5 font-bold">Contact Us</h4>
              <p className="mb-3 font-medium ">
                KIET Group of Institution,Ghaziabad, Delhi NCR, Uttar Pradesh,
                India, PIN 201206
              </p>
              <iframe
                title="mapp"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.893214061326!2d77.49584041070436!3d28.75260507851681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf47204fb9241%3A0xd11ed4123c7691fe!2sKIET%20GROUP%20OF%20INSTITUTIONS%2C%20Muradnagar%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1710332661807!5m2!1sen!2sin"
                width="300"
                height="150"
                style={{
                  borderRadius: "10px",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="mt-3 mb-2 font-semibold ">
                Mail us at :-{" "}
                <span className="font-medium ">
                  IEC@kiet.edu
                </span>
              </p>
              <p className="mb-4 font-semibold">
                Phone No. :-{" "}
                <span className="font-medium ">
                  +91 99999 99999
                </span>
              </p>
            </div>

            <div className="box ">
              <h4 className="text-lg font-bold mb-5">Important Links</h4>
              <div className="upper flex flex-row justify-between items-start w-[80%]">
                <div className="inner ">
                  <a
                    
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold  cursor-pointer"
                  >
                    <img
                      src={greaterThanLight}
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Our Pillars
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold  cursor-pointer"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src={ greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Innovation
                  </a>
                  <a
                   
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                  >
                    <img
                      src={greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Entrepreneurship
                  </a>
                  <a
                   
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                  >
                    {" "}
                    <img
                      src={greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Consultancy
                  </a>
                  
                </div>
                <div className="inner">
                  <a
                   
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                  >
                    <img
                      src={ greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Our Glimses
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                    rel="noreferrer"
                  >
                    <img
                      src={ greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Our Startups
                  </a>
                  <a
                    
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                  >
                    <img
                      src={ greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Our Dignitories
                  </a>
                  <a
                    
                    className="!flex !flex-row items-center justify-normal mb-2 font-semibold dark:font-medium cursor-pointer"
                  >
                    <img
                      src={greaterThanLight
                      }
                      alt=""
                      className="w-2 h-2 mr-2"
                    />
                    Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lowerfoot !w-[100vw] font-medium dark:font-medium">
          <h3 className="">Made with ❤️ E-Cell 2024</h3>
        </div>
      </div>
    </>
  );
}