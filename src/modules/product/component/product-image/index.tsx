


const ImageGallary = ({ product }: any) => {

    return (
        <div className="mx-auto">
            {
                product.images.map((v: any, i: number) => {
                    return (
                        <div key={i}>
                            <img src={v} className="w-75 mb-4" />
                        </div>
                    )
                })
            }
        </div>
    )

}

export default ImageGallary;