import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = (props: any) => {
    const [showCategories, setShowCategories] = useState<boolean>(false)
    const [CartItems, setCartItems] = useState<any>([])
    
    useEffect(() => {
        Promise.resolve(props.data).then(res => setCartItems(res?.cart_items ? res.cart_items : []))
    }, [props])

    return (
        <nav className="lg:px-40  bg-[#F1F1F1] ">
            <div className="p-5 border-b flex items-center justify-between border-[#E3E3E3] ">
                <div className="flex items-center hidden lg:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <circle cx="7" cy="7" r="6" stroke="#0B0B0B" strokeWidth="2" />
                        <path d="M16 16L13 13" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="w-full lg:w-min flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="31" height="15" viewBox="0 0 31 15" fill="none">
                            <path d="M8.35355 7.5L15.5 0.353554L22.6464 7.5L15.5 14.6464L8.35355 7.5Z" stroke="black" strokeWidth="0.5" />
                            <path d="M16.3536 7.5L23.5 0.353554L30.6464 7.5L23.5 14.6464L16.3536 7.5Z" stroke="black" strokeWidth="0.5" />
                            <path d="M0.353554 7.5L7.5 0.353554L14.6464 7.5L7.5 14.6464L0.353554 7.5Z" stroke="black" strokeWidth="0.5" />
                        </svg>
                        <div className="mx-2 text-2xl">
                            <Link to={"/"}>
                                CORAL
                            </Link>
                        </div>
                        <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="31" height="15" viewBox="0 0 31 15" fill="none">
                            <path d="M0.353554 7.5L7.5 0.353554L14.6464 7.5L7.5 14.6464L0.353554 7.5Z" stroke="black" strokeWidth="0.5" />
                            <path d="M8.35355 7.5L15.5 0.353554L22.6464 7.5L15.5 14.6464L8.35355 7.5Z" stroke="black" strokeWidth="0.5" />
                            <path d="M16.3536 7.5L23.5 0.353554L30.6464 7.5L23.5 14.6464L16.3536 7.5Z" stroke="black" strokeWidth="0.5" />
                        </svg>
                    </div>

                    <button type="button" onClick={() => setShowCategories(!showCategories)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex grid grid-cols-3 gap-x-4 text-sm">
                    <Link to={"login"} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="12" cy="8" r="4" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="ms-1">
                            login
                        </span>
                    </Link>
                    <Link to={"create-account"} className="flex items-center">
                        Register
                    </Link>
                    <Link to={"/cart"} className="flex relative items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" />
                            <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#0B0B0B" strokeWidth="2" />
                        </svg>
                        <span className="ms-1">
                            Cart
                        </span>
                        {
                            CartItems.length ?
                                <div className="absolute top-0 -right-6 rounded-full bg-red-700 px-2 text-white">
                                    {CartItems.reduce((init: any, curr: any) => (init + curr.quantity), 0)}</div>
                                :
                                <div></div>
                        }
                    </Link>
                </div>
            </div>
            <div className="lg:mt-6 text-sm">
                <div className={`ps-3 bg-white overflow-hidden lg:bg-transparent lg:h-max flex flex-col lg:flex-row justify-between
                ${showCategories ? "h-[300px]" : "h-0"} transition-all duration-500
                `}>
                    <div className=" block lg:hidden mt-3 grid grid-cols-3 gap-x-4 text-sm">
                        <Link to={"login"} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="12" cy="8" r="4" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span className="ms-1">
                                login
                            </span>
                        </Link>
                        <Link to={"create-account"} className="flex items-center">
                            Register
                        </Link>
                        <Link to={"/cart"} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round" />
                                <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" stroke="#0B0B0B" strokeWidth="2" />
                            </svg>
                            <span className="ms-1 relative">
                                Cart
                            {
                            CartItems.length ?
                                <div className="absolute top-0 -right-6 rounded-full bg-red-700 px-2 text-white">
                                    {CartItems.reduce((init: any, curr: any) => (init + curr.quantity), 0)}</div>
                                :
                                <div></div>
                        }
                            </span>
                        </Link>
                    </div>

                    <div>
                        Jewelry & Accessories
                    </div>
                    <div>
                        Clothing & Shoes
                    </div>
                    <div>
                        Home & Living
                    </div>
                    <div>
                        Wedding & Party
                    </div>
                    <div>
                        Wedding & Party
                    </div>
                    <div>
                        Art & Collectibles
                    </div>
                    <div>
                        Craft Supplies & Tools
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;