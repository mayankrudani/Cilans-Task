

const Footer = () => {

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className="lg:px-44 relative my-10">
                <div className="mx-5 lg:mx-0 text-center lg:text-start grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col justify-between items-between">
                        <img src="/assets/images/CORAL.png" className="w-20 lg:w-44 mx-auto lg:mx-0" />
                        <div className="py-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </div>
                        <div className="grid grid-cols-4">
                            <div>
                                <img src="/assets/images/facebook.png" />
                            </div>
                            <div>
                                <img src="/assets/images/twitter.png" />
                            </div>
                            <div>
                                <img src="/assets/images/linkedin.png" />
                            </div>
                            <div>
                                <img src="/assets/images/dribbble.png" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="font-bold">CATALOG</div>
                        <div className="*:mt-3">
                            <div>
                                Necklaces
                            </div>
                            <div>
                                hoodies
                            </div>
                            <div>
                                Jewelry Box
                            </div>
                            <div>
                                T-shirt
                            </div>
                            <div>
                                Jacket
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="font-bold">ABOUT US</div>
                        <div className="*:mt-3">
                            <div>
                                Our Produces
                            </div>
                            <div>
                                Sitemap
                            </div>
                            <div>
                                FAQ
                            </div>
                            <div>
                                About Us
                            </div>
                            <div>
                                Tems & Conditions
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="font-bold">CUSTOMER SERVICES</div>
                        <div className="*:mt-3">
                            <div>
                                Contact Us
                            </div>
                            <div>
                                Track your Orders
                            </div>
                            <div>
                                Product Care and Repair
                            </div>
                            <div>
                                Book An Appointment
                            </div>
                            <div>
                                Shipping & Returns
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#1E2832] lg:px-44">
                <div className="py-4 text-center sm:*:my-0 *:my-1 sm:flex justify-between text-white">
                    <div>
                        © 2022 Coral , Inc.
                    </div>
                    <div>
                        <img src="/assets/images/icons_payment.png" className="mx-auto sm:mx-0" alt="payment icon" />
                    </div>
                    <div className="cursor-pointer">
                        <div className="flex items-center justify-center" onClick={() => handleScrollTop()}>
                            Scroll to top
                            <svg className="ms-3 mt-1.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6.66666L8 2.66666M8 2.66666L12 6.66666M8 2.66666L8 12.6667" stroke="white" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;