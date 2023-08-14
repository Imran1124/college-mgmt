import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { FaRegHandPointRight } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BiSolidContact } from 'react-icons/bi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { RiSchoolLine } from 'react-icons/ri';
import { CgFormatIndentIncrease } from 'react-icons/cg';
import { AiOutlineNotification } from 'react-icons/ai';

export default function MainPage() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    // design university page using tailwind css?
    <div>
      {/* <div className="bg-gray-200 py-4 flex px-8">
        <img src="/assets/jharkhand_logo.svg" className="h-20 w-20 " />
        <div className="ml-5">
          <h1 className="text-4xl font-bold text-blue-950">University</h1>
          <p className="text-blue-900 text-lg w-96">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div> */}
      {/* reesponsive nav bar */}
      <div className="bg-gray-100 py-1 flex px-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img src="/assets/jharkhand_logo.svg" className="h-20 w-20 " />
            <div className="ml-5">
              <h1 className="text-4xl font-bold text-gray-700">University</h1>
              <p className="text-gray-600 text-lg ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <header>
        <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-8 text-gray-100 bg-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setShowMenu(!showMenu)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            className={`${
              showMenu ? 'block' : 'hidden'
            } w-full md:flex md:items-center md:w-auto`}
            id="menu"
          >
            <ul className=" text-base text-gray-50 md:flex md:justify-between ">
              <li className="flex justify-start items-center hover:text-purple-400">
                <AiOutlineHome size={18} className="" />
                <a
                  className="md:py-3 px-1 py-2 block hover:text-purple-400"
                  href="#"
                >
                  Home
                </a>
                &nbsp; | &nbsp;
              </li>
              <li className="flex justify-start items-center hover:text-purple-400">
                <BiSolidContact size={18} />
                <a
                  className="md:py-3 px-1 py-2 block hover:text-purple-400"
                  href="#"
                >
                  About
                </a>
                &nbsp; | &nbsp;
              </li>
              <li className="flex justify-start items-center hover:text-purple-400">
                <AiOutlineUnorderedList size={18} className="" />
                <a
                  className="md:py-3 px-1 py-2 block hover:text-purple-400"
                  href="#"
                >
                  Courses
                </a>
                &nbsp; | &nbsp;
              </li>
              <li className="flex justify-start items-center hover:text-purple-400">
                <RiSchoolLine size={18} className="" />
                <a
                  className="md:py-3 px-1 py-2 block hover:text-purple-400"
                  href="#"
                >
                  Study Center
                </a>
                &nbsp; | &nbsp;
              </li>
              <li className="flex justify-start items-center hover:text-purple-400">
                <CgFormatIndentIncrease size={18} className="" />
                <a
                  className="md:py-3 px-1 py-2 block hover:text-purple-400"
                  href="#"
                >
                  Admission
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        <div className="col-span-3">
          <Swiper
            style={{
              width: '100%'
            }}
            // responsive slidePreview
            slidesPerView={1}
            // spaceBetween={30}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <img
                  // get image from unsplash
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  className="w-full h-[30rem] object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  // get image from unsplash
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  className="w-full h-[30rem] object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/*  */}
        <div className="flex ">
          <div className="flex">
            <div className="text-[2vh] py-1 px-6 text-white bg-[red] font-bold flex items-center justify-center">
              Notice
            </div>
            <div
              className="arrow-right "
              style={{
                borderTop: '30px solid transparent',
                borderBottom: '30px solid transparent',

                borderLeft: '30px solid red'
              }}
            ></div>
          </div>
          <div className="flex items-center justify-center ml-5 text-[2vh] max-[600px]:block w-full">
            <marquee direction="left" className="max-[844px]:mt-5">
              Admission Open for the session 2023 - 24.Please book your
              admission seat.
            </marquee>
          </div>
        </div>
        {/*  */}
        <div>
          {/* component */}
          {/* This is an example component */}
          {/* <div className="w-full mx-auto">
            <div className="border-blue-400  border">
              <div className="flex items-center justify-between bg-blue-600 p-2">
                <h3 className="text-lg font-medium text-gray-100 dark:text-white">
                  Sign in to our platform
                </h3>
              </div>
              <form className="space-y-6 p-4" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="text-sm ml-3">
                      <label
                        htmlFor="remember"
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{' '}
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
      {/* notice section */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 p-3 px-24">
        <div>
          <div className="mt-16">
            <div className="flex flex-row justify-start items-center  px-5">
              <h1 className="text-2xl font-bold text-gray-800">
                <AiOutlineNotification size={24} />
              </h1>{' '}
              &nbsp; &nbsp;
              <h1 className="text-2xl font-bold text-gray-800">Notice Board</h1>
            </div>
            <div className="px-5">
              <hr />
            </div>
            <div className="flex flex-col px-5 py-3">
              <div className="flex flex-row justify-between">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-gray-100">
                    <h1 className="text-xl font-bold text-gray-100 bg-blue-800 px-3 py-1">
                      Notice 1
                    </h1>
                    <div className="p-5">
                      <p className="text-gray-700 flex justify-start items-center gap-2">
                        <FaRegHandPointRight size={30} /> Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, voluptatum.
                      </p>
                      <br />
                      <p className="text-gray-700 flex justify-start items-center gap-2">
                        <FaRegHandPointRight size={30} /> Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, voluptatum.
                      </p>
                    </div>
                    <h1 className="text-right text-sm text-blue-700 px-5 mb-3 underline ">
                      More Notice
                    </h1>
                  </div>
                  <div className="bg-gray-100">
                    <h1 className="text-xl font-bold text-gray-100 bg-blue-800 px-3 py-1">
                      Notice 1
                    </h1>
                    <div className="p-5">
                      <p className="text-gray-700 flex justify-start items-center gap-2">
                        <FaRegHandPointRight size={30} /> Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, voluptatum.
                      </p>
                      <br />
                      <p className="text-gray-700 flex justify-start items-center gap-2">
                        <FaRegHandPointRight size={30} /> Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, voluptatum.
                      </p>
                    </div>
                    <h1 className="text-right text-sm text-blue-700 px-5 mb-3 underline ">
                      More Notice
                    </h1>
                  </div>
                  <div className="bg-gray-100">
                    <h1 className="text-xl font-bold text-gray-100 bg-blue-800 px-3 py-1">
                      Notice 1
                    </h1>
                    <div className="p-5">
                      <p className="text-gray-700 flex justify-start items-center gap-2">
                        <FaRegHandPointRight size={30} /> Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, voluptatum.
                      </p>
                      <br />
                      <p className="text-gray-700 flex justify-start items-center gap-2">
                        <FaRegHandPointRight size={30} /> Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quisquam, voluptatum.
                      </p>
                    </div>
                    <h1 className="text-right text-sm text-blue-700 px-5 mb-3 underline ">
                      More Notice
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
