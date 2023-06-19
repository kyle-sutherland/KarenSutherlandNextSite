import Link from "next/link";
import {useState} from "react";

export default function Navigation() {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-bleached-silk shadow sticky top-0">
            <div className="justify-between pr-4 mx-auto lg:max-w-7xl md:items-center md:flex md:pr-8">
                <div>
                    <div className="flex items-center justify-between md:block">
                        <a href="/">
                                <img src='/kslogo-navbar-graphic1.svg' width={'240px'} height={'64px'} alt='' className='bg-thistle-blossom'/>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
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
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? 'block' : 'hidden'
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-charcoal">
                                <Link href="/profile">
                                    <a>Profile</a>
                                </Link>
                            </li>
                            <li className="text-charcoal">
                                <Link href="/services">
                                    <a>Services</a>
                                </Link>
                            </li>
                            <li className="text-charcoal">
                                <Link href="/fees">
                                    <a>Fees</a>
                                </Link>
                            </li>
                            <li className="text-charcoal">
                                <Link href="/contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                            <li className='text-charcoal'>
                                <Link href='/resources'>
                                    <a>Resources</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
