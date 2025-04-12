import { useCart } from "./CartContext";

export default function ListEachProduct({ eachSingleProduct, product }) {

    const {cart, setCart} = useCart();

    function UpdateBgColor(eachSingleProduct) {
        if (eachSingleProduct >= 4.0) {
            return 'bg-green-500';
        } else if (eachSingleProduct < 4.0 && eachSingleProduct > 3.0) {
            return 'bg-yellow-500';
        } else {
            return 'bg-red-500';
        }
    }

    const getColor = UpdateBgColor(eachSingleProduct?.rating)

    const isTrue = cart.some((eachItem) => {
        return eachItem?.id === eachSingleProduct?.id;
    })

    function HandleButtonClock(eachSingleProduct) {
        setCart((previousValue) => {

            if (isTrue) {
                return previousValue.filter((item) => {
                    return item?.id !== eachSingleProduct?.id;
                })
            } else {
                return [...previousValue,
                    {id : eachSingleProduct?.id,
                    inCart:true,
                    element:eachSingleProduct
                    }
                ]
            }
        })
    }

    return (
            <div className="bg-black rounded-md px-3 py-3">
            <div className="h-60 bg-cover bg-no-repeat bg-center rounded-t-lg" style={{
                backgroundImage: `url(${eachSingleProduct['thumbnail']})`,
                backgroundSize: 'cover'
            }}></div>
            <div className="grid grid-cols-3 gap-1">

                <div className="text-white col-span-3 text-xl">{eachSingleProduct?.title}</div>
                <div className={`text-white my-2 rounded-full ${getColor} px-2 w-[64px] 
                py-1`}>{eachSingleProduct?.rating} ☆</div>
                <div className="text-white py-2">{eachSingleProduct?.price}$</div>
                <button className="rounded-lg bg-indigo-800 text-white hover:bg-indigo-500 hover:text-black" onClick={() => {
                    HandleButtonClock(eachSingleProduct)
                }}>{isTrue ? "Remove" : "Add to Cart"}</button>
            </div>
        </div>
         )
}