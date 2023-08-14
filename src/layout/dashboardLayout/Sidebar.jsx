/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { defaultNavItems } from './defaultNavItems';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import {
  AiFillCaretLeft,
  AiFillCaretDown,
  AiOutlineSetting
} from 'react-icons/ai';
import { useAppContext } from '../../context';
import useTheme from '../../theme/useTheme';

// add NavItem prop to component prop

const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed
}) => {
  const { bgSideBar } = useTheme();
  const { user } = useAppContext();
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [collapse, setCollpase] = useState('');
  const [subcollapse, setsubCollpase] = useState('');
  const [id, setId] = useState(JSON.parse(sessionStorage.getItem('auth_user')));
  const name = id?.name;
  const handleSubmenuTrigger = (id, eachdata) => {
    if (id === collapse) {
      setCollpase('');
    } else {
      setCollpase(id);
      navigate(eachdata.href);
    }
  };
  const secondchangecolor = (id, eachitem) => {
    if (id === subcollapse) {
      setsubCollpase('');
    } else {
      setsubCollpase(id);
      navigate(eachitem.href);
    }
  };
  console.log('hello', collapse, subcollapse, collapsed);
  return (
    <div
      className={
        `${bgSideBar}` +
        classNames({
          ' text-zinc-50 fixed md:static md:translate-x-0 z-20': true,
          'transition-all duration-300 ease-in-out': true,
          'w-[300px]': !collapsed,
          'w-16': collapsed,
          '-translate-x-full': !shown
        })
      }
    >
      <div
        className={classNames({
          'flex flex-col justify-between h-screen sticky inset-0 w-full': true
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            'flex items-center border-b border-b-[#156361] transition-none': true,
            'p-4 justify-between': !collapsed,
            'py-4 justify-center': collapsed
          })}
        >
          {!collapsed && (
            <span className="whitespace-nowrap flex">
              <img
                src={`data:image/png;base64,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`}
                className="rounded-[50%] w-12 h-12"
              />
              <div className="flex leading-6 ml-1 mt-1 tracking-tighter justify-center items-center">
                <h1 className="font-bold">
                  {user?.name}
                  <h2 className="text-gray-300 text-sm font-normal">
                    {user?.area}
                  </h2>
                </h1>
                {/*  */}
              </div>
            </span>
          )}
          <button
            className="grid place-content-center hover:bg-[#115e59] w-10 h-10 rounded-full opacity-0 md:opacity-100"
            onClick={() => {
              setCollapsed(!collapsed);
              setCollpase('');
              setsubCollpase('');
            }}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-grow" onClick={() => setCollapsed(false)}>
          <ul
            className={classNames({
              'my-2 flex flex-col gap-2 items-stretch': true
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li key={item.id} style={{ display: 'block' }}>
                  <Link
                    to={item.href}
                    className={classNames({
                      'bg-[#115e59]': collapse?.includes(item.id),
                      'text-indigo-100 hover:bg-[#115e59] flex justify-center ': true, //colors
                      'transition-colors duration-300': true, //animation
                      ' px-4 py-2  gap-4 ': !collapsed,
                      'p-2': collapsed
                    })}
                    style={{
                      display: 'flex',
                      fontSize: '16px',
                      width: '100%'
                    }}
                    onClick={() => handleSubmenuTrigger(item.id, item)}
                    onKeyUp={() => {}}
                  >
                    {item.icon}{' '}
                    {!collapsed ? (
                      <span className="flex justify-between items-center w-[90%]">
                        <span className="-mt-1 flex justify-between items-center">
                          {!collapsed && item.label}{' '}
                        </span>
                        <span>
                          <span className="flex items-center justify-end ml-10">
                            {' '}
                            {item.sub ? (
                              <>
                                {collapse?.includes(item.id) ? (
                                  <AiFillCaretDown
                                    size={20}
                                    className="sidebar-position-icon colored2"
                                  />
                                ) : (
                                  <AiFillCaretLeft
                                    size={20}
                                    className="sidebar-position-icon colored1"
                                  />
                                )}
                              </>
                            ) : null}
                          </span>
                        </span>
                      </span>
                    ) : null}
                  </Link>
                  {!collapsed && collapse?.includes(item.id) ? (
                    <>
                      {item?.sub?.map((eachitem) => {
                        return (
                          <>
                            <div
                              className={
                                subcollapse?.includes(eachitem.id)
                                  ? 'bg-[#0f766e]  w-[100%]  py-[2vh]    cursor-pointer font-bold'
                                  : 'bg-[#0f766e]  w-[100%]  py-[2vh]    cursor-pointer'
                              }
                              onClick={() =>
                                secondchangecolor(eachitem.id, eachitem)
                              }
                            >
                              <div className="pl-[5vh]">
                                <div className="flex space-x-1 w-full leading-3">
                                  <div
                                    className={
                                      subcollapse?.includes(eachitem.id)
                                        ? 'text-xs -mt-1 text-[#134e4a] '
                                        : null
                                    }
                                  >
                                    ●
                                  </div>
                                  <div className="text-[13px]">
                                    {eachitem.label}
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-400 h-[1px] mt-4 mx-10"></div>
                            </div>
                          </>
                        );
                      })}
                    </>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={classNames({
            'grid place-content-stretch p-4 ': true
          })}
        >
          <div className="flex gap-4 items-center h-11 overflow-hidden">
            <img
              src={`data:image/png;base64,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`}
              height={36}
              width={36}
              alt="profile image"
              className="rounded-full"
            />
            {!collapsed && (
              <div className="flex flex-col ">
                <span className="text-indigo-50 my-0">{user?.name}</span>
                {/* <Link to="/" className="text-indigo-200 text-sm">
                  View Profile
                </Link> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
