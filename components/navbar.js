import { Disclosure } from "@headlessui/react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", current: null },
  { name: "Profile", href: "/profile", current: null },
  { name: "Services", href: "/services", current: null },
  { name: "Contact", href: "/contact", current: null },
  // { name: "Resources", href: "/resources", current: null },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="z-20 w-full bg-bleached-silk shadow sticky top-0 font-serif"
    >
      {({ open }) => (
        <>
          <div className="justify-between pr-4 lg:pr-0 mx-auto lg:max-w-7xl md:items-center md:flex md:pr-8">
            <div>
              <div className="flex items-center justify-between md:block">
                <a href="/">
                  <Image
                    src="/kslogo-navbar-graphic1.svg"
                    width={240}
                    height={64}
                    alt="navigate to home"
                    aria-label="Navigate to homepage"
                  />
                </a>
                <div className="md:hidden">
                  <Disclosure.Button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-charcoal"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-charcoal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              <div className="hidden md:ml-6 md:block">
                <div className="items-center justify-center px-4 space-y-8 md:flex md:space-x-3 md:space-y-0">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-gray-900 bg-gray-200"
                          : "text-charcoal bg-inherit hover:bg-gray-200 hover:text-gray-900",
                        "rounded-md px-3 py-2"
                      )}
                      aria-label={item.name}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-gray-900 bg-gray-300"
                      : "text-charcoal bg-inherit hover:bg-gray-200 hover:text-gray-900",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
