
const ShopNowProduct = () => {
    return (
        <div className="bg-[#F1F1F1] py-10 px-5 lg:px-40">
            <div className="grid grid-cols-1 text-center lg:text-start lg:grid-cols-2 gap-x-44">
                <div>
                    <div className="text-4xl lg:text-6xl font-normal my-8">Collections</div>
                    <div className="capitalize text-lg my-8 leading-10">
                        you can explore ans shop many differnt collection
                        from various barands here.
                    </div>
                    <a href="#newProduct" className="bg-[#1E2832] text-white px-5 py-2 border-0">
                        Shop Now
                    </a>
                </div>
                <div className="w-44 lg:w-72 mx-auto lg:mx-0 relative mt-10 lg:mt-0">
                    <div className="relative z-10">
                        <img className="rounded-tl-[100px] rounded-br-[100px]" src="/engin-akyurt-jaZoffxg1yc-unsplash.png" alt="Product Image" />
                    </div>
                    <div className="w-44 lg:w-72 h-full rounded-tl-[100px] rounded-br-[100px] border-2 border-[#AFAFAF] absolute top-2 -right-2 z-[0]"></div>
                </div>
            </div>
            <div className="absolute top-52 right-0 w-44 hidden lg:block">
                <img src="/frame.png" alt="frame" />
            </div>
        </div>
    )
}

export default ShopNowProduct;