

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
                        <img  src="/CORAL.png" className="w-44 mx-auto lg:mx-0" />
                        <div className=" py-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua
                        </div>
                        <div className="flex justify-evenly ">
                            <div>
                                <img src="/facebook.png" />
                            </div>
                            <div>
                                <img src="/twitter.png" />
                            </div>
                            <div>
                                <img src="/linkedin.png" />
                            </div>
                            <div>
                                <img src="/dribbble.png" />
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
                <div className="py-4 flex justify-between text-white">
                    <div>
                        © 2022 Coral , Inc.
                    </div>
                    <div>
                        <img src="/icons_payment.png" />
                    </div>
                    <div className="cursor-pointer">
                        <div onClick={() => handleScrollTop()}>
                            Scroll to top
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;