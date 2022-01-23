/* eslint-disable max-len */
import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../../../utils/helpers";

const navMainMenu = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Why ITOT", link: "/why-itot" },
  { name: "MarketPlace", link: "/market-place" },
  { name: "Web Portal", link: "/web-portal" },
  { name: "Help", link: "/help" },
];

const profileMenu = [
  { name: "Your Profile", link: "/profile" },
  { name: "Settings", link: "/settings" },
];

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-200">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 sm:h-20 lg:h-24">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1  flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* For Mobile */}
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="/assets/images/header/logo.png"
                    alt="Logo"
                  />
                  {/* For Web */}
                  <img
                    className="hidden lg:block h-16 w-auto"
                    src="/assets/images/header/logo.png"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="flex-col inset-y-0  flex items-end pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative z-10">
                  <div className="flex flex-row ">
                    <div className="hidden md:flex uppercase font-bold text-sm items-center pr-4 ">
                      <Link to="/signup">
                        <h4 className="text-custom-blue">Create - Account</h4>
                      </Link>
                      <Link to="/login">
                        <h4 className="text-custom-blue pl-4">Login</h4>
                      </Link>
                    </div>
                    <Menu.Button className="bg-gray-800 flex  text-sm rounded-full focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 border-1 border-black rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {profileMenu.map(item => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.link}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className="hidden md:block md:ml-6">
                  <div className="flex space-x-8">
                    {/* For Web */}
                    {navMainMenu.map(item => (
                      <NavLink
                        key={item.name}
                        to={item.link}
                        className="py-2 uppercase text-sm font-medium hover:text-custom-red"
                        activeClassName="border-b-2 border-custom-red text-custom-red hover:text-custom-red"
                        exact
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* For Mobile */}
              {navMainMenu.map(item => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-custom-red"
                  activeClassName="bg-custom-red text-white"
                  exact
                >
                  {item.name}
                </NavLink>
              ))}
              <hr />
              <NavLink
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-custom-red"
                activeClassName="bg-custom-red text-white"
                exact
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-custom-red"
                activeClassName="bg-custom-red text-white"
                exact
              >
                Create Account
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
