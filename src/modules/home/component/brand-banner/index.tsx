
const BrandBanner = () => {
    return (
        <div className="relative bg-[url('/brand-banner.png')] bg-cover  bg-no-repeat lg:min-h-[650px] w-100">
            <div className="lg:absolute top-10 right-0">
                <img src="/zara_logo_light.png" alt="zara logo" />
            </div>
            <div className="lg:absolute pt-10 lg:pt-0 bg-black lg:bg-transparent top-1/3 left-1/2 ">
                <div className="text-center lg:text-start lg:w-80 text-white">
                    <img className="mx-auto lg:mx-0" src="/zaara_logo_white.png" />
                    <div className="my-10">
                        Lustrous yet understated. The new evening
                        wear collection exclusively offered at the
                        reopened Giorgio Armani boutique in Los
                        Angeles.
                    </div>
                    <button className="bg-white text-black font-semibold px-5 p-2 border-0">
                        See Collection
                    </button>
                </div>

            </div>

        </div>
    )
}

export default BrandBanner