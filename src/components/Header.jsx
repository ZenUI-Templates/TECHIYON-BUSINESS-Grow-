import { useState } from 'react';
import { HiMiniBars3 } from 'react-icons/hi2';
import { IoIosArrowDown } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { mainNavigation } from '../constant';
import brand from '/Logo dark.png';

const Header = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [visibleSubmenu, setVisibleSubmenu] = useState(null);
  const handleMenuClick = (index) => {
    setVisibleSubmenu(visibleSubmenu === index ? null : index);
  };
  const handleCloseNavigation = (e) => {
    setIsNavigationOpen(false);
  };
  return (
    <header className='fixed backdrop-blur-md inset-x-0 w-[100vw] border-b-[1px] border-[#EAE8F3] z-[100] lg:py-2 py-5 bg-white/5'>
      <div className='container flex items-center justify-between'>
        <Link to=''>
          <img
            src={brand}
            alt='logo'
          />
        </Link>
        <ul className='flex items-center lg:gap-10 gap-5 nav_menus max-lg:hidden'>
          {mainNavigation?.map((item, index) => (
            <li
              className='relative group py-5'
              key={index}
            >
              {item.submenu ? (
                <>
                  <Link
                    to={item.link}
                    className='flex items-center gap-2'
                  >
                    {item?.name}{' '}
                    <IoIosArrowDown
                      className='group-hover:rotate-180 transition-all ease-linear duration-200'
                      size={18}
                    />
                  </Link>
                  {item?.submenu && (
                    <ul
                      className='absolute top-[calc(100%+20px)] pointer-events-none left-[-50%] bg-[#fff] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]
                     opacity-0 z-[100] group-hover:opacity-100 group-hover:top-[100%] group-hover:pointer-events-auto transition-all duration-200 ease-linear rounded-b-md overflow-hidden'
                    >
                      {item?.submenu?.map((subItem, index) => (
                        <li
                          key={index}
                          className='min-w-max'
                        >
                          <Link
                            to={subItem?.link}
                            className='w-[200px] inline-block border-b border-gray-200 text-center py-3 hover:bg-gray-50 bg-white transition-all duration-100 ease-linear'
                          >
                            {subItem?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.link}>{item?.name}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-5 max-lg:hidden '>
          <Link
            to=''
            className='btn white_btn !py-4'
          >
            LOG IN
          </Link>
          <Link
            to=''
            className='btn primary_btn !py-4'
          >
            SIGN UP
          </Link>
        </div>
        <button
          className='lg:hidden'
          onClick={() => setIsNavigationOpen((isOpen) => !isOpen)}
        >
          {isNavigationOpen ? <IoClose size={25} /> : <HiMiniBars3 size={25} />}
        </button>
        <div
          className={`mobile_navigation lg:hidden fixed z-[1000] top-[69px] w-full h-screen bg-black/60 transition-all duration-300 ease-linear left-0  ${
            isNavigationOpen ? 'translate-x-0' : '-translate-x-[100%]'
          }`}
          onClick={handleCloseNavigation}
        >
          <div
            className='w-[300px] h-[calc(100vh-69px)] bg-white overflow-y-scroll p-10 pr-5 relative'
            onClick={(e) => e.stopPropagation()}
          >
            <ul className='flex flex-col gap-2'>
              {mainNavigation?.map((menuItem, index) => (
                <li key={index}>
                  {menuItem?.submenu ? (
                    <>
                      <div
                        className='flex items-center justify-between'
                        onClick={(e) => {
                          e.preventDefault();
                          handleMenuClick(index);
                        }}
                      >
                        <Link
                          to={menuItem?.link}
                          onClick={(e) => {}}
                        >
                          {menuItem?.name}
                        </Link>
                        <button className='p-[6px] cursor-pointer border border-gray-300 rounded-sm'>
                          <IoIosArrowDown size={20} />
                        </button>
                      </div>
                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-linear ${
                          visibleSubmenu === index
                            ? 'grid-rows-[1fr] opacity-100 mt-3'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <ul
                          className={`overflow-hidden rounded-md divide-y-[1px] divide-gray-300 bg-slate-200 min-w-max`}
                        >
                          {menuItem?.submenu?.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem?.link}
                                className='px-5 py-[10px] block'
                                onClick={handleCloseNavigation}
                              >
                                {subItem?.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={menuItem?.link}
                      onClick={handleCloseNavigation}
                    >
                      {menuItem?.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className='flex items-center gap-5 lg:hidden mt-5 absolute bottom-10 inset-x-0 pl-10'>
              <Link
                to=''
                className='btn white_btn !py-4'
              >
                LOG IN
              </Link>
              <Link
                to=''
                className='btn primary_btn !py-4'
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
