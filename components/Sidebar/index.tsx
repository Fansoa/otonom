"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
} from "@headlessui/react";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

import {
  Bars3Icon,
  Cog6ToothIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";

import {
  // Children,
  // Navigation,
  NavigationList,
} from "@/components/Sidebar/Types.ts";
import OtonomIcon from "@/components/Icons/Otonom.tsx";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const navigation: NavigationList = [
  {
    name: "Modules",
    icon: Squares2X2Icon,
    children: [
      { name: "Mealworm", href: "/modules/mealworm" },
      { name: "Poultry", href: "/modules/poultry" },
      { name: "Aquaponics", href: "/modules/aquaponics" },
    ],
  },
  {
    name: "Menu",
    icon: Squares2X2Icon,
    href: "/dashboard/mealworm",
  },
];
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();

  // navigation must be declare in the scope where navigationWithCurrentProp is needed
  // navigation must be redeclared at every render to prevent value seted in previous render

  // function isNavigation(
  //   menuItem: Navigation | Children,
  // ): menuItem is Navigation {
  //   return (menuItem as Navigation).icon !== undefined;
  // }

  // function isActive(menuItem: Children): Children;
  // function isActive(menuItem: Navigation): Navigation;
  // function isActive(menuItem: Navigation | Children): Navigation | Children {
  //   // Je dois trouver un moyen d'indiquer à Typescript à quel type appartient l'argument menuItem
  //   // Q'est-ce qui distingue un type Navigation d'un type Children
  //   //
  //   if (isNavigation(menuItem) && typeof menuItem.href === "string") {
  //     if (pathname.startsWith(menuItem.href)) {
  //       return { ...menuItem, current: true };
  //     }
  //   }
  //   if (
  //     isNavigation(menuItem) &&
  //     menuItem.children &&
  //     menuItem.children.length > 0
  //   ) {
  //     return {
  //       ...menuItem,
  //       children: menuItem?.children.map((menuSubItem) =>
  //         isActive(menuSubItem),
  //       ),
  //     };
  //   }
  //   return { ...menuItem };
  // }

  function isActive(menuItem) {
    if (menuItem.href) {
      if (pathname.startsWith(menuItem.href)) {
        return { ...menuItem, current: true };
      }
    }
    if (menuItem.children) {
      return {
        ...menuItem,
        children: menuItem?.children.map((menuSubItem) =>
          isActive(menuSubItem),
        ),
      };
    }
    return { ...menuItem };
  }

  const navigationWithCurrentProp = navigation.map((menuItem) =>
    isActive(menuItem),
  );

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <OtonomIcon />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigationWithCurrentProp.map((item) => (
                          <li key={item.name}>
                            {!item.children ? (
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-indigo-700 text-white"
                                    : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                                )}
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className={classNames(
                                    item.current
                                      ? "text-white"
                                      : "text-indigo-200 group-hover:text-white",
                                    "h-6 w-6 shrink-0",
                                  )}
                                />
                                {item.name}
                              </a>
                            ) : (
                              <Disclosure as="div">
                                <DisclosureButton
                                  className={classNames(
                                    item.current
                                      ? "bg-indigo-700 text-white"
                                      : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                    "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6",
                                  )}
                                >
                                  <item.icon
                                    aria-hidden="true"
                                    className={classNames(
                                      item.current
                                        ? "text-white"
                                        : "text-indigo-200 group-hover:text-white",
                                      "h-6 w-6 shrink-0",
                                    )}
                                  />
                                  {item.name}
                                  <ChevronRightIcon
                                    aria-hidden="true"
                                    className={classNames(
                                      item.current
                                        ? "text-white"
                                        : "text-indigo-200 group-hover:text-white",
                                      "ml-auto h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-white",
                                    )}
                                  />
                                </DisclosureButton>
                                <DisclosurePanel as="ul" className="mt-1 px-2">
                                  {item.children.map((subItem) => (
                                    <li key={subItem.name}>
                                      {/* 44px */}
                                      <DisclosureButton
                                        as="a"
                                        href={subItem.href}
                                        className={classNames(
                                          subItem.current
                                            ? "bg-indigo-700 text-white"
                                            : "hover:bg-indigo-700 hover:text-white",
                                          "block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-indigo-200",
                                        )}
                                      >
                                        {subItem.name}
                                      </DisclosureButton>
                                    </li>
                                  ))}
                                </DisclosurePanel>
                              </Disclosure>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                    {/* <li>
                      <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-indigo-700 text-white'
                                  : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li> */}
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <OtonomIcon />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigationWithCurrentProp.map((item) => (
                      <li key={item.name}>
                        {!item.children ? (
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-indigo-700 text-white"
                                : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                item.current
                                  ? "text-white"
                                  : "text-indigo-200 group-hover:text-white",
                                "h-6 w-6 shrink-0",
                              )}
                            />
                            {item.name}
                          </a>
                        ) : (
                          <Disclosure as="div">
                            <DisclosureButton
                              className={classNames(
                                item.current
                                  ? "bg-indigo-700 text-white"
                                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6",
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current
                                    ? "text-white"
                                    : "text-indigo-200 group-hover:text-white",
                                  "h-6 w-6 shrink-0",
                                )}
                              />
                              {item.name}
                              <ChevronRightIcon
                                aria-hidden="true"
                                className={classNames(
                                  item.current
                                    ? "text-white"
                                    : "text-indigo-200 group-hover:text-white",
                                  "ml-auto h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-white",
                                )}
                              />
                            </DisclosureButton>
                            <DisclosurePanel as="ul" className="mt-1 px-2">
                              {item.children.map((subItem) => (
                                <li key={subItem.name}>
                                  {/* 44px */}
                                  <DisclosureButton
                                    as="a"
                                    href={subItem.href}
                                    className={classNames(
                                      subItem.current
                                        ? "bg-indigo-700 text-white"
                                        : "hover:bg-indigo-700 hover:text-white",
                                      "block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-indigo-200",
                                    )}
                                  >
                                    {subItem.name}
                                  </DisclosureButton>
                                </li>
                              ))}
                            </DisclosurePanel>
                          </Disclosure>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Separator */}
            {/* <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" /> */}

            {/* Top Section */}
            <div className="flex  justify-end flex-1 gap-x-4 self-stretch lg:gap-x-6">
              {/* <form action="#" method="GET" className  */}
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                {/* <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button> */}

                {/* Separator */}
                {/* <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" /> */}

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm font-semibold leading-6 text-gray-900">
                        Tom Cook
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
