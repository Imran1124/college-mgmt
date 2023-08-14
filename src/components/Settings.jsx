import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AiOutlineSetting } from 'react-icons/ai';
import { useAppContext } from '../context';

export default function Settings() {
  const { changeTheme } = useAppContext();
  return (
    <div className="m-0 mt-2">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
          <AiOutlineSetting className="w-6 h-6 mr-4" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-4">
              <Menu.Item>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      changeTheme('primary');
                    }}
                  >
                    <div className="border w-6 h-6 bg-blue-500 rounded" />
                  </button>
                  <button
                    onClick={() => {
                      changeTheme('secondary');
                    }}
                  >
                    <div className="border w-6 h-6 bg-green-500 rounded" />
                  </button>
                  <button
                    onClick={() => {
                      changeTheme('rose');
                    }}
                  >
                    <div className="border w-6 h-6 bg-rose-500 rounded" />
                  </button>
                  <button
                    onClick={() => {
                      changeTheme('violet');
                    }}
                  >
                    <div className="border w-6 h-6 bg-violet-500 rounded" />
                  </button>
                  <button
                    onClick={() => {
                      changeTheme('dark');
                    }}
                  >
                    <div className="border w-6 h-6 bg-gray-900 rounded" />
                  </button>
                  <button
                    onClick={() => {
                      changeTheme('purple');
                    }}
                  >
                    <div className="border w-6 h-6 bg-purple-900 rounded" />
                  </button>
                  {/*  */}
                  <button
                    onClick={() => {
                      changeTheme('darkGreen');
                    }}
                  >
                    <div className="border w-6 h-6 bg-[#0f766e] rounded" />
                  </button>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
